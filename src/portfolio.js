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
  username: "franklynmbelu@devops:~$ ",
  title: "Hi all, I'm Franklyn",
  subTitle: emoji(
    "A results-driven Cloud & DevOps Engineer ☁️🚀 with expertise in AWS, CI/CD, Infrastructure as Code, and automation. Passionate about building scalable, secure, and cost-optimized cloud solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qpFBkSzFCraNY7jE2zGMRXzbxmIui8vj/view?usp=sharing",
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
  subTitle:
    "CLOUD & DEVOPS ENGINEER with AWS Expertise | Focused on IaC, CI/CD & Container Orchestration",
  skills: [
    emoji(
      "⚡ Architect and implement enterprise-grade, multi-account cloud infrastructures on AWS and Azure, reducing operational costs by 30-40%"
    ),
    emoji(
      "⚡ Automate infrastructure provisioning and application deployments using Terraform, CloudFormation, and GitOps, achieving 99.9% deployment success rates"
    ),
    emoji(
      "⚡ Deploy and orchestrate containerized applications on AWS ECS, EKS, and Azure AKS with auto-scaling and zero-downtime deployment strategies"
    ),
    emoji(
      "⚡ Build comprehensive CI/CD pipelines with Jenkins, GitHub Actions, and cloud-native tools, reducing deployment times by 50-60%"
    ),
    emoji(
      "⚡ Implement monitoring, logging, and observability solutions using CloudWatch, Prometheus, Grafana, and ELK stack for proactive system management"
    )
  ],

  softwareSkills: [
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "terraform", fontAwesomeClassname: "fas fa-layer-group"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "kubernetes", fontAwesomeClassname: "fas fa-dharmachakra"},
    {skillName: "jenkins", fontAwesomeClassname: "fab fa-jenkins"},
    {skillName: "ansible", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "prometheus", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "grafana", fontAwesomeClassname: "fas fa-tachometer-alt"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "github", fontAwesomeClassname: "fab fa-github"},
    {skillName: "bash", fontAwesomeClassname: "fas fa-terminal"}
  ],
  display: true
};

const devopsMethodologies = {
  title: "DevOps Practices & Methodologies",
  subTitle: "PROVEN FRAMEWORKS AND BEST PRACTICES I IMPLEMENT",
  skills: [
    emoji(
      "⚡ Infrastructure as Code (IaC) with Terraform and AWS CloudFormation for version-controlled, repeatable infrastructure deployments"
    ),
    emoji(
      "⚡ GitOps workflows with automated deployments, rollbacks, and environment promotion strategies using GitHub Actions and ArgoCD"
    ),
    emoji(
      "⚡ Site Reliability Engineering (SRE) principles with comprehensive monitoring, alerting, and incident response procedures"
    ),
    emoji(
      "⚡ Agile/Scrum methodologies with continuous integration, automated testing, and collaborative development practices"
    ),
    emoji(
      "⚡ Security-first approach with automated compliance scanning, secrets management, and zero-trust network architectures"
    )
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
    {Stack: "Infrastructure as Code", progressPercentage: "85%"},
    {Stack: "Cloud Architecture", progressPercentage: "90%"},
    {Stack: "CI/CD Automation", progressPercentage: "85%"},
    {Stack: "Containerization & Orchestration", progressPercentage: "80%"},
    {Stack: "Monitoring & Logging", progressPercentage: "75%"},
    {Stack: "Cloud Security & Governance", progressPercentage: "70%"},
    {Stack: "Automation & Scripting", progressPercentage: "80%"},
    {Stack: "Cloud Networking & Load Balancing", progressPercentage: "70%"},
    {Stack: "DevOps & Agile Practices", progressPercentage: "80%"}
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
        "Implemented AWS IAM best practices and cost optimization strategies, reducing infrastructure costs by 35% while maintaining enterprise-grade backup solutions.",
        "Led 12+ cloud migration projects with zero downtime, maintaining 99.99% uptime SLA and improving deployment speed by 60%."
      ]
    },
    {
      role: "Cloud Architect",
      company: "Tranter IT",
      companylogo: require("./assets/images/tranter_it_infrastructure_services_logo.png"),
      date: "Nov 2020 – June 2023",
      desc: "Architected and deployed scalable cloud solutions for 10+ enterprise clients serving 100,000+ daily users, improving application performance by 40% and ensuring compliance through automated security audits.",
      descBullets: [
        "Designed multi-tier, fault-tolerant AWS architectures supporting daily active users with auto-scaling and disaster recovery capabilities.",
        "Implemented comprehensive CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 50% and achieving 99.5% deployment success rate."
      ]
    },
    {
      role: "IT Personnel (Helpdesk)",
      company: "Tranter IT",
      companylogo: require("./assets/images/tranter_it_infrastructure_services_logo.png"),
      date: "June 2017- Mar 2020",
      desc: "Provided technical support and troubleshooting for end-users, ensuring smooth IT operations and rapid issue resolution across the organization.",
      descBullets: [
        "Resolved over 500+ hardware, software, and network issues, maintaining high user satisfaction and minimal downtime.",
        "Trained staff on IT best practices and supported onboarding of new employees with system setup and access management."
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
      image: require("./assets/images/terraform_infrastructure_diagram.png"),
      projectName: "Automated WordPress Deployment on AWS using Terraform",
      projectDesc:
        "Enterprise-grade WordPress platform with modular Terraform architecture, featuring auto-scaling, load balancing, RDS database, EFS storage, and comprehensive monitoring on AWS.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/franklynux/terraform-wordpress-aws/blob/main/README.md"
        }
      ]
    },
    {
      image: require("./assets/images/ecommerce_platform_deployment_ecs_1.png"),
      projectName:
        "Full-Stack E-commerce Platform with Containerized Deployment on AWS ECS",
      projectDesc:
        "Containerized microservices e-commerce app deployed on AWS ECS with automated CI/CD, secure networking, and scalable infrastructure.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/franklynux/ecommerce-platform/blob/main/README.md"
        }
      ]
    },
    {
      image: require("./assets/images/text-to-image-microservice.png"),
      projectName: "AI-Powered Text-to-Image Microservice",
      projectDesc:
        "Scalable text-to-image generation microservice deployed on AWS App Runner with Terraform infrastructure, processing 1000+ daily requests with 95% success rate.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/franklynux/text-to-image-microservice/blob/main/README.md"
        }
      ]
    },

    {
      image: require("./assets/images/ecommerce_platform_microservice_architecture.png"),
      projectName:
        "Cloud-Native E-commerce Platform with Microservices Architecture",
      projectDesc:
        "Production-ready, scalable e-commerce platform built with microservices architecture on Amazon EKS, featuring automated CI/CD, comprehensive monitoring, and cloud-native deployment.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/franklynux/ecommerce-platform-microservice-architecture/blob/main/README.md"
        }
      ]
    },

    {
      image: require("./assets/images/multi_environment_kustomize.png"),
      projectName: "Multi-Environment Application Deployment with Kustomize",
      projectDesc:
        "Kubernetes-native configuration management solution using Kustomize for dev/staging/prod environments with automated CI/CD, RBAC implementation, and GitOps workflow on AWS EKS.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/franklynux/multi-environment-app-deployment-with-kustomize/blob/main/README.md"
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
  email_address: "franklynmbelu@gmail.com"
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
  resumeSection,
  devopsMethodologies
};
