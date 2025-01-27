import React from 'react';

export const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-cream rounded-xl border border-gray-300 shadow-sm p-6 ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-b border-gray-100 ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h2 className={`text-xl font-semibold text-gray-800 ${className}`} {...props}>
    {children}
  </h2>
);
