'use client';
import React from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, Divider } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Text } = Typography;

export default function LoginPage() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    // Xử lý logic đăng nhập ở đây
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      background: '#0a0a0a', // Đồng bộ màu nền với trang Detail
      padding: '20px' 
    }}>
      <Card style={{ 
        width: '100%', 
        maxWidth: '400px', 
        background: '#141414', 
        border: '1px solid #333', 
        borderRadius: '15px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Title level={2} style={{ color: '#fff', marginBottom: '5px' }}>Login</Title>
        </div>

        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your username or email!' }]}
          >
            <Input 
              prefix={<UserOutlined style={{ color: 'rgba(255,255,255,0.25)' }} />} 
              placeholder="Username / Email" 
              style={{ background: '#1f1f1f', color: '#fff', border: '1px solid #434343', height: '45px' }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: 'rgba(255,255,255,0.25)' }} />}
              placeholder="Password"
              style={{ background: '#1f1f1f', color: '#fff', border: '1px solid #434343', height: '45px' }}
            />
          </Form.Item>

          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{ color: '#888' }}>Remember me</Checkbox>
              </Form.Item>
              <Link href="/forgot-password" style={{ color: '#6247aa' }}>Forgot password?</Link>
            </div>
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              style={{ 
                background: '#6247aa', // Màu tím đồng bộ với nút Play Now
                borderColor: '#6247aa', 
                height: '45px', 
                fontWeight: 'bold',
                borderRadius: '8px'
              }}
            >
              LOG IN
            </Button>
          </Form.Item>
        </Form>

        <Divider style={{ borderColor: '#333', color: '#666' }}>Or login with</Divider>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <Button icon={<GoogleOutlined />} style={{ flex: 1, background: '#f5f5f5' }}>Google</Button>
          <Button icon={<FacebookOutlined />} type="primary" style={{ flex: 1, background: '#1877F2' }}>Facebook</Button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Text style={{ color: '#888' }}>Don't have an account? </Text>
          <Link href="/register" style={{ color: '#6247aa', fontWeight: 'bold' }}>Sign up now</Link>
        </div>
      </Card>
    </div>
  );
}