import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          {index > 0 && <span>/</span>}
          <Link href={item.href} className="hover:text-gray-900 dark:hover:text-gray-200">
            {item.label}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb; 