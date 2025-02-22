import { notFound } from 'next/navigation';
import { allContent } from '@/data/content';
import Breadcrumb from '@/components/Breadcrumb';
import Navigation from '@/components/Navigation';

export default function TopicPage({ params }: { params: { topic: string; section: string } }) {
  const content = allContent[params.topic];
  
  if (!content) {
    return notFound();
  }

  const section = content.sections.find(
    s => s.title.toLowerCase().replace(/\s+/g, '-') === params.section
  );

  if (!section) {
    return notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: content.title, href: `/${params.topic}` },
    { label: section.title, href: `/${params.topic}/${params.section}` },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
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
        </div>
      </main>
    </div>
  );
} 