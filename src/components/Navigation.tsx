'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';

const Navigation = ({ onSectionSelect }: { onSectionSelect: (topic: string, section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(['DevOps', 'Docker']);
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

  const handleSectionClick = (topic: string, section: string) => {
    onSectionSelect(topic, section.toLowerCase().replace(/\s+/g, '-'));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      <nav className={`
        w-64 h-[calc(100vh-4rem)] overflow-y-auto
        lg:block ${isOpen ? 'block' : 'hidden'}
        bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600
        scrollbar-track-transparent
      `}>
        <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Topics</h2>
        </div>
        <div className="p-4">
          <div className="space-y-1">
            {topics.map((topic) => (
              <div key={topic.title} className="space-y-1">
                <div
                  onClick={() => topic.subItems && toggleExpand(topic.title)}
                  className={`
                    flex items-center justify-between p-2 rounded-lg cursor-pointer
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    ${expandedItems.includes(topic.title) ? 'bg-gray-50 dark:bg-gray-700' : ''}
                  `}
                >
                  <span className="flex-grow">{topic.title}</span>
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
                    {topic.subItems.map((subItem) => (
                      <button
                        key={subItem}
                        onClick={() => handleSectionClick(topic.title.toLowerCase(), subItem)}
                        className={`
                          block w-full text-left px-4 py-2 text-sm rounded-lg
                          text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700
                          transition-colors duration-150
                        `}
                      >
                        {subItem}
                      </button>
                    ))}
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