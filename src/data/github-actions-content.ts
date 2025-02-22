import { TopicContent } from '../types/content';

export const githubActionsContent: TopicContent = {
  title: "GitHub Actions",
  description: "Complete guide to GitHub Actions for CI/CD and automation",
  sections: [
    {
      title: "Introduction",
      content: `GitHub Actions is a powerful automation platform that enables you to automate your software development workflows. It provides a flexible way to build, test, and deploy your applications.

Key Components:
• Workflows: Define your automation process
• Events: Triggers that start workflows
• Jobs: Groups of steps that execute on the same runner
• Actions: Reusable units of code
• Runners: Servers that run your workflows`,
      examples: [
        `# Basic Workflow Architecture
┌─────────────────────────────────────┐
│           GitHub Events             │
│  ┌────────────┐    ┌────────────┐  │
│  │   Push    │    │   Pull     │  │
│  │   Event   │    │  Request   │  │
│  └────────────┘    └────────────┘  │
└─────────────────────────────────────┘`
      ]
    },
    {
      title: "Workflows",
      content: `Workflows are custom automated processes that you can set up in your repository to build, test, package, release, or deploy any code project on GitHub.`,
      examples: [
        `# Multi-Stage Workflow
name: Full CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - run: npm run build`
      ]
    },
    {
      title: "Actions",
      content: `Actions are individual tasks that you can combine to create jobs and customize your workflow. You can create your own actions or use actions shared by the GitHub community.`,
      examples: [
        `# Custom Action Example
name: 'Hello World'
description: 'Greet someone'
inputs:
  who-to-greet:
    description: 'Who to greet'
    required: true
outputs:
  time:
    description: 'The time we greeted you'
runs:
  using: 'node16'
  main: 'index.js'`
      ]
    },
    {
      title: "CI/CD Pipeline",
      content: `Create complete CI/CD pipelines using GitHub Actions, including building, testing, and deploying your applications.`,
      examples: [
        `# Complete CI/CD Pipeline
name: CI/CD Pipeline

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Code Quality
        uses: super-linter/super-linter@v5

  security:
    runs-on: ubuntu-latest
    steps:
      - name: Security Scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: "\${secrets.SNYK_TOKEN}"`
      ]
    },
    {
      title: "Security",
      content: `Security best practices and configurations for GitHub Actions workflows.`,
      examples: [
        `# Security Best Practices
permissions:
  contents: read
  issues: write
  pull-requests: write

jobs:
  deploy:
    environment:
      name: production
      url: https://prod.example.com`
      ]
    },
    {
      title: "Best Practices",
      content: `Follow these best practices to create efficient, maintainable, and secure GitHub Actions workflows.`,
      examples: [
        `# 1. Caching Dependencies
steps:
  - name: Cache Node Modules
    uses: actions/cache@v3
    with:
      path: ~/.npm
      key: "\${runner.os}-node-\${hashFiles('**/package-lock.json')}"`,
        
        `# 2. Matrix Builds
strategy:
  matrix:
    node: [14, 16, 18]
    os: [ubuntu-latest, windows-latest]
  fail-fast: false`
      ]
    }
  ]
}; 