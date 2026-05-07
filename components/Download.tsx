'use client';
import React from 'react';
import { Button, Typography, Row, Col, Card, Space, Divider } from 'antd';
import { AppleFilled, AndroidFilled, DownloadOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Text, Paragraph } = Typography;

export default function DownloadPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#fff', paddingBottom: '50px' }}>
      
      {/* 1. Hero Section */}
      <div style={{ 
        height: '400px', 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), #0a0a0a), url("/path-to-your-banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Title style={{ color: '#fff', fontSize: '48px', marginBottom: '10px' }}>Arcaea</Title>
        <Paragraph style={{ color: '#ccc', fontSize: '18px' }}>
          New Dimension Rhythm Game
        </Paragraph>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* 2. Download Buttons */}
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: '-50px' }}>
          <Col xs={24} sm={8}>
           <Link href="https://apps.apple.com/vn/app/arcaea/id1205999125?l=vi&platform=ipad" target="_blank" rel="noopener noreferrer">
           <Button 
              type="primary" 
              size="large" 
              block 
              icon={<AppleFilled />} 
              style={{ height: '60px', borderRadius: '12px', fontSize: '18px', background: '#fff', color: '#000' }}
            >
              App Store
            </Button> </Link>
          </Col>
          <Col xs={24} sm={8}>
            <Link href="https://play.google.com/store/apps/details?id=moe.low.arc&hl=vi" target="_blank" rel="noopener noreferrer">
              <Button 
                type="primary" 
                size="large" 
                block 
                icon={<AndroidFilled />} 
                style={{ height: '60px', borderRadius: '12px', fontSize: '18px', background: '#3DDC84', border: 'none' }}
              >
                Google Play
              </Button>
            </Link>
          </Col>
        </Row>

        {/* 3. Game Info */}
        <Card style={{ marginTop: '50px', background: '#141414', border: 'none', borderRadius: '20px' }}>
          <Row gutter={[32, 32]}>

            <Col xs={24} md={12}>
              <Title level={3} style={{ color: '#fff' }}>System Requirements</Title>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
                <Paragraph style={{ color: '#ccc' }}>
                  <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                  <b>iOS:</b> iOS 12.4 or later.
                </Paragraph>
                <Paragraph style={{ color: '#ccc' }}>
                  <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                  <b>Android:</b> Android 7.0 or later, minimum 2GB RAM.
                </Paragraph>
                <Paragraph style={{ color: '#ccc' }}>
                  <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                  <b>Storage:</b> Minimum 2GB available space (4GB recommended for full music library).
                </Paragraph>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}