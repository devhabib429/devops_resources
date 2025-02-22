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
      title: "Docker Basic",
      content: "Essential Docker commands and concepts",
      commands: [
        "docker version",
        "docker info",
        "docker images",
        "docker ps",
        "docker pull <image>",
        "docker run <image>"
      ],
      examples: [
        "docker pull nginx",
        "docker run -d -p 80:80 nginx"
      ]
    },
    // Add more sections...
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

// Export all content
export const allContent = {
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