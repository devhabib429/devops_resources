import { notFound } from 'next/navigation';
import { allContent } from '@/data/content';
import { TopicContent } from '@/types/content';
import Breadcrumb from '@/components/Breadcrumb';

type ContentKey = keyof typeof allContent;

export default function TopicPage({ params }: { params: { topic: string; section: string } }) {
  console.log('Current params:', params);
  console.log('Available topics:', Object.keys(allContent));
  console.log('GitHub Actions content:', allContent['github-actions']);
  
  const sectionId = params.section.toLowerCase();
  console.log('Looking for section:', sectionId);
  
  const content = allContent[params.topic as ContentKey];
  console.log('Found content:', content?.title);
  
  if (!content) {
    console.log('Content not found for topic:', params.topic);
    return notFound();
  }

  const section = content.sections.find(
    s => s.title.toLowerCase().replace(/\s+/g, '-') === sectionId
  );
  console.log('Found section:', section?.title);

  if (!section) {
    return notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: content.title, href: `/${params.topic}` },
    { label: section.title, href: `/${params.topic}/${params.section}` },
  ];

  return (
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
  );
} 