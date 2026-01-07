import { Project, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Ronak Solanki",
  role: "Cloud & DevOps Engineer",
  bio: "I design reliable cloud systems, automate deployments, and build production ready infrastructure with monitoring, logging, and disaster recovery in mind.",
  linkedin: "https://www.linkedin.com/in/ronak-solanki-80a912264/",
  github: "https://github.com/ronaksolanki98",
  email: "solankironak423@gmail.com",
  phone: "+91 9575090602",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Cloud",
    skills: [
      "AWS (EC2, RDS, S3, Route 53, Lambda, CloudWatch)",
      "OCI (Functions, API Gateway, Object Storage, IAM)",
    ],
  },
  {
    category: "DevOps & IaC",
    skills: ["Terraform", "Docker", "Jenkins", "GitHub Actions"],
  },
  {
    category: "Data & Pipelines",
    skills: ["Apache Airflow", "SQL", "Power BI", "Python"],
  },
  {
    category: "Monitoring & Logging",
    skills: [
      "CloudWatch",
      "CloudTrail",
      "SNS Alerts",
      "Reliability Engineering",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "dr-system",
    title: "Secure Multi Region Disaster Recovery & Backup System",
    subtitle:
      "High availability architecture for critical enterprise workloads",
    tech: [
      "AWS",
      "Terraform",
      "EC2",
      "RDS",
      "S3",
      "Route 53",
      "Lambda",
      "CloudTrail",
    ],
    problem: [
      "Single region architecture risked total outage during provider failure",
      "Manual backups resulted in slow, error prone recovery processes",
      "Lack of audit ready logs for compliance requirements",
    ],
    solution: [
      "Designed multi region DR architecture using Terraform for consistency",
      "Automated cross region backups using AWS Backup policies",
      "Implemented DNS based failover via Route 53 health checks",
      "Created one click recovery scripts using AWS Lambda",
      "Enabled CloudTrail for organizational compliance logging",
    ],
    impact: [
      "Reduced recovery time objective (RTO) by ~40%",
      "Achieved predictable RPO < 15 minutes",
      "Disaster recovery drills completed successfully with zero data loss",
      "Infrastructure fully reproducible and auditable",
    ],
    githubUrl: "https://github.com/ronaksolanki98",
  },
  {
    id: "reddit-pipeline",
    title: "Reddit Data Pipeline (Production style ETL)",
    subtitle: "End to end automated data ingestion and analytics",
    tech: [
      "Airflow",
      "Python",
      "Docker",
      "OCI Object Storage",
      "Oracle Autonomous DB",
    ],
    problem: [
      "Manual data extraction was not scalable for large volume analysis",
      "No automated scheduling or error retry mechanisms",
      "Data was siloed and not centralized for business intelligence",
    ],
    solution: [
      "Built end to end ETL pipeline to extract, transform, and load Reddit data",
      "Scheduled complex workflows using Apache Airflow DAGs",
      "Containerized the entire stack with Docker for environment parity",
      "Stored raw and processed data in OCI Object Storage",
    ],
    impact: [
      "Fully automated data ingestion requiring zero human intervention",
      "Reduced manual operational effort to zero",
      "Pipeline reliability improved via automated Airflow retries",
      "Ready to use dataset for Power BI analytics",
    ],
    githubUrl: "https://github.com/ronaksolanki98",
  },
  {
    id: "serverless-api",
    title: "Serverless Orders API with CI/CD",
    subtitle: "Scalable REST architecture with automated delivery",
    tech: ["AWS Lambda", "DynamoDB", "CodePipeline", "CodeBuild"],
    problem: [
      "Manual deployment caused configuration drift and inconsistencies",
      "No monitoring for runtime failures or performance bottlenecks",
      "Lack of automated testing before production releases",
    ],
    solution: [
      "Built serverless REST API using Lambda and DynamoDB",
      "Managed infrastructure as code (IaC) through AWS SAM",
      "Configured CI/CD triggered automatically on GitHub commits",
      "Integrated CloudWatch metrics and SNS alerts for real time observability",
    ],
    impact: [
      "Deployment cycle time reduced by ~30%",
      "Achieved zero downtime deployments via green/blue patterns",
      "Faster bug detection and MTTR through automated alerting",
      "Production ready scalable serverless workflow",
    ],
    githubUrl: "https://github.com/ronaksolanki98",
  },
];
