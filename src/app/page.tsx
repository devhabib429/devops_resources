'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { allContent } from '@/data/content';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Add type for content keys
type ContentKey = keyof typeof allContent;

export default function Home() {
  const [currentContent, setCurrentContent] = useState({
    topic: 'docker' as ContentKey,
    section: 'docker-basic'
  });

  const handleSectionSelect = (topic: string, section: string) => {
    setCurrentContent({ topic: topic as ContentKey, section });
  };

  const content = allContent[currentContent.topic];
  const section = content?.sections.find(
    s => s.title.toLowerCase().replace(/\s+/g, '-') === currentContent.section
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-1 pt-16">
        <aside className="sticky top-16 h-[calc(100vh-4rem)] flex-shrink-0">
          <Navigation onSectionSelect={handleSectionSelect} />
        </aside>
        <div className="flex flex-col flex-1 overflow-auto">
          <main className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              {section && (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">{section.title}</h1>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-lg mb-6">{section.content}</p>
                      
                      {section.commands && (
                        <div className="mt-6">
                          <h2 className="text-2xl font-semibold mb-4">Commands</h2>
                          <div className="space-y-4">
                            {section.commands.map((command, index) => (
                              <div key={index} className="group relative">
                                <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto">
                                  <code className="text-sm">{command}</code>
                                </pre>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.examples && (
                        <div className="mt-6">
                          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
                          <div className="space-y-4">
                            {section.examples.map((example, index) => (
                              <div key={index} className="group relative">
                                <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto">
                                  <code className="text-sm whitespace-pre">{example}</code>
                                </pre>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
