import { TopicContent } from '../types/content';

export const kubernetesContent: TopicContent = {
  title: "Kubernetes",
  description: "Comprehensive guide to Kubernetes container orchestration platform",
  sections: [
    {
      title: "Introduction to K8s",
      content: `Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It was originally developed by Google and is now maintained by the Cloud Native Computing Foundation (CNCF).

Key Features:
• Container Orchestration
• Auto-scaling and Load Balancing
• Self-healing Capabilities
• Service Discovery and Load Balancing
• Automated Rollouts and Rollbacks
• Secret and Configuration Management
• Storage Orchestration`,
      examples: [
        `# Kubernetes Architecture
┌─────────────────────────────────────────────┐
│                Master Node                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  API     │  │ Scheduler│  │Controller│  │
│  │  Server  │  │          │  │ Manager  │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│         ┌──────────────────────┐           │
│         │      etcd Storage    │           │
│         └──────────────────────┘           │
└─────────────────────────────────────────────┘
                     ▲
                     │
                     ▼
┌─────────────────────────────────────────────┐
│                Worker Nodes                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Pod 1   │  │  Pod 2   │  │  Pod 3   │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│  ┌─────────────────┐  ┌─────────────────┐  │
│  │     kubelet     │  │    kube-proxy   │  │
│  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────┘`
      ]
    },
    {
      title: "Architecture",
      content: `Kubernetes follows a master-worker architecture with various components working together to maintain the desired state of the cluster.

Master Components:
• API Server: Central management entity
• Scheduler: Assigns work to nodes
• Controller Manager: Maintains cluster state
• etcd: Consistent and highly-available key value store

Worker Components:
• kubelet: Node agent
• kube-proxy: Network proxy
• Container Runtime: Docker/containerd`,
      examples: [
        `# Control Plane Components
1. kube-apiserver
   - REST API frontend
   - Validates and configures data
   - Entry point for all REST commands

2. etcd
   - Consistent and highly-available store
   - Stores all cluster data
   - Backup should be part of deployment

3. kube-scheduler
   - Watches for newly created pods
   - Assigns pods to nodes
   - Considers constraints and resources

4. kube-controller-manager
   - Node Controller
   - Replication Controller
   - Endpoints Controller
   - Service Account & Token Controllers`
      ]
    },
    {
      title: "Pods",
      content: `Pods are the smallest deployable units in Kubernetes. A Pod represents a single instance of a running process in your cluster and can contain one or more containers.`,
      commands: [
        "kubectl get pods                # List all pods",
        "kubectl describe pod <pod>      # Show pod details",
        "kubectl logs <pod>              # View pod logs",
        "kubectl exec -it <pod> -- sh    # Shell into pod",
        "kubectl delete pod <pod>        # Delete pod"
      ],
      examples: [
        `# Basic Pod Definition
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.14.2
    ports:
    - containerPort: 80`,
        
        `# Multi-container Pod
apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
  containers:
  - name: nginx
    image: nginx
  - name: redis
    image: redis
  - name: logger
    image: fluentd`
      ]
    },
    {
      title: "Services",
      content: `Services in Kubernetes are an abstraction layer that provides a stable endpoint for pods. They enable communication between different components of an application and handle service discovery and load balancing.`,
      commands: [
        "kubectl get services           # List services",
        "kubectl expose deployment      # Create service",
        "kubectl describe service       # Service details",
        "kubectl delete service         # Delete service"
      ],
      examples: [
        `# ClusterIP Service
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: ClusterIP
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080`,

        `# LoadBalancer Service
apiVersion: v1
kind: Service
metadata:
  name: my-lb-service
spec:
  type: LoadBalancer
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080`
      ]
    },
    {
      title: "Deployments",
      content: `Deployments provide declarative updates for Pods and ReplicaSets. They manage the deployment and scaling of a set of Pods, and provide update strategies like RollingUpdate.`,
      commands: [
        "kubectl create deployment      # Create deployment",
        "kubectl scale deployment       # Scale pods",
        "kubectl rollout status         # Check rollout status",
        "kubectl rollout undo           # Rollback deployment"
      ],
      examples: [
        `# Basic Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2`,

        `# Deployment with Strategy
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1`
      ]
    },
    {
      title: "ConfigMaps",
      content: `ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable.`,
      commands: [
        "kubectl create configmap       # Create configmap",
        "kubectl get configmaps         # List configmaps",
        "kubectl edit configmap         # Edit configmap"
      ],
      examples: [
        `# ConfigMap Definition
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  app.properties: |
    environment=production
    debug=false
  ui.properties: |
    color.background=blue
    color.foreground=white`,

        `# Using ConfigMap in Pod
apiVersion: v1
kind: Pod
metadata:
  name: configured-pod
spec:
  containers:
  - name: app
    image: my-app
    envFrom:
    - configMapRef:
        name: app-config`
      ]
    },
    {
      title: "Secrets",
      content: `Secrets let you store and manage sensitive information, such as passwords, OAuth tokens, and ssh keys. Using Secrets prevents exposing confidential data in your application configuration.`,
      commands: [
        "kubectl create secret         # Create secret",
        "kubectl get secrets          # List secrets",
        "kubectl describe secret      # Show secret details"
      ],
      examples: [
        `# Create Secret
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  username: dXNlcm5hbWU=  # base64 encoded
  password: cGFzc3dvcmQ=  # base64 encoded`,

        `# Using Secret in Pod
apiVersion: v1
kind: Pod
metadata:
  name: secret-pod
spec:
  containers:
  - name: app
    image: my-app
    env:
    - name: SECRET_USERNAME
      valueFrom:
        secretKeyRef:
          name: mysecret
          key: username`
      ]
    },
    {
      title: "Storage",
      content: `Kubernetes provides several ways to manage persistent storage for applications. This includes PersistentVolumes, PersistentVolumeClaims, and StorageClasses.`,
      commands: [
        "kubectl get pv               # List persistent volumes",
        "kubectl get pvc             # List volume claims",
        "kubectl get sc              # List storage classes"
      ],
      examples: [
        `# PersistentVolume
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data"`,

        `# PersistentVolumeClaim
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi`
      ]
    },
    {
      title: "RBAC",
      content: `Role-Based Access Control (RBAC) is a method of regulating access to resources based on the roles of individual users within your organization.`,
      commands: [
        "kubectl create role           # Create role",
        "kubectl create rolebinding    # Create role binding",
        "kubectl get roles            # List roles",
        "kubectl get rolebindings     # List role bindings"
      ],
      examples: [
        `# Role Definition
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]`,

        `# RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io`
      ]
    },
    {
      title: "Best Practices",
      content: `Kubernetes best practices help ensure your applications are secure, efficient, and maintainable.`,
      examples: [
        `# 1. Resource Management
• Always set resource requests and limits
apiVersion: v1
kind: Pod
metadata:
  name: frontend
spec:
  containers:
  - name: app
    image: app
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"`,

        `# 2. Security Practices
• Use RBAC for access control
• Enable network policies
• Regular security audits
• Use Pod Security Policies
• Implement image scanning`,

        `# 3. High Availability
• Use multiple replicas
• Implement pod disruption budgets
• Use anti-affinity rules
• Regular backup of etcd
• Multiple availability zones`
      ]
    }
  ]
}; 