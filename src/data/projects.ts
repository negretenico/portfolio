export interface Project {
  id: number;
  name: string;
  number: string;
  type: string;
  description: string;
  techStack: string[];
  stats: {
    complexity: number;
    performance: number;
    scalability: number;
    maintainability: number;
  };
  image: string;
  color: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Hello Implementation",
    number: "001",
    type: "System Design",
    description:
      "Working implementations of classic system designs — rate limiters, URL shorteners, distributed caches, and more. Built in Java/Spring Boot, Python, and Node.js.",
    techStack: ["Java", "Spring Boot", "Python", "NodeJS", "Redis", "Kafka", "PostgreSQL"],
    stats: { complexity: 90, performance: 85, scalability: 95, maintainability: 80 },
    image: "\u{1F3D7}\uFE0F",
    color: "from-yellow-400 to-yellow-600",
    githubUrl: "https://github.com/negretenico/HelloImplementation",
    featured: true,
  },
  {
    id: 2,
    name: "Quantica",
    number: "002",
    type: "Real-Time Data Pipeline",
    description:
      "Market data pipeline: Binance websocket \u2192 Kafka \u2192 anomaly detection \u2192 RabbitMQ workers. 362K messages processed at 10x live rate.",
    techStack: ["Java", "Python", "Kafka", "RabbitMQ", "Docker", "AWS ECS"],
    stats: { complexity: 88, performance: 92, scalability: 90, maintainability: 75 },
    image: "\u26A1",
    color: "from-blue-400 to-blue-600",
    githubUrl: "https://github.com/negretenico/Quantica",
    featured: true,
  },
  {
    id: 3,
    name: "n2",
    number: "003",
    type: "In-Memory Document Store",
    description:
      "Embeddable in-memory JSON document store for Java. CRUD operations, JsonPath querying, schema validation, and web console.",
    techStack: ["Java", "Spring Boot", "Undertow", "Jayway JsonPath"],
    stats: { complexity: 80, performance: 85, scalability: 70, maintainability: 90 },
    image: "\u{1F4E6}",
    color: "from-green-400 to-green-600",
    githubUrl: "https://github.com/negretenico/n2",
    featured: true,
  },
  {
    id: 4,
    name: "Hello Technologies",
    number: "004",
    type: "Tech Implementation Library",
    description:
      "Simplified versions of popular technologies like Kafka, NoSQL engines, and relational databases to demonstrate their inner workings.",
    techStack: ["Java", "Spring Boot", "Kafka", "MongoDB", "PostgreSQL", "Docker"],
    stats: { complexity: 85, performance: 80, scalability: 75, maintainability: 85 },
    image: "\u{1F4A1}",
    color: "from-purple-400 to-purple-600",
    githubUrl: "https://github.com/negretenico/HelloTechnologies",
    featured: false,
  },
  {
    id: 5,
    name: "Glowing Octo Invention",
    number: "005",
    type: "Smart Contract Fuzzing Framework",
    description:
      "Java-based framework for fuzzing and testing Ethereum smart contracts using Web3j. Supports local simulations and deployed contracts with oracle checks.",
    techStack: ["Java 21", "Spring Boot", "Maven", "Web3j", "Hardhat"],
    stats: { complexity: 90, performance: 85, scalability: 80, maintainability: 75 },
    image: "\u{1F991}",
    color: "from-cyan-400 to-cyan-600",
    githubUrl: "https://github.com/negretenico/glowing-octo-invention",
    featured: false,
  },
  {
    id: 6,
    name: "EtherIndex",
    number: "006",
    type: "Ethereum Indexing Pipeline",
    description:
      "Spring Boot application connecting to Worldchain Sepolia testnet for real-time block tracking, data ingestion, event-driven architecture, and a REST API.",
    techStack: ["Java 21", "Spring Boot", "Spring Events", "H2 Database", "Docker"],
    stats: { complexity: 85, performance: 88, scalability: 90, maintainability: 80 },
    image: "\u26D3\uFE0F",
    color: "from-yellow-400 to-yellow-600",
    githubUrl: "https://github.com/negretenico/EtherIndex",
    featured: false,
  },
];
