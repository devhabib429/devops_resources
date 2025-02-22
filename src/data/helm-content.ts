import { TopicContent } from '../types/content';

export const helmContent: TopicContent = {
  title: "Helm",
  description: "Complete guide to Helm - The package manager for Kubernetes",
  sections: [
    {
      title: "Introduction",
      content: `Helm is the package manager for Kubernetes. It helps you manage Kubernetes applications by defining, installing, and upgrading even the most complex Kubernetes applications.

Key Concepts:
• Chart: A Helm package containing Kubernetes resources
• Release: An instance of a chart running in a cluster
• Repository: A collection of available charts
• Values: Configuration for chart customization
• Templates: Resource definitions with variables`,
      commands: [
        "helm version           # Check Helm version",
        "helm repo list        # List chart repositories",
        "helm search repo      # Search charts in repos",
        "helm install          # Install a chart",
        "helm uninstall        # Remove a release"
      ],
      examples: [
        `# Basic Helm Architecture
┌─────────────────────────────────────┐
│            Helm Client              │
│  ┌────────────┐    ┌────────────┐  │
│  │  Charts   │    │ Templates  │  │
│  └────────────┘    └────────────┘  │
│            │           │           │
│            ▼           ▼           │
│      ┌────────────────────┐        │
│      │   Kubernetes API   │        │
│      └────────────────────┘        │
└─────────────────────────────────────┘`,
        
        `# Basic Chart Installation
# Add repository
helm repo add bitnami https://charts.bitnami.com/bitnami

# Install chart
helm install my-release bitnami/nginx

# Check status
helm status my-release`
      ]
    },
    {
      title: "Chart Structure",
      content: `A Helm chart is organized as a collection of files inside a directory. Understanding this structure is crucial for creating and managing charts.`,
      commands: [
        "helm create mychart    # Create new chart",
        "helm package mychart   # Package chart",
        "helm lint mychart     # Check chart for issues",
        "helm show values      # Display chart values"
      ],
      examples: [
        `# Standard Chart Structure
mychart/
  Chart.yaml          # Chart metadata
  values.yaml         # Default configuration
  charts/             # Chart dependencies
  templates/          # K8s manifest templates
    deployment.yaml
    service.yaml
    _helpers.tpl      # Template helpers
  README.md          # Documentation
  LICENSE           # License info`,
        
        `# Chart.yaml Example
apiVersion: v2
name: mychart
version: 1.0.0
description: My Helm chart
type: application
dependencies:
  - name: mongodb
    version: 8.x.x
    repository: https://charts.bitnami.com/bitnami`
      ]
    },
    {
      title: "Templates",
      content: `Helm uses Go templates to create dynamic Kubernetes manifests. Templates can include variables, functions, and control structures.`,
      examples: [
        `# Basic Template Example
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ .Release.Name }}-deployment
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app: {{ .Chart.Name }}
  template:
    metadata:
      labels:
        app: {{ .Chart.Name }}`,
        
        `# Template Functions
# String operations
{{ .Values.name | upper }}
{{ .Values.name | quote }}

# Control structures
{{- if .Values.enabled }}
  # enabled block
{{- else }}
  # disabled block
{{- end }}

# Loops
{{- range .Values.configFiles }}
  - name: {{ .name }}
    path: {{ .path }}
{{- end }}`
      ]
    },
    {
      title: "Values and Variables",
      content: `Values provide a way to customize chart installations. They can be defined in values.yaml, set via command line, or provided during installation.`,
      commands: [
        "helm install -f values.yaml    # Use values file",
        "helm install --set key=value   # Set individual value",
        "helm get values               # Get release values",
        "helm upgrade --reuse-values    # Keep existing values"
      ],
      examples: [
        `# values.yaml Example
# Application configuration
replicaCount: 3
image:
  repository: nginx
  tag: latest
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: true
  hosts:
    - host: chart.local
      paths: ["/"]`,
        
        `# Using Values in Templates
apiVersion: v1
kind: Service
metadata:
  name: {{ .Release.Name }}-service
spec:
  type: {{ .Values.service.type }}
  ports:
    - port: {{ .Values.service.port }}
      targetPort: http
      protocol: TCP
  selector:
    app: {{ .Chart.Name }}`
      ]
    },
    {
      title: "Hooks",
      content: `Helm hooks allow you to intervene at certain points in a release's life cycle. They're useful for setup, cleanup, and other release management tasks.`,
      examples: [
        `# Pre-install Hook
apiVersion: batch/v1
kind: Job
metadata:
  name: {{ .Release.Name }}-init
  annotations:
    "helm.sh/hook": pre-install
    "helm.sh/hook-weight": "0"
    "helm.sh/hook-delete-policy": hook-succeeded
spec:
  template:
    spec:
      containers:
        - name: init
          image: busybox
          command: ['sh', '-c', 'echo Initialize']
      restartPolicy: Never`,
        
        `# Common Hook Types
# Available hooks:
pre-install
post-install
pre-delete
post-delete
pre-upgrade
post-upgrade
pre-rollback
post-rollback
test

# Hook example with multiple annotations
annotations:
  "helm.sh/hook": post-install,post-upgrade
  "helm.sh/hook-weight": "5"
  "helm.sh/hook-delete-policy": before-hook-creation`
      ]
    },
    {
      title: "Best Practices",
      content: `Follow these best practices to create maintainable and reliable Helm charts.`,
      examples: [
        `# 1. Chart Organization
# Use clear directory structure
mychart/
  templates/
    deployment/     # Group by resource type
    service/
    config/
  helpers/         # Shared helper templates
  values/          # Environment-specific values
    prod.yaml
    staging.yaml`,
        
        `# 2. Template Best Practices
# Use helpers for repeated code
{{- define "mychart.labels" -}}
app: {{ .Chart.Name }}
release: {{ .Release.Name }}
{{- end }}

# Use in templates
metadata:
  labels:
    {{- include "mychart.labels" . | nindent 4 }}`,
        
        `# 3. Values Organization
# Structured and documented values
global:  # Global values
  imageRegistry: docker.io

app:     # App-specific values
  replicaCount: 3
  resources:
    limits:
      cpu: 100m
      memory: 128Mi

# Include comments for each value
monitoring:
  # Enable Prometheus metrics
  enabled: true
  # Port to expose metrics
  port: 9090`
      ]
    }
  ]
}; 