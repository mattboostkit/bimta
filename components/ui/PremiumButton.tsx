'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  href?: string;
  fullWidth?: boolean;
}

export default function PremiumButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon,
  href,
  fullWidth = false,
}: PremiumButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-900 border-2 border-white hover:bg-gray-100 shadow-md hover:shadow-lg',
    ghost: 'bg-transparent text-blue-900 hover:bg-blue-50',
    gradient: 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl',
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    font-semibold rounded-xl
    transition-all duration-300 ease-out
    transform hover:scale-105 active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${fullWidth ? 'w-full' : ''}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      <span className={`flex items-center gap-2 ${loading ? 'opacity-0' : ''}`}>
        {icon && <span className="transition-transform group-hover:rotate-12">{icon}</span>}
        {children}
      </span>
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-all duration-700"></div>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} group`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} group`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}