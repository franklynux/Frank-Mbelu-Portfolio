/* Franklyn Mbelu's Cloud, DevOps & Platform Engineering Portfolio Configuration */

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
  username: "frank@devops:~$",
  title: "Hi all, I'm Franklyn Mbelu",
  subTitle: emoji(
    "Cloud, DevOps and Platform Engineer ☁️🚀. I build and run infrastructure on AWS with Terraform, Kubernetes and GitOps, and I give development teams the pipelines and self-service tooling they need to ship safely."
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
    "CLOUD, DEVOPS & PLATFORM ENGINEER | AWS, KUBERNETES, TERRAFORM, GITOPS",
  skills: [
    emoji(
      "⚡ Design and run multi-account cloud environments on AWS, my primary platform, with hands-on experience in Azure (AKS, Blob Storage) and GCP (GKE, Cloud Run)"
    ),
    emoji(
      "⚡ Provision infrastructure with Terraform and CloudFormation, using reusable modules and pull-request-based changes"
    ),
    emoji(
      "⚡ Build internal platforms on Kubernetes (Amazon EKS) with Argo CD, Helm and Kustomize so teams can onboard and deploy services on their own"
    ),
    emoji(
      "⚡ Build CI/CD pipelines with GitHub Actions and Jenkins, including OIDC authentication, image scanning and automated rollbacks"
    ),
    emoji(
      "⚡ Set up monitoring, logging and alerting with Prometheus, Grafana, CloudWatch and the ELK stack"
    )
  ],

  softwareSkills: [
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "gcp", fontAwesomeClassname: "devicon-googlecloud-plain"},
    {skillName: "azure", fontAwesomeClassname: "devicon-azure-plain"},
    {skillName: "terraform", fontAwesomeClassname: "fas fa-layer-group"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "kubernetes", fontAwesomeClassname: "fas fa-dharmachakra"},
    {skillName: "golang", fontAwesomeClassname: "devicon-go-plain"},
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
  title: "How I Work",
  subTitle: "THE PRACTICES BEHIND MY CLOUD AND PLATFORM WORK",
  skills: [
    emoji(
      "⚡ Infrastructure as Code: every environment is defined in Terraform or CloudFormation, version-controlled and reproducible"
    ),
    emoji(
      "⚡ GitOps: Git is the source of truth, and Argo CD handles deployments, rollbacks and promotion between environments"
    ),
    emoji(
      "⚡ Platform engineering: golden paths, reusable templates and self-service onboarding that reduce the load on developers"
    ),
    emoji(
      "⚡ Reliability: SLO-based monitoring, actionable alerts and clear incident runbooks"
    ),
    emoji(
      "⚡ Security built into the pipeline: least-privilege IAM, secrets management, image scanning and compliance checks"
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
    {Stack: "Platform Engineering & GitOps", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "DevOps Engineer",
      company: "Xterns AI",
      companylogo: require("./assets/images/xterns_ai_logo.png"),
      date: "Nov 2025 – Present",
      desc: "I build and maintain multi-region AWS infrastructure for a fintech product, with a focus on GitOps, security and observability.",
      descBullets: [
        "Provisioned multi-region infrastructure on AWS (EKS, VPC, RDS, Redis, WAF, API Gateway) with Terraform, and set up GitOps delivery with Argo CD and Argo Rollouts.",
        "Built CI/CD pipelines in GitHub Actions with OIDC authentication and Trivy image scanning to meet PCI DSS requirements, removing long-lived AWS credentials from the pipeline."
      ]
    },
    {
      role: "Cloud Administrator",
      company: "Phoenix Converge Solutions Limited",
      companylogo: require("./assets/images/Phoenix_Converge_Solutions_Limited_logo.png"),
      date: "Jan 2024 – Nov 2025",
      desc: "Managed AWS infrastructure for more than 20 clients, tightened security, and automated deployments with Terraform and GitHub Actions.",
      descBullets: [
        "Applied least-privilege IAM and cost optimization across client accounts, cutting infrastructure costs by 35% without reducing backup coverage.",
        "Led more than 12 cloud migrations with zero downtime, held a 99.99% uptime SLA, and made deployments 60% faster."
      ]
    },
    {
      role: "Cloud Architect",
      company: "Tranter IT",
      companylogo: require("./assets/images/tranter_it_infrastructure_services_logo.png"),
      date: "Nov 2020 – June 2023",
      desc: "Designed and deployed cloud environments for more than 10 enterprise clients with over 100,000 combined daily users. Improved application performance by 40% and automated security audits for compliance.",
      descBullets: [
        "Designed multi-tier, fault-tolerant AWS architectures with auto-scaling and disaster recovery.",
        "Built CI/CD pipelines with Jenkins and GitHub Actions, cutting deployment time by 50% and reaching a 99.5% deployment success rate."
      ]
    },
    {
      role: "IT Personnel (Helpdesk)",
      company: "Tranter IT",
      companylogo: require("./assets/images/tranter_it_infrastructure_services_logo.png"),
      date: "Dec 2018 – Mar 2020",
      desc: "Provided technical support to staff across the organization, troubleshooting hardware, software and network problems.",
      descBullets: [
        "Resolved more than 500 hardware, software and network issues.",
        "Trained staff on IT security basics and set up systems and access for new employees."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle:
    "Infrastructure and platform projects I have built, with source code and architecture notes.",
  projects: [
    {
      image: require("./assets/images/fleetguard_operator_architecture.png"),
      projectName: "FleetGuard: Generic TTL Cleanup Operator for Kubernetes",
      projectDesc:
        "Extends the Kubernetes API with a TTLCleanup custom resource that deletes expired objects of any kind (Jobs, Pods, preview-environment CRs), scoped by namespace and label selector. A dry-run mode reports what would be deleted before anything is removed, and an envtest suite covers expiry logic and requeue timing.",
      techStack: [
        "Go",
        "Kubebuilder",
        "controller-runtime",
        "Ginkgo",
        "GitHub Actions"
      ],
      footerLink: [
        {
          name: "Source (Go)",
          url: "https://github.com/franklynux/fleetguard-operator"
        }
      ]
    },
    {
      image: require("./assets/images/fleetform_architecture.jpg"),
      projectName: "Fleetform: Multi-Cluster GitOps Platform on AWS EKS",
      projectDesc:
        "One hub cluster running Argo CD manages a fleet of spoke EKS clusters across separate VPCs. ApplicationSets and layered Helm values mean a team onboards a new app with a single pull request instead of per-cluster setup.",
      techStack: ["AWS EKS", "Terraform", "Argo CD", "Helm"],
      footerLink: [
        {
          name: "Infrastructure (Terraform)",
          url: "https://github.com/franklynux/fleetform-infra"
        },
        {
          name: "GitOps Apps (Argo CD)",
          url: "https://github.com/franklynux/fleetform-apps"
        }
      ]
    },
    {
      image: require("./assets/images/aws_django_ha_platform.png"),
      projectName: "Highly Available Django Platform on AWS",
      projectDesc:
        "Designed to survive failure: the same Django app is provisioned two ways, with Terraform and with CloudFormation, then deployed to EKS using Helm. Prometheus and Grafana provide the visibility to see problems before users do.",
      techStack: [
        "Django",
        "AWS EKS",
        "Terraform",
        "CloudFormation",
        "Helm",
        "Prometheus",
        "Grafana"
      ],
      footerLink: [
        {
          name: "Architecture & README",
          url: "https://github.com/franklynux/aws-django-ha-platform/blob/main/README.md"
        }
      ]
    },
    {
      image: require("./assets/images/terraform_infrastructure_diagram.png"),
      projectName: "Automated WordPress Deployment on AWS using Terraform",
      projectDesc:
        "A stateful workload done the classic way: modular Terraform wires an Auto Scaling group behind a load balancer to RDS for data and EFS for shared files, so any instance can be replaced without losing content. CloudWatch covers monitoring.",
      techStack: [
        "WordPress",
        "Terraform",
        "EC2 Auto Scaling",
        "RDS",
        "EFS",
        "CloudWatch"
      ],
      footerLink: [
        {
          name: "Terraform modules",
          url: "https://github.com/franklynux/terraform-wordpress-aws/blob/main/README.md"
        }
      ]
    },
    {
      image: require("./assets/images/ecommerce_platform_deployment_ecs_1.png"),
      projectName:
        "Full-Stack E-commerce Platform with Containerized Deployment on AWS ECS",
      projectDesc:
        "An e-commerce app split into microservices and run on ECS, with services in private networking and auto-scaling. A CI/CD pipeline takes each change from commit to deployment.",
      techStack: ["AWS ECS", "Docker", "CI/CD", "Auto Scaling"],
      footerLink: [
        {
          name: "Architecture & README",
          url: "https://github.com/franklynux/ecommerce-platform/blob/main/README.md"
        }
      ]
    },
    {
      image: require("./assets/images/text-to-image-microservice.png"),
      projectName: "AI-Powered Text-to-Image Microservice",
      projectDesc:
        "A managed, low-ops approach to serving a model: a text-to-image API on App Runner with all infrastructure defined in Terraform. It handles over 1,000 requests a day with a 95% success rate.",
      techStack: ["AWS App Runner", "Terraform", "Python"],
      footerLink: [
        {
          name: "Source & README",
          url: "https://github.com/franklynux/text-to-image-microservice/blob/main/README.md"
        }
      ]
    },

    {
      image: require("./assets/images/ecommerce_platform_microservice_architecture.png"),
      projectName:
        "Cloud-Native E-commerce Platform with Microservices Architecture",
      projectDesc:
        "The Kubernetes counterpart to the ECS build: the same microservice idea run on Amazon EKS, with an automated CI/CD pipeline and Prometheus and Grafana dashboards for observability.",
      techStack: ["Amazon EKS", "Kubernetes", "CI/CD", "Prometheus", "Grafana"],
      footerLink: [
        {
          name: "Architecture & README",
          url: "https://github.com/franklynux/ecommerce-platform-microservice-architecture/blob/main/README.md"
        }
      ]
    },

    {
      image: require("./assets/images/multi_environment_kustomize.png"),
      projectName: "Multi-Environment Application Deployment with Kustomize",
      projectDesc:
        "One set of base manifests, three environments: Kustomize overlays configure dev, staging and prod on EKS without duplicating YAML. RBAC limits who can change what, and GitOps-driven deployments promote changes through the pipeline.",
      techStack: ["Kustomize", "AWS EKS", "RBAC", "GitOps", "CI/CD"],
      footerLink: [
        {
          name: "Kustomize bases & overlays",
          url: "https://github.com/franklynux/multi-environment-app-deployment-with-kustomize/blob/main/README.md"
        }
      ]
    },
    {
      image: require("./assets/images/finzla_ecs_fargate.jpg"),
      projectName:
        "Containerized Python Service on AWS ECS Fargate with Terraform & CI/CD",
      projectDesc:
        "Built for a cloud engineering technical assessment. A Python HTTP service runs on serverless Fargate behind an ALB, with a modular Terraform layout (VPC, ECR, ALB, ECS, CloudWatch alarms) and a GitHub Actions pipeline that deploys it.",
      techStack: [
        "Python",
        "ECS Fargate",
        "Terraform",
        "GitHub Actions",
        "CloudWatch"
      ],
      footerLink: [
        {
          name: "Source & Terraform",
          url: "https://github.com/franklynux/aws-ecs-fargate-platform"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "AWS certifications and DevOps training.",
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
    },
    {
      title: "DevOps Advanced Program",
      subtitle: "Completed: Jan 2023",
      image: require("./assets/images/devops_advanced_program.png"),
      imageAlt: "Darey.io Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "I write about cloud infrastructure, DevOps automation and platform tooling.",
  displayMediumBlogs: "true",
  blogs: [],
  display: true
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("Talks and presentations I have given."),
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
  subtitle: "Download my resume.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to Cloud, DevOps and Platform Engineering roles and contract work. Send me an email or give me a call.",
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
