// src/app/layout.tsx
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Providers from '@/providers/Providers';
import React from 'react';

export const metadata = {
  title: 'fandb — Nhà hàng & Café',
  description: 'Nền tảng đặt bàn & menu cho nhà hàng, café'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <ThemeRegistry>
          {/* Providers is a client wrapper that renders AuthProvider, OrderProvider */}
          <Providers>
            {children}
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
