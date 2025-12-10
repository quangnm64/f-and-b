// src/components/Layout/PageContainer.tsx
import React from 'react';

export default function PageContainer({ children, className = '' }: { children: React.ReactNode; className?: string; }) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
}
