/* Franklyn Mbelu's DevOps Portfolio Configuration */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Franklyn Mbelu",
  title: "Hi all, I'm Franklyn",
  subTitle: emoji(
    "A results-driven Cloud & DevOps Engineer ☁️🚀 with expertise in AWS, CI/CD, Infrastructure as Code, and automation. Passionate about building scalable, secure, and cost-optimized cloud solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/franklynux",
  linkedin: "https://www.linkedin.com/in/franklynux/",
  gmail: "franklynmbelu@gmail.com",
  medium: "https://medium.com/@franklynux",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "CLOUD & DEVOPS ENGINEER FOCUSED ON AUTOMATION AND RELIABILITY",
  skills: [
    emoji(
      "⚡ Automating infrastructure and deployments using Terraform, Jenkins, Ansible, and GitHub Actions"
    ),
    emoji(
      "⚡ Deploying and managing containerized apps on AWS ECS, EKS, and Docker"
    ),
    emoji(
      "⚡ Implementing CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline"
    )
  ],
  softwareSkills: [
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "terraform", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "kubernetes", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "github", fontAwesomeClassname: "fab fa-github"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Nnamdi Azikiwe University",
      logo: require("./assets/images/NAU_logo.png"),
      subHeader: "B.Eng. in Electronics and Computer Engineering",
      duration: "2010-2015",
      desc: "",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Infrastructure as Code", progressPercentage: "90%"},
    {Stack: "Cloud Architecture", progressPercentage: "85%"},
    {Stack: "CI/CD Automation", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Cloud Administrator",
      company: "Phoenix Converge Solutions Limited",
      companylogo: require("./assets/images/Phoenix_Converge_Solutions_Limited_logo.png"),
      date: "Jan 2024 – Feb 2025",
      desc: "Managed AWS infrastructure for 20+ clients, implemented security best practices, and automated deployments using Terraform and GitHub Actions.",
      descBullets: [
        "Implemented AWS IAM best practices, cost optimization strategies, and enterprise-grade backup solutions.",
        "Led over 10 cloud migration projects maintaining 99.99% uptime."
      ]
    },
    {
      role: "Cloud Architect",
      company: "Tranter IT",
      companylogo: require("./assets/images/tranter_it_infrastructure_services_logo.png"),
      date: "Nov 2020 – June 2022",
      desc: "Designed cloud architectures for 15+ enterprise clients, improved performance by 20%, ensured compliance via audits, and deployed monitoring using CloudWatch and ELK stack.",
      descBullets: [
        "Architected and deployed scalable, secure cloud solutions on AWS for various clients.",
        "Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 50%."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Highlighted Projects",
  subtitle: "Some of the impactful solutions I've built or contributed to:",
  projects: [
    {
      image: require("./assets/images/E-commerce Platform Deployment with Amazon ECS.png"),
      projectName: "E-commerce Platform Deployment on Amazon ECS",
      projectDesc:
        "CI/CD pipeline using GitHub Actions + ECS with zero-downtime deployment strategy.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/franklynux/ecommerce-platform/blob/main/README.md"
        }
      ]
    },
    {
      image: require("./assets/images/E-commerce Platform Microservice Architecture.png"),
      projectName: "E-commerce Platform Microservice Architecture",
      projectDesc:
        "A production-ready, scalable e-commerce platform built with microservices architecture, featuring automated CI/CD, comprehensive monitoring, and cloud-native deployment on Amazon EKS.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/franklynux/ecommerce-platform-microservice-architecture/blob/main/README.md"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "AWS Certifications and hands-on accomplishments in cloud engineering.",
  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "Valid: Sep 2023 – Sep 2026",
      image: require("./assets/images/aws-certified-solutions-architect-associate.png"),
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "AWS Certified Developer - Associate",
      subtitle: "Valid: Dec 2023 – Dec 2026",
      image: require("./assets/images/aws-certified-developer-associate.png"),
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "AWS Certified SysOps Administrator - Associate",
      subtitle: "Valid: May 2024 – May 2027",
      image: require("./assets/images/aws-certified-sysops-administrator-associate.png"),
      imageAlt: "AWS Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "I occasionally write about DevOps automation, cloud architecture, and tooling.",
  displayMediumBlogs: "false",
  blogs: [],
  display: true
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Always open to sharing my knowledge and speaking at events."
  ),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Podcasts may appear here in the future.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let’s connect — whether you have a project or just want to say hi.",
  number: "+234 703 100 8161",
  email_address: "mac_franc@yahoo.com"
};

const twitterDetails = {
  userName: "0_chinaldo",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
