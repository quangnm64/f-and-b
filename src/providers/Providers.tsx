// src/providers/Providers.tsx
'use client';
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { OrderProvider } from '@/context/OrderContext';
import { AuthProvider } from './AuthProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <OrderProvider>
        <Navbar />
        <main style={{ minHeight: '70vh' }}>{children}</main>
        <Footer />
      </OrderProvider>
    </AuthProvider>
  );
}
