export interface TopicContent {
  title: string;
  description: string;
  sections: {
    title: string;
    content: string;
    commands?: string[];
    examples?: string[];
  }[];
}

export const dockerContent: TopicContent = {
  title: "Docker",
  description: "Learn Docker containerization from basics to advanced concepts",
  sections: [
    {
      title: "Docker Introduction",
      content: `Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and self-sufficient units that can run anywhere Docker is installed.

Key concepts:
• Images: Read-only templates for creating containers
• Containers: Running instances of Docker images
• Registry: Repository for storing and sharing images
• Dockerfile: Script for building Docker images
• Docker Compose: Tool for defining multi-container applications`,
      examples: [
        `# Basic Docker Architecture:
┌─────────────────────────────────────┐
│           Docker Host               │
│  ┌────────────┐    ┌────────────┐  │
│  │ Container 1│    │ Container 2│  │
│  │  App + Libs│    │  App + Libs│  │
│  └────────────┘    └────────────┘  │
│  ┌─────────────────────────────┐   │
│  │      Docker Engine          │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘`
      ]
    },
    {
      title: "Docker Basic",
      content: `Essential Docker commands and concepts for getting started with containerization. These commands form the foundation of working with Docker containers and images.`,
      commands: [
        "docker version                 # Check Docker version",
        "docker info                    # Display system-wide information",
        "docker images                  # List all images",
        "docker ps                      # List running containers",
        "docker ps -a                   # List all containers",
        "docker pull <image>            # Pull an image from registry",
        "docker run <image>             # Run a container",
        "docker stop <container>        # Stop a running container",
        "docker rm <container>          # Remove a container",
        "docker rmi <image>             # Remove an image"
      ],
      examples: [
        `# Running a web server
docker run -d -p 80:80 --name webserver nginx

# Interactive shell in container
docker run -it ubuntu bash

# Running with environment variables
docker run -e DB_HOST=localhost -e DB_PORT=5432 myapp`
      ]
    },
    {
      title: "Docker Container",
      content: `Docker containers are runtime instances of Docker images. They are isolated environments that contain everything needed to run an application.`,
      commands: [
        "docker create <image>          # Create a container",
        "docker start <container>       # Start a container",
        "docker restart <container>     # Restart a container",
        "docker exec -it <container> sh # Access container shell",
        "docker logs <container>        # View container logs",
        "docker inspect <container>     # Inspect container details",
        "docker stats                   # View container resource usage"
      ],
      examples: [
        `# Container with resource limits
docker run -d --name myapp \
  --memory="512m" \
  --cpus="1.0" \
  nginx

# Container with volume mount
docker run -d \
  -v $(pwd)/data:/app/data \
  --name myapp \
  myimage`,
        `# Container with health check
docker run -d \
  --health-cmd="curl -f http://localhost/ || exit 1" \
  --health-interval=5s \
  --name webapp \
  nginx`
      ]
    },
    {
      title: "Docker Network",
      content: `Docker networking enables communication between containers and with the outside world. Docker provides several network drivers for different use cases.`,
      commands: [
        "docker network create <name>   # Create a network",
        "docker network ls              # List networks",
        "docker network inspect <name>  # Inspect a network",
        "docker network connect         # Connect container to network",
        "docker network disconnect      # Disconnect from network"
      ],
      examples: [
        `# Create a bridge network
docker network create --driver bridge mynetwork

# Connect containers to network
docker run -d --network=mynetwork --name db mysql
docker run -d --network=mynetwork --name web nginx`,
        `# Network with custom subnet
docker network create \
  --subnet=172.18.0.0/16 \
  --gateway=172.18.0.1 \
  custom-network`
      ]
    },
    {
      title: "Docker Images",
      content: `Docker images are the building blocks of containers. They are read-only templates containing application code, runtime, libraries, and dependencies.`,
      commands: [
        "docker build -t <name> .       # Build an image",
        "docker tag <image> <new-name>  # Tag an image",
        "docker push <image>            # Push to registry",
        "docker history <image>         # View image layers",
        "docker save <image> > file.tar # Save image to tar",
        "docker load < file.tar         # Load image from tar"
      ],
      examples: [
        `# Basic Dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
        `# Multi-stage build
FROM node:14 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html`
      ]
    },
    {
      title: "Docker Volume",
      content: `Docker volumes provide persistent storage for container data. They are essential for stateful applications and data persistence across container lifecycles.`,
      commands: [
        "docker volume create <name>    # Create a volume",
        "docker volume ls               # List volumes",
        "docker volume inspect <name>   # Inspect volume",
        "docker volume rm <name>        # Remove volume",
        "docker volume prune           # Remove unused volumes"
      ],
      examples: [
        `# Named volume
docker run -d \
  -v mydata:/app/data \
  --name myapp \
  myimage

# Bind mount
docker run -d \
  -v $(pwd)/config:/app/config:ro \
  --name myapp \
  myimage`,
        `# Volume with specific driver
docker volume create \
  --driver local \
  --opt type=nfs \
  --opt o=addr=192.168.1.1,rw \
  --opt device=:/path/to/dir \
  nfs-volume`
      ]
    },
    {
      title: "Docker Compose",
      content: `Docker Compose is a tool for defining and running multi-container Docker applications. It uses YAML files to configure application services.`,
      commands: [
        "docker-compose up              # Start services",
        "docker-compose down            # Stop services",
        "docker-compose ps              # List services",
        "docker-compose logs            # View service logs",
        "docker-compose build           # Build services",
        "docker-compose restart         # Restart services"
      ],
      examples: [
        `# Basic docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  db:
    image: mongo:latest
    volumes:
      - db-data:/data/db

volumes:
  db-data:`,
        `# Compose with dependencies
version: '3.8'
services:
  web:
    build: .
    depends_on:
      - db
      - redis
  db:
    image: postgres:13
  redis:
    image: redis:alpine`
      ]
    },
    {
      title: "Docker Swarm",
      content: `Docker Swarm is Docker's native clustering and orchestration solution. It turns a group of Docker hosts into a single virtual host for running containerized applications at scale.`,
      commands: [
        "docker swarm init             # Initialize swarm",
        "docker swarm join             # Join a swarm",
        "docker service create         # Create service",
        "docker service ls             # List services",
        "docker service scale          # Scale service",
        "docker node ls                # List nodes"
      ],
      examples: [
        `# Initialize swarm
docker swarm init --advertise-addr 192.168.1.10

# Create replicated service
docker service create \
  --name webapp \
  --replicas 3 \
  --publish 80:80 \
  nginx`,
        `# Service with rolling updates
docker service create \
  --name webapp \
  --update-delay 10s \
  --update-parallelism 2 \
  nginx:latest`
      ]
    },
    {
      title: "Docker Stack",
      content: `Docker Stack is used to deploy and manage a complete application stack in a Docker Swarm. It combines services, networks, and volumes defined in Compose files.`,
      commands: [
        "docker stack deploy           # Deploy stack",
        "docker stack ls              # List stacks",
        "docker stack ps              # List stack tasks",
        "docker stack rm              # Remove stack",
        "docker stack services        # List stack services"
      ],
      examples: [
        `# Deploy stack from compose file
docker stack deploy -c docker-compose.yml myapp

# Stack with multiple services
version: '3.8'
services:
  web:
    image: nginx:alpine
    deploy:
      replicas: 3
      update_config:
        parallelism: 2
        delay: 10s
  api:
    image: api:latest
    deploy:
      placement:
        constraints:
          - node.role == worker`,
        `# Stack with secrets
version: '3.8'
secrets:
  db_password:
    external: true
services:
  db:
    image: postgres
    secrets:
      - db_password`
      ]
    },
    {
      title: "Tips and Tricks",
      content: `Advanced Docker techniques and best practices for optimizing containers and improving development workflow.`,
      commands: [
        "docker system prune           # Clean up resources",
        "docker stats                  # Monitor containers",
        "docker top <container>        # View container processes",
        "docker diff <container>       # Show file changes",
        "docker events                 # Get real-time events"
      ],
      examples: [
        `# Optimize image size
# Use .dockerignore
node_modules
npm-debug.log
Dockerfile
.git
.env

# Multi-stage build example
FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/main.js"]`,
        `# Health check in Dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

# Container resource limits
docker run -d \
  --memory="2g" \
  --memory-reservation="1g" \
  --cpus="1.5" \
  --pids-limit=100 \
  nginx`
      ]
    }
  ]
};

export const bashScriptingContent: TopicContent = {
  title: "Bash Scripting",
  description: "Learn shell scripting for automation and system administration",
  sections: [
    {
      title: "Basics",
      content: "Introduction to Bash scripting fundamentals",
      commands: [
        "#!/bin/bash",
        "echo 'Hello World'",
        "chmod +x script.sh",
        "./script.sh"
      ],
      examples: [
        "#!/bin/bash\necho 'Hello World'",
        "#!/bin/bash\nname='John'\necho \"Hello $name\""
      ]
    }
  ]
};

export const webAssemblyContent: TopicContent = {
  title: "WebAssembly",
  description: "Learn about running native code in the browser",
  sections: [
    {
      title: "Introduction",
      content: "Understanding WebAssembly basics and use cases",
      examples: [
        "// WebAssembly example\n(module\n  (func $add (param $a i32) (param $b i32) (result i32)\n    local.get $a\n    local.get $b\n    i32.add)\n  (export \"add\" (func $add)))"
      ]
    }
  ]
};

export const terraformContent: TopicContent = {
  title: "Terraform",
  description: "Infrastructure as Code with Terraform",
  sections: [
    {
      title: "Basics",
      content: "Getting started with Terraform",
      commands: [
        "terraform init",
        "terraform plan",
        "terraform apply",
        "terraform destroy"
      ],
      examples: [
        "provider \"aws\" {\n  region = \"us-west-2\"\n}",
        "resource \"aws_instance\" \"example\" {\n  ami = \"ami-0c55b159cbfafe1f0\"\n  instance_type = \"t2.micro\"\n}"
      ]
    }
  ]
};

export const devSecOpsContent: TopicContent = {
  title: "DevSecOps",
  description: "Security integration in DevOps pipeline",
  sections: [
    {
      title: "Introduction",
      content: "Understanding DevSecOps principles and practices",
      commands: [
        "docker scan <image>",
        "trivy image <image>",
        "snyk test",
        "owasp-zap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' --target http://example.com"
      ]
    }
  ]
};

export const yamlContent: TopicContent = {
  title: "YAML",
  description: "Learn YAML syntax and its applications in DevOps",
  sections: [
    {
      title: "YAML Basics",
      content: "Understanding YAML syntax and structure",
      examples: [
        "# Simple key-value pairs\nname: John\nage: 30",
        "# Arrays\nfruits:\n  - apple\n  - banana\n  - orange",
        "# Nested objects\nperson:\n  name: John\n  address:\n    city: New York\n    country: USA"
      ]
    },
    {
      title: "Data Types",
      content: "Different data types in YAML",
      examples: [
        "# Strings\nname: John Doe\ndescription: 'This is a quoted string'\n",
        "# Numbers\nage: 30\nprice: 19.99\npi: 3.14159\n",
        "# Boolean\nis_active: true\nis_completed: false\n",
        "# Null\nfield: null\nempty:"
      ]
    }
  ]
};

export const golangContent: TopicContent = {
  title: "Golang",
  description: "Learn Go programming for DevOps and backend development",
  sections: [
    {
      title: "Getting Started",
      content: "Basic Go setup and first program",
      examples: [
        "// Hello World in Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n}",
        "// Variables\nvar name string = \"John\"\nage := 30"
      ]
    },
    {
      title: "Basic Syntax",
      content: "Go language fundamentals",
      examples: [
        "// Functions\nfunc add(x int, y int) int {\n    return x + y\n}",
        "// Structs\ntype Person struct {\n    Name string\n    Age  int\n}"
      ]
    }
  ]
};

export const helmContent: TopicContent = {
  title: "Helm",
  description: "Package manager for Kubernetes",
  sections: [
    {
      title: "Chart Structure",
      content: "Understanding Helm chart organization",
      commands: [
        "helm create mychart",
        "helm install release-name ./mychart",
        "helm upgrade release-name ./mychart"
      ],
      examples: [
        "# Chart.yaml\napiVersion: v2\nname: mychart\nversion: 0.1.0",
        "# values.yaml\nreplicaCount: 1\nimage:\n  repository: nginx\n  tag: latest"
      ]
    }
  ]
};

export const prometheusContent: TopicContent = {
  title: "Prometheus",
  description: "Monitoring and alerting toolkit",
  sections: [
    {
      title: "Architecture",
      content: "Understanding Prometheus components",
      examples: [
        "# prometheus.yml\nglobal:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']"
      ]
    },
    {
      title: "PromQL",
      content: "Prometheus Query Language basics",
      examples: [
        "# Basic queries\nhttp_requests_total",
        "# Range vector\nhttp_requests_total[5m]",
        "# Rate\nrate(http_requests_total[5m])"
      ]
    }
  ]
};

export const gitOpsContent: TopicContent = {
  title: "GitOps",
  description: "Git-based operations and deployment",
  sections: [
    {
      title: "Principles",
      content: "Core principles of GitOps",
      examples: [
        "# Example GitOps workflow\n1. Git as single source of truth\n2. Declarative infrastructure\n3. Automated synchronization",
        "# Flux manifest example\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: GitRepository\nmetadata:\n  name: flux-system\n  namespace: flux-system"
      ]
    }
  ]
};

export const argoCDContent: TopicContent = {
  title: "ArgoCD",
  description: "Declarative continuous delivery tool for Kubernetes",
  sections: [
    {
      title: "Application Management",
      content: "Managing applications with ArgoCD",
      examples: [
        "# Application manifest\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: myapp\nspec:\n  destination:\n    namespace: default\n    server: https://kubernetes.default.svc",
        "# Sync policy\nsyncPolicy:\n  automated:\n    prune: true\n    selfHeal: true"
      ]
    }
  ]
};

export const jenkinsContent: TopicContent = {
  title: "Jenkins",
  description: "Continuous Integration and Deployment automation",
  sections: [
    {
      title: "Pipeline Basics",
      content: "Understanding Jenkins pipelines",
      examples: [
        "// Jenkinsfile\npipeline {\n    agent any\n    stages {\n        stage('Build') {\n            steps {\n                echo 'Building..'\n            }\n        }\n    }\n}",
        "// Declarative pipeline with Docker\npipeline {\n    agent {\n        docker {\n            image 'node:14'\n        }\n    }"
      ]
    }
  ]
};

export const feedbackContent: TopicContent = {
  title: "Feedback & Suggestions",
  description: "Help us improve the platform",
  sections: [
    {
      title: "Submit Feedback",
      content: "Guidelines for submitting feedback",
      examples: [
        "# Feedback format\nType: [Bug/Feature/Improvement]\nDescription: [Detailed description]\nImpact: [Expected outcome]"
      ]
    },
    {
      title: "Feature Requests",
      content: "How to request new features",
      examples: [
        "# Feature request template\nFeature: [Name]\nUse Case: [Description]\nBenefits: [Expected benefits]\nPriority: [High/Medium/Low]"
      ]
    }
  ]
};

export const devopsContent: TopicContent = {
  title: "DevOps",
  description: "Comprehensive guide to DevOps practices and principles",
  sections: [
    {
      title: "Overview",
      content: `DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology.`,
      examples: [
        `Key DevOps Practices:
1. Continuous Integration (CI)
2. Continuous Delivery (CD)
3. Infrastructure as Code (IaC)
4. Microservices
5. Monitoring and Logging
6. Communication and Collaboration`
      ]
    },
    {
      title: "Getting Started",
      content: `Getting started with DevOps involves understanding its core principles and familiarizing yourself with essential tools and practices. The DevOps journey typically begins with automating manual processes and implementing continuous integration.`,
      examples: [
        `DevOps Learning Path:
1. Learn Version Control (Git)
2. Master CI/CD Concepts
3. Understand Infrastructure as Code
4. Study Cloud Platforms
5. Learn Containerization
6. Explore Monitoring Tools`,
        `Essential DevOps Tools:
- Version Control: Git
- CI/CD: Jenkins, GitHub Actions
- Containers: Docker, Kubernetes
- IaC: Terraform, Ansible
- Monitoring: Prometheus, Grafana`
      ]
    },
    {
      title: "Best Practices",
      content: `DevOps best practices focus on automation, collaboration, and continuous improvement. These practices help organizations deliver software faster and more reliably.`,
      examples: [
        `1. Infrastructure as Code (IaC):
# Terraform Example
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  tags = {
    Name = "DevOps-Instance"
  }
}`,
        `2. Continuous Integration Pipeline:
# Jenkins Pipeline Example
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'
            }
        }
    }
}`,
        `3. Monitoring Setup:
# Prometheus Configuration
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']`
      ]
    },
    {
      title: "Tools",
      content: "A comprehensive guide to essential DevOps tools categorized by their primary functions.",
      examples: [
        `# 1. Source Control Management
• Git
  - Industry standard version control system
  - Features: Branching, merging, history tracking
  - Integration with most development tools

• GitHub/GitLab/Bitbucket
  - Collaborative development platforms
  - Features: Pull requests, code review, issue tracking
  - CI/CD integration capabilities`,

        `# 2. Containerization & Orchestration
• Docker
  - Container platform for application packaging
  - Features: Image building, container runtime, networking
  - Essential for microservices architecture

• Kubernetes
  - Container orchestration platform
  - Features: Auto-scaling, self-healing, load balancing
  - Industry standard for container management

• Helm
  - Package manager for Kubernetes
  - Features: Chart management, release tracking
  - Simplifies K8s application deployment`,

        `# 3. CI/CD Tools
• Jenkins
  - Automation server for CI/CD
  - Features: Pipeline as code, extensive plugins
  - Highly customizable and widely adopted

• GitHub Actions
  - Cloud-native CI/CD platform
  - Features: Workflow automation, matrix builds
  - Tight integration with GitHub repositories

• ArgoCD
  - GitOps continuous delivery tool
  - Features: Declarative deployments, auto-sync
  - Kubernetes-native deployment tool`,

        `# 4. Infrastructure as Code
• Terraform
  - Infrastructure provisioning tool
  - Features: State management, provider ecosystem
  - Cloud-agnostic infrastructure management

• Ansible
  - Configuration management tool
  - Features: Agentless, playbooks, roles
  - Automation for configuration and deployment

• Pulumi
  - Modern infrastructure as code
  - Features: Multiple programming languages support
  - Cloud-native architecture support`,

        `# 5. Monitoring & Observability
• Prometheus
  - Metrics collection and alerting
  - Features: PromQL, alert manager, time-series DB
  - De facto standard for K8s monitoring

• Grafana
  - Visualization and analytics platform
  - Features: Dashboards, alerting, data source integration
  - Multi-platform monitoring solution

• ELK Stack
  - Log management and analysis
  - Features: Log aggregation, search, visualization
  - Comprehensive logging solution`,

        `# 6. Security Tools
• SonarQube
  - Code quality and security scanner
  - Features: Code analysis, vulnerability detection
  - Continuous code quality inspection

• Vault
  - Secrets management tool
  - Features: Dynamic secrets, encryption as service
  - Security infrastructure management

• Trivy
  - Container security scanner
  - Features: Vulnerability scanning, misconfig detection
  - Container and infrastructure security`,

        `# 7. Cloud Platforms
• AWS
  - Leading cloud service provider
  - Features: Extensive service catalog, global infrastructure
  - Comprehensive cloud solutions

• Azure
  - Microsoft's cloud platform
  - Features: Enterprise integration, hybrid capabilities
  - Strong Windows ecosystem integration

• GCP
  - Google's cloud platform
  - Features: Strong data analytics, ML/AI capabilities
  - Modern cloud-native solutions`,

        `# 8. Testing Tools
• JUnit/Jest
  - Unit testing frameworks
  - Features: Test automation, assertions, mocking
  - Essential for test-driven development

• Selenium
  - UI testing automation
  - Features: Cross-browser testing, test recording
  - Web application testing automation

• k6
  - Performance testing tool
  - Features: Load testing, metrics collection
  - Modern performance testing solution`
      ],
      commands: [
        "# Quick reference commands for various tools",
        "git clone https://github.com/user/repo.git",
        "docker build -t myapp .",
        "kubectl apply -f deployment.yaml",
        "terraform init && terraform apply",
        "ansible-playbook deploy.yml",
        "helm install myapp ./chart",
        "prometheus --config.file=prometheus.yml"
      ]
    }
  ]
};

// Export all content
export const allContent = {
  devops: devopsContent,
  docker: dockerContent,
  yaml: yamlContent,
  golang: golangContent,
  helm: helmContent,
  prometheus: prometheusContent,
  gitops: gitOpsContent,
  argocd: argoCDContent,
  jenkins: jenkinsContent,
  "bash-scripting": bashScriptingContent,
  webassembly: webAssemblyContent,
  terraform: terraformContent,
  devsecops: devSecOpsContent,
  feedback: feedbackContent
}; 