'use client';
import React, { useState } from 'react';
import { Layout, Menu, Button, Input, Drawer, Row, Col } from 'antd';
import { MenuOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header } = Layout;

export default function AppHeader() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <Header style={{ background: '#001529', padding: '0 20px', display: 'flex', alignItems: 'center' }}>
      <Row justify="space-between" align="middle" style={{ width: '100%' }}>
        {/* LOGO */}
        {/* 1. Logo & Menu chữ */}
    <Col flex="auto" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      <Link href="/">
        <img src="img/vn7H_PlV9nYpgD5LbWkJGtrqf_TVr_sxIiDJAvM7lHcs2qg-YykscKLkB-Iahd4hPwUK3iaxhJaqsYVR_AfAbQ.webp" alt="Logo" style={{ height: '35px', borderRadius: '4px' }} />
      </Link>
      
    </Col>
      {/* Menu dạng text đơn giản */} 
    <Col xs={0} md={10}>   
      <div style={{ display: 'flex', gap: '30px' }}>
          <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="flex-1 justify-center border-none bg-transparent"
          items={[
            { key: '1', label: <Link href="/">Home</Link> },
            { key: '2', label: <Link href="/SongList">Songs</Link> },
            { key: '3', label: <Link href="/Partners">Partners</Link> },
            { key: '4', label: <Link href="/Download">Download</Link> },
          ]}
        />
        
      </div></Col>

    {/* 2. Search & Login (Nằm bên phải) */}
    <Col style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <Input 
        prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />} 
        placeholder="Search..." 
        style={{ 
          width: '250px', // Giới hạn chiều rộng để không đẩy Login
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.97)'
        }} 
      />
      <Link href="/Login">
      <Button 
        type="primary" 
        icon={<UserOutlined />}
        style={{ 
          backgroundColor: '#6247aa', 
          border: 'none',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Login
      </Button></Link>
      <Button 
            className="mobile-menu-btn"
            type="text" 
            icon={<MenuOutlined style={{ color: 'white' }} />} 
            onClick={() => setOpenMobileMenu(true)}
            style={{ display: 'none' }} // Sẽ ghi đè bằng CSS bên dưới
          />
    </Col>
      </Row>

      {/* DRAWER CHO MOBILE MENU */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpenMobileMenu(false)}
        open={openMobileMenu}
      >
        <Menu
          mode="vertical"
          items={[
            { key: '1', label: <Link href="/">Home</Link> },
            { key: '2', label: <Link href="/SongList">Songs</Link> },
            { key: '3', label: <Link href="/Partners">Partners</Link> },
            { key: '4', label: <Link href="/world-mode">Download</Link> },
          ]}
          onClick={() => setOpenMobileMenu(false)}
        />
      </Drawer>

      <style jsx global>{`
        @media (max-width: 767px) {
          .search-input {
            width: 40px !important; /* Thu nhỏ ô search thành icon nếu cần */
            padding: 4px 8px !important;
          }
          .login-btn {
            display: none; /* Ẩn nút login trên mobile hoặc đưa vào Drawer */
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </Header>
  );
}