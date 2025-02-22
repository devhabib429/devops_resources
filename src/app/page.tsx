import React from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Docker Commands</h1>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Docker Basic</h2>
            <div className="space-y-4">
              <div>
                <p className="mb-2">To check Docker version:</p>
                <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg">
                  <code>docker version</code>
                </pre>
              </div>
              <div>
                <p className="mb-2">To check all the available images:</p>
                <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg">
                  <code>docker images</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
