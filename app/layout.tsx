'use client';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout } from 'antd';
import AppHeader from '@/components/header';
import AppFooter from '@/components/footer'; // Đảm bảo đường dẫn này đúng
import './globals.css';

const { Content } = Layout;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AntdRegistry>
          <Layout style={{ minHeight: '100vh' }}>
            <AppHeader /> 
            <Content style={{ padding: '0px' }}>
              {children}
            </Content>
            <AppFooter />
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}