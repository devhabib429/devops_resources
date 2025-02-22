import Navigation from '@/components/Navigation';

export default function TopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      {children}
    </div>
  );
} 