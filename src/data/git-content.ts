import { TopicContent } from '../types/content';

export const gitContent: TopicContent = {
  title: "Git",
  description: "Complete guide to Git version control system and best practices",
  sections: [
    {
      title: "Basics",
      content: `Git is a distributed version control system that tracks changes in source code during software development. It's designed for coordinating work among programmers, but it can be used to track changes in any set of files.

Key Concepts:
• Repository: Project's files and history
• Commit: Snapshot of changes
• Branch: Independent line of development
• Remote: Network-accessible repository
• Working Directory: Current files you're working on`,
      commands: [
        "git init              # Initialize repository",
        "git clone <url>       # Clone repository",
        "git add <file>        # Stage changes",
        "git commit -m 'msg'   # Commit changes",
        "git status           # Check status",
        "git log              # View history"
      ],
      examples: [
        `# Basic Git Workflow
┌─────────────────────────────────────┐
│           Git Workflow              │
│                                     │
│  Working     Staging     Local      │
│  Directory   Area       Repository  │
│    │           │           │        │
│    │   add     │  commit   │        │
│    │─────────▶ │─────────▶ │        │
│    │           │           │        │
│    │ ◄─────────────────────│        │
│    │      checkout         │        │
└─────────────────────────────────────┘`
      ]
    },
    {
      title: "Branching",
      content: `Git branches allow you to diverge from the main line of development and continue work without messing with the main line. This is essential for feature development and collaboration.`,
      commands: [
        "git branch            # List branches",
        "git branch <name>     # Create branch",
        "git checkout <branch> # Switch branch",
        "git merge <branch>    # Merge branch",
        "git branch -d <name>  # Delete branch"
      ],
      examples: [
        `# Branching Strategy
main/master
     │
     ├── develop
     │     │
     │     ├── feature/login
     │     │
     │     └── feature/signup
     │
     ├── hotfix/bug-123
     │
     └── release/v1.0.0`,
        
        `# Branch Operations
# Create and switch to new branch
git checkout -b feature/login

# Merge feature branch
git checkout main
git merge feature/login

# Delete after merge
git branch -d feature/login`
      ]
    },
    {
      title: "Merging",
      content: `Merging in Git is the process of integrating changes from different branches. Understanding merge strategies and handling conflicts is crucial for collaborative development.`,
      commands: [
        "git merge <branch>     # Merge branch into current",
        "git merge --abort      # Abort merge if conflicts",
        "git merge --squash     # Squash merge commits",
        "git merge --no-ff      # Create merge commit always"
      ],
      examples: [
        `# Merge Types
1. Fast-forward merge
2. Three-way merge
3. Squash merge
4. Rebase merge`,
        `# Merge Commit Message
Merge branch 'feature/login' into main

- Add user authentication
- Implement session management
- Update security policies`
      ]
    },
    {
      title: "Remote Repositories",
      content: `Working with remote repositories is crucial for collaboration. Git provides commands to sync your local repository with remote repositories.`,
      commands: [
        "git remote add origin <url>  # Add remote",
        "git push origin <branch>     # Push changes",
        "git pull origin <branch>     # Pull changes",
        "git fetch origin            # Fetch changes",
        "git remote -v               # List remotes"
      ],
      examples: [
        `# Remote Workflow
┌─────────────┐      ┌─────────────┐
│   Local     │      │   Remote    │
│ Repository  │      │ Repository  │
│             │ push │             │
│    main     │─────▶│    main    │
│             │      │             │
│    develop  │◀─────│    develop  │
│             │ pull │             │
└─────────────┘      └─────────────┘`,
        
        `# Common Remote Operations
# Push new branch
git push -u origin feature/login

# Update from remote
git fetch origin
git merge origin/main

# Or simply
git pull origin main`
      ]
    },
    {
      title: "Advanced Features",
      content: `Advanced Git features for complex workflows and repository management.`,
      commands: [
        "git rebase -i HEAD~3   # Interactive rebase",
        "git bisect start       # Binary search issues",
        "git cherry-pick <hash> # Pick specific commits",
        "git reflog             # Reference logs",
        "git submodule         # Manage submodules"
      ],
      examples: [
        `# Git Reflog
git reflog show
git reset --hard HEAD@{2}
git checkout HEAD@{5}`,
        
        `# Git Submodules
git submodule add <repo-url>
git submodule update --init
git submodule update --remote`
      ]
    },
    {
      title: "Conflict Resolution",
      content: `Merge conflicts occur when Git can't automatically resolve differences between commits. Understanding how to resolve conflicts is essential.`,
      commands: [
        "git merge --abort     # Abort merge",
        "git reset --merge     # Reset merge",
        "git diff              # Show conflicts",
        "git add <resolved>    # Mark resolved",
        "git commit            # Complete merge"
      ],
      examples: [
        `# Conflict Markers
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> feature/branch

# Resolution Steps
1. Open conflicted files
2. Choose changes to keep
3. Remove conflict markers
4. Stage and commit`,
        
        `# Using Merge Tools
git mergetool

# Configure mergetool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'`
      ]
    },
    {
      title: "Best Practices",
      content: `Git best practices help maintain a clean and manageable repository history.`,
      examples: [
        `# 1. Commit Messages
# Good commit message
feat: add login functionality

- Add login form component
- Implement authentication service
- Add user session management

# Bad commit message
fix stuff`,
        
        `# 2. Branching Strategy
# GitFlow
main          ●───────────●──────●
              │           │      │
develop       ●───●───●───●──────●
              │   │   │   │
feature/xyz   ●───●   │   │
                      │   │
feature/abc       ●───●   │
                          │
hotfix                    ●───●`,
        
        `# 3. Git Hooks
#!/bin/sh
# pre-commit hook
npm run lint
npm run test

if [ $? -ne 0 ]; then
  echo "Tests must pass before commit!"
  exit 1
fi`
      ]
    }
  ]
}; 