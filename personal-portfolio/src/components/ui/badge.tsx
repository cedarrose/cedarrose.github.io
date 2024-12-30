import React from 'react';
import { cn } from '../../lib/utils'; // Utility for combining class names

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'secondary';
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', className, children, ...props }) => {
  const baseStyles = 'inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium';
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    outline: 'border border-gray-300 text-gray-800',
    secondary: 'bg-blue-100 text-blue-800', // Secondary style
  };

  const combinedStyles = cn(baseStyles, variants[variant], className);

  return (
    <span className={combinedStyles} {...props}>
      {children}
    </span>
  );
};
