const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  if (!GITHUB_TOKEN) {
    if (fs.existsSync("./public/profile.json")) {
      console.warn(
        "REACT_APP_GITHUB_TOKEN is not set. Keeping existing public/profile.json fallback."
      );
    } else {
      console.warn(
        "REACT_APP_GITHUB_TOKEN is not set and no fallback public/profile.json was found."
      );
    }
  } else {
    console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
    var data = JSON.stringify({
      query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
    });
    const default_options = {
      hostname: "api.github.com",
      path: "/graphql",
      port: 443,
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "Node"
      }
    };

    const req = https.request(default_options, res => {
      let responseBody = "";

      console.log(`statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        if (fs.existsSync("./public/profile.json")) {
          console.warn(
            `GitHub API returned status ${res.statusCode}. Keeping existing public/profile.json fallback.`
          );
          return;
        }
        throw new Error(ERR.requestFailed);
      }

      res.on("data", d => {
        responseBody += d;
      });
      res.on("end", () => {
        try {
          const parsed = JSON.parse(responseBody);
          if (parsed.errors && !parsed.data?.user) {
            console.warn(
              "GitHub GraphQL returned errors:",
              JSON.stringify(parsed.errors)
            );
            if (fs.existsSync("./public/profile.json")) {
              console.warn("Keeping existing public/profile.json fallback.");
              return;
            }
          }
          const edges = parsed?.data?.user?.pinnedItems?.edges;
          if (edges) {
            parsed.data.user.pinnedItems.edges = edges.filter(
              e => e && e.node && e.node.id
            );
          }
          fs.writeFile(
            "./public/profile.json",
            JSON.stringify(parsed),
            function (err) {
              if (err) return console.log(err);
              console.log("saved file to public/profile.json");
            }
          );
        } catch (e) {
          fs.writeFile("./public/profile.json", responseBody, function (err) {
            if (err) return console.log(err);
            console.log("saved file to public/profile.json");
          });
        }
      });
    });

    req.on("error", error => {
      if (fs.existsSync("./public/profile.json")) {
        console.warn(
          "GitHub API request failed with error:",
          error.message,
          "Keeping existing public/profile.json fallback."
        );
        return;
      }
      throw error;
    });

    req.write(data);
    req.end();
  }
}

if (MEDIUM_USERNAME !== undefined) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const Parser = require("rss-parser");
  const parser = new Parser();

  parser
    .parseURL(`https://medium.com/feed/@${MEDIUM_USERNAME}`)
    .then(feed => {
      const items = feed.items.map(item => ({
        title: item.title,
        pubDate: item.pubDate,
        link: item.link,
        guid: item.guid,
        author: item.creator,
        description: item.contentSnippet || item.content,
        content: item["content:encoded"] || item.content
      }));

      const result = JSON.stringify({ items: items });
      fs.writeFile("./public/blogs.json", result, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
      });
    })
    .catch(error => {
      if (fs.existsSync("./public/blogs.json")) {
        console.warn(
          "Medium RSS feed request failed:",
          error.message,
          "Keeping existing public/blogs.json fallback."
        );
        return;
      }
      console.error(
        "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
      );
      throw error;
    });
}
