'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Table, Avatar, Typography } from 'antd';
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

  return (<div
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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-white text-center text-3xl font-bold mb-8 shadow-sm">
            Partners
          </h1>
  
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)', // Nền trắng mờ
              backdropFilter: 'blur(10px)',           // Hiệu ứng kính mờ
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <Table
              // Thêm class để tùy chỉnh màu chữ bảng cho nổi bật trên nền mờ
              className="custom-table"
              columns={columns}
              dataSource={partners}
              rowKey="id"
              pagination={{ pageSize: 8 }}
            />
          </div>
        </div>
  
        {/* CSS tùy chỉnh cho Table để chữ không bị chìm */}
        <style jsx global>{`
          .custom-table .ant-table {
            background: transparent !important;
            color: white !important;
          }
          .custom-table .ant-table-thead > tr > th {
            background: rgba(255, 255, 255, 0.2) !important;
            color: white !important;
          }
          .custom-table .ant-table-cell {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
        `}</style>
      </div>
  );
}