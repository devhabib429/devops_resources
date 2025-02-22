import React from 'react';

interface TopicCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

const TopicCard = ({ title, description, icon, href }: TopicCardProps) => {
  return (
    <a
      href={href}
      className="block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default TopicCard; 