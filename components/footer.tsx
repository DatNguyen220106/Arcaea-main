'use client';
import React from 'react';
import { Layout, Row, Col, Space } from 'antd';
import { GithubOutlined, FacebookOutlined, GlobalOutlined, YoutubeOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => {
  const arcaeaPurple = '#6247aa';

  return (
    <Footer style={{ backgroundColor: '#141414', color: '#ffffff', padding: '40px 20px' }}>
      <div className="max-w-6xl mx-auto">
        <Row gutter={[32, 32]}>
          {/* Cột 1: Thông tin Wiki */}
          <Col xs={24} md={8}>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="img/image2.jpg" 
                alt="Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold" style={{ color: arcaeaPurple }}>Arcaea Wiki</span>
            </div>
            <p className="text-gray-400 text-sm">
              The website provides detailed information about songs, partners, and game modes in Arcaea.  
The data is continuously updated from the community.
            </p>
          </Col>

          {/* Cột 2: Liên kết nhanh */}
          <Col xs={12} md={8}>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="list-none p-0 text-gray-400 text-sm space-y-2">
              <li><a href="/SongList" className="hover:text-purple-400">Song List</a></li>
              <li><a href="/Partners" className="hover:text-purple-400">Partners</a></li>
              <li><a href="/Download" className="hover:text-purple-400">Download</a></li>
            </ul>
          </Col>

          {/* Cột 3: Mạng xã hội */}
          <Col xs={12} md={8}>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <Space size="middle" className="text-2xl">
              <a href="https://www.facebook.com/arcaeagame" style={{ color: arcaeaPurple }}><FacebookOutlined /></a>
              <a href="https://www.youtube.com/@lowiro" style={{ color: arcaeaPurple }}><YoutubeOutlined /></a>
            </Space>
          </Col>
        </Row>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Arcaea Wiki Project. All rights reserved. 
          <br /> 
          This is a fan-made project and is not affiliated with lowiro.
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;