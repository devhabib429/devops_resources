'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(['Docker']);
  const pathname = usePathname();

  const topics = [
    { 
      title: 'DevOps', 
      path: '/',
      subItems: ['Overview', 'Getting Started', 'Best Practices', 'Tools']
    },
    { 
      title: 'Docker', 
      path: '/docker', 
      subItems: [
        'Docker Introduction',
        'Docker Basic',
        'Docker Container',
        'Docker Network',
        'Docker Images',
        'Docker Volume',
        'Docker Compose',
        'Docker Swarm',
        'Docker Stack',
        'Tips and Tricks'
      ]
    },
    { 
      title: 'Kubernetes', 
      path: '/kubernetes',
      subItems: [
        'Introduction to K8s',
        'Architecture',
        'Pods',
        'Services',
        'Deployments',
        'ConfigMaps',
        'Secrets',
        'Storage',
        'RBAC',
        'Best Practices'
      ]
    },
    { 
      title: 'GitHub Actions', 
      path: '/github-actions',
      subItems: [
        'Introduction',
        'Workflows',
        'Actions',
        'CI/CD Pipeline',
        'Security',
        'Best Practices'
      ]
    },
    { 
      title: 'Linux', 
      path: '/linux',
      subItems: [
        'Basic Commands',
        'File System',
        'User Management',
        'Process Management',
        'Networking',
        'Shell Scripting'
      ]
    },
    { 
      title: 'Git', 
      path: '/git',
      subItems: [
        'Basics',
        'Branching',
        'Merging',
        'Remote Repositories',
        'Advanced Features'
      ]
    },
    { title: 'Networking', path: '/networking' },
    { 
      title: 'YAML', 
      path: '/yaml',
      subItems: [
        'YAML Basics',
        'Data Types',
        'Collections',
        'Advanced Features',
        'Best Practices'
      ]
    },
    { 
      title: 'Golang', 
      path: '/golang',
      subItems: [
        'Getting Started',
        'Basic Syntax',
        'Data Structures',
        'Concurrency',
        'Web Development',
        'Testing'
      ]
    },
    { 
      title: 'Helm', 
      path: '/helm',
      subItems: [
        'Introduction',
        'Chart Structure',
        'Templates',
        'Values and Variables',
        'Hooks',
        'Best Practices'
      ]
    },
    { 
      title: 'Prometheus', 
      path: '/prometheus',
      subItems: [
        'Architecture',
        'Installation',
        'Configuration',
        'PromQL',
        'Alerting',
        'Integration'
      ]
    },
    { 
      title: 'GitOps', 
      path: '/gitops',
      subItems: [
        'Principles',
        'Tools',
        'Workflows',
        'Implementation',
        'Security'
      ]
    },
    { 
      title: 'ArgoCD', 
      path: '/argocd',
      subItems: [
        'Getting Started',
        'Application Management',
        'Sync Strategies',
        'RBAC',
        'Monitoring'
      ]
    },
    { 
      title: 'Jenkins', 
      path: '/jenkins',
      subItems: [
        'Installation',
        'Pipeline Basics',
        'Jenkinsfile',
        'Plugins',
        'Security',
        'Best Practices'
      ]
    },
    { 
      title: 'Bash Scripting', 
      path: '/bash-scripting',
      subItems: [
        'Basics',
        'Variables',
        'Control Flow',
        'Functions',
        'File Operations',
        'Advanced Topics'
      ]
    },
    { 
      title: 'WebAssembly', 
      path: '/webassembly',
      subItems: [
        'Introduction',
        'Setup',
        'Development',
        'Integration',
        'Performance'
      ]
    },
    { 
      title: 'Terraform', 
      path: '/terraform',
      subItems: [
        'Basics',
        'Providers',
        'State Management',
        'Modules',
        'Best Practices'
      ]
    },
    { 
      title: 'DevSecOps', 
      path: '/devsecops',
      subItems: [
        'Introduction',
        'Security Tools',
        'Implementation',
        'Compliance',
        'Best Practices'
      ]
    },
    { 
      title: 'Q&A', 
      path: '/qa',
      subItems: [
        'Common Questions',
        'Troubleshooting',
        'Best Practices',
        'Tips and Tricks'
      ]
    },
    { 
      title: 'Feedback & Suggestions', 
      path: '/feedback',
      subItems: [
        'Submit Feedback',
        'Feature Requests',
        'Bug Reports',
        'Community Guidelines'
      ]
    }
  ];

  const getSubItemPath = (topic: string, subItem: string) => {
    return `/${topic.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      <nav className={`
        fixed lg:static top-0 left-0 h-full w-64 
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-200 ease-in-out
        bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        overflow-y-auto z-40
      `}>
        <div className="p-4">
          <div className="space-y-1">
            {topics.map((topic) => (
              <div key={topic.title} className="space-y-1">
                <div
                  onClick={() => topic.subItems && toggleExpand(topic.title)}
                  className={`
                    flex items-center justify-between p-2 rounded-lg cursor-pointer
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    ${isActive(topic.path) ? 'bg-gray-100 dark:bg-gray-700' : ''}
                  `}
                >
                  <Link
                    href={topic.path}
                    className={`flex-grow ${isActive(topic.path) ? 'text-blue-600 dark:text-blue-400' : ''}`}
                  >
                    {topic.title}
                  </Link>
                  {topic.subItems && (
                    <div className="text-gray-500">
                      {expandedItems.includes(topic.title) ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </div>
                  )}
                </div>

                {topic.subItems && expandedItems.includes(topic.title) && (
                  <div className="ml-4 space-y-1">
                    {topic.subItems.map((subItem) => {
                      const subItemPath = getSubItemPath(topic.title, subItem);
                      return (
                        <Link
                          key={subItem}
                          href={subItemPath}
                          className={`
                            block px-4 py-2 text-sm rounded-lg
                            ${isActive(subItemPath) 
                              ? 'bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400' 
                              : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700'}
                          `}
                        >
                          {subItem}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation; 