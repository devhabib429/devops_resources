'use client';
import Navigation from '@/components/Navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function TopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleSectionSelect = (topic: string, section: string) => {
    router.push(`/${topic}/${section}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-1 pt-16">
        <aside className="sticky top-16 h-[calc(100vh-4rem)] flex-shrink-0">
          <Navigation onSectionSelect={handleSectionSelect} />
        </aside>
        <div className="flex flex-col flex-1 overflow-auto">
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
} 