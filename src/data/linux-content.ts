import { TopicContent } from '../types/content';

export const linuxContent: TopicContent = {
  title: "Linux",
  description: "Comprehensive guide to Linux system administration and command line usage",
  sections: [
    {
      title: "Basic Commands",
      content: `Essential Linux commands that every system administrator and developer should know. These commands form the foundation of command-line operations in Linux.

Key Categories:
• File Operations
• Directory Navigation
• System Information
• Process Management
• Text Processing
• User Management`,
      commands: [
        "ls -la               # List all files with details",
        "cd /path/to/dir     # Change directory",
        "pwd                 # Print working directory",
        "cp source dest      # Copy files",
        "mv source dest      # Move/rename files",
        "rm file             # Remove files",
        "mkdir dirname       # Create directory",
        "touch filename      # Create/update file timestamp"
      ],
      examples: [
        `# File System Navigation
┌─────────────────────────────────────┐
│              Root (/)               │
│  ┌──────┐ ┌────┐ ┌────┐ ┌─────┐   │
│  │ bin  │ │etc │ │home│ │ var │   │
│  └──────┘ └────┘ └────┘ └─────┘   │
│                    │               │
│              ┌─────┴─────┐         │
│              │   Users   │         │
│              └───────────┘         │
└─────────────────────────────────────┘`
      ]
    },
    {
      title: "File System",
      content: `Understanding the Linux file system hierarchy and common operations for file management.

Key Concepts:
• File System Hierarchy
• File Permissions
• Links (Symbolic & Hard)
• Mount Points
• File Types`,
      commands: [
        "chmod 755 file      # Change file permissions",
        "chown user:group    # Change file ownership",
        "ln -s source link   # Create symbolic link",
        "df -h               # Show disk space usage",
        "du -sh *           # Show directory sizes"
      ],
      examples: [
        `# File Permissions
┌──────────────────────────────┐
│    File Permission Bits      │
│  ┌────┐ ┌────┐ ┌────┐       │
│  │Owner│ │Group│ │Other│     │
│  │ rwx │ │ rx │ │ r  │      │
│  │ 7   │ │ 5  │ │ 4  │      │
│  └────┘ └────┘ └────┘       │
└──────────────────────────────┘`
      ]
    },
    {
      title: "User Management",
      content: `Managing users, groups, and permissions in Linux systems. Understanding user administration and security concepts.`,
      commands: [
        "useradd username    # Create new user",
        "usermod -aG group user  # Add user to group",
        "passwd username     # Set user password",
        "groups username     # List user groups",
        "who                # Show logged in users"
      ],
      examples: [
        `# User Management Structure
/etc/passwd:  user:x:1000:1000::/home/user:/bin/bash
/etc/group:   group:x:1000:user1,user2
/etc/shadow:  user:$6$hash:18000:0:99999:7:::`
      ]
    },
    {
      title: "Process Management",
      content: `Understanding and managing Linux processes, including monitoring, controlling, and troubleshooting system processes.`,
      commands: [
        "ps aux              # List all processes",
        "top                 # Dynamic process viewer",
        "kill pid           # Terminate process",
        "nice -n 10 command # Run with priority",
        "systemctl status   # Check service status"
      ],
      examples: [
        `# Process States
┌────────────────────────────────┐
│         Process States         │
│  ┌────────┐    ┌──────────┐   │
│  │Running │    │ Sleeping │   │
│  └────────┘    └──────────┘   │
│  ┌────────┐    ┌──────────┐   │
│  │Stopped │    │  Zombie  │   │
│  └────────┘    └──────────┘   │
└────────────────────────────────┘`
      ]
    },
    {
      title: "Networking",
      content: `Essential networking concepts and commands in Linux, including configuration, troubleshooting, and monitoring network connections.`,
      commands: [
        "ip addr            # Show IP addresses",
        "netstat -tuln      # Show listening ports",
        "ping host          # Test connectivity",
        "ss -tulpn         # Show socket statistics",
        "curl url          # Transfer data from URL"
      ],
      examples: [
        `# Network Configuration
# Interface Configuration
auto eth0
iface eth0 inet static
    address 192.168.1.100
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 8.8.8.8`
      ]
    },
    {
      title: "Shell Scripting",
      content: `Writing and understanding shell scripts for automation and system administration tasks.`,
      examples: [
        `# Basic Shell Script Structure
#!/bin/bash

# Variables
NAME="User"
DATE=$(date +%Y-%m-%d)

# Functions
greeting() {
    echo "Hello, $1!"
}

# Control Flow
if [ -f "$FILE" ]; then
    echo "File exists"
else
    echo "File not found"
fi

# Loops
for i in {1..5}; do
    echo "Count: $i"
done`,
        
        `# Error Handling
set -e           # Exit on error
set -u           # Exit on undefined variable
trap 'cleanup' EXIT

cleanup() {
    # cleanup code
    echo "Cleaning up..."
}`
      ]
    }
  ]
}; 