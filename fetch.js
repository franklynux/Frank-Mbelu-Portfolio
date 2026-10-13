const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "franklynux";
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA || "true";
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME || "franklynux";

const fallbackProfile = {
  data: {
    user: {
      name: "Franklyn Mbelu",
      bio: "Cloud, DevOps and Platform Engineer",
      avatarUrl:
        "https://avatars.githubusercontent.com/u/170720658?u=731809d5d7282754bed7a0732b9e0b0284e60a7c&v=4",
      location: null,
      pinnedItems: {
        totalCount: 1,
        edges: [
          {
            node: {
              name: "fleetguard-operator",
              description: "Generic TTL Cleanup for Kubernetes",
              forkCount: 0,
              stargazers: { totalCount: 0 },
              url: "https://github.com/franklynux/fleetguard-operator",
              id: "R_kgDOM8tq-A",
              diskUsage: 50,
              primaryLanguage: { name: "Go", color: "#00ADD8" }
            }
          }
        ]
      }
    }
  }
};

function ensureFallbackProfile() {
  if (!fs.existsSync("./public/profile.json")) {
    fs.writeFileSync(
      "./public/profile.json",
      JSON.stringify(fallbackProfile, null, 2)
    );
    console.log("Created fallback public/profile.json");
  }
}

function ensureFallbackBlogs() {
  if (!fs.existsSync("./public/blogs.json")) {
    fs.writeFileSync(
      "./public/blogs.json",
      JSON.stringify({ items: [] }, null, 2)
    );
    console.log("Created fallback public/blogs.json");
  }
}

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_TOKEN) {
    console.warn(
      "REACT_APP_GITHUB_TOKEN is not set or empty. Proceeding with fallback profile data."
    );
    ensureFallbackProfile();
  } else {
    console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
    const queryData = JSON.stringify({
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
        console.warn(
          `GitHub API returned status ${res.statusCode}. Missing or invalid token. Keeping fallback profile data.`
        );
        ensureFallbackProfile();
        res.resume();
        return;
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
              JSON.stringify(parsed.errors),
              "Keeping fallback profile data."
            );
            ensureFallbackProfile();
            return;
          }
          const edges = parsed?.data?.user?.pinnedItems?.edges;
          if (edges) {
            parsed.data.user.pinnedItems.edges = edges.filter(
              e => e && e.node && e.node.id
            );
          }
          fs.writeFileSync("./public/profile.json", JSON.stringify(parsed));
          console.log("saved file to public/profile.json");
        } catch (e) {
          console.warn(
            "Failed to parse GitHub API response, keeping fallback profile data:",
            e.message
          );
          ensureFallbackProfile();
        }
      });
    });

    req.on("error", error => {
      console.warn(
        "GitHub API request failed with network error:",
        error.message,
        "Keeping fallback profile data."
      );
      ensureFallbackProfile();
    });

    req.write(queryData);
    req.end();
  }
} else {
  ensureFallbackProfile();
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
      fs.writeFileSync("./public/blogs.json", result);
      console.log("saved file to public/blogs.json");
    })
    .catch(error => {
      console.warn(
        "Medium RSS feed request failed:",
        error.message,
        "Keeping fallback blogs data."
      );
      ensureFallbackBlogs();
    });
} else {
  ensureFallbackBlogs();
}
