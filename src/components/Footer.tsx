import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for the DevOps community</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/yourusername/devops_resource"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-gray-200 flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href="/feedback/submit-feedback"
              className="hover:text-gray-700 dark:hover:text-gray-200"
            >
              Feedback
            </a>
            <span>•</span>
            <a
              href="/about"
              className="hover:text-gray-700 dark:hover:text-gray-200"
            >
              About
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} DevOps Resources. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 