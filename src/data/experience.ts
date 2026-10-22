export interface Experience {
  id: number;
  icon: string;
  title: string;
  org: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    icon: "\u2601\uFE0F",
    title: "AWS Cloud Migration",
    org: "JPMorgan Chase \u00B7 Team of 4",
    bullets: [
      "Decomposed legacy monolith into 3 isolated ECS tasks as domain microservices",
      "Built CI/CD pipeline for ECS deployments via GitHub Actions",
    ],
  },
  {
    id: 2,
    icon: "\u{1F4CA}",
    title: "Monitoring Platform",
    org: "JPMorgan Chase",
    bullets: [
      "Built internal observability platform adopted across 200+ Spring Boot services",
    ],
  },
  {
    id: 3,
    icon: "\u26A1",
    title: "Quantica Pipeline",
    org: "Personal \u00B7 2026",
    bullets: [
      "362K messages at 10x live rate \u2014 peak Kafka lag ~270, drained to 0",
      "Multi-broker KRaft cluster resolved coordinator starvation at scale",
    ],
  },
];
