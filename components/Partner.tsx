'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Table, Avatar, Typography, List, Card,  } from 'antd';
import { partnerService, Partner } from '@/service/Partner/partner.service';

const { Title } = Typography;

export default function PartnerListPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    partnerService.getAllPartners().then(data => {
      setPartners(data);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      title: 'Partner',
      key: 'partner',
      render: (_: any, record: Partner) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Avatar 
            src={typeof record.avatar === 'string' ? record.avatar : undefined} 
            shape="square" 
            size={64} 
            style={{ border: '1px solid #ddd' }} 
          />
          <div>
             <Link href={`/Partner/${record.id}`} style={{ color: 'inherit', fontWeight: 'bold' }}>
               <div className="font-bold text-purple-800">{record.name}</div>
             </Link>
          </div>
        </div>
      ),
    }
  ];

  return (
  <div
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundImage: '  linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://static.wikia.nocookie.net/iowiro/images/7/7f/Wbg3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '40px 20px',
        }}
      >
        <div className="max-w-10xl mx-auto">
          <h1 className="text-white text-center text-3xl font-bold mb-8 shadow-sm">
            Partners
          </h1>
  

<div className="card-container" style={{ padding: '20px' }}>
  <List
    grid={{
      gutter: 16,
      xs: 1, // 1 cột trên điện thoại
      sm: 2,
      md: 3,
      lg: 4, // 4 cột trên máy tính
      xl: 4,
      xxl: 6,
    }}
    dataSource={partners}
    renderItem={(partner: Partner) => (
      <List.Item>
        <Card
          hoverable
          className="glass-card"
          cover={
            <img 
              alt={partner.name} 
              src={partner.avatar} 
              style={{ height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} 
            />
          }
          style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            color: '#fff'
          }}
        >
          <Card.Meta
            title={
              <Link href={`/Partner/${partner.id}`} style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
                {partner.name}
              </Link>
            }
            description={
              <div style={{ color: '#aaa' }}>{partner.type}</div>
            }
          />
        </Card>
      </List.Item>
    )}
    pagination={{
      pageSize: 20,
      align: 'center',
      className: 'custom-pagination'
    }}
  />
</div>
      </div>
</div>
  );
}