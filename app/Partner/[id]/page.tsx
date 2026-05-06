'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Spin, Card, Tag, Typography, Row, Col } from 'antd';
import { partnerService, Partner } from '@/service/Partner/partner.service';

const { Title, Paragraph, Text } = Typography;

export default function PartnerDetailPage() {
  const { id } = useParams();
  const [partner, setPartner] = useState<Partner | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      partnerService.getPartnerById(id as string)
        .then(setPartner)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Spin size="large" description="Loading partner..." style={{ display: 'block', margin: '100px auto' }} />;
  if (!partner) return <div>Partner not found!</div>;

  const typeColors = {
    Support: 'green',
    Balance: 'blue',
    Challenge: 'volcano',
    Creator: 'purple'
  };

  return (
    <div style={{ padding: '40px', background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      
      <Card style={{ background: '#141414', border: 'none', borderRadius: '20px' }}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={8}>
            <img 
              src={partner.fullbody} 
              alt={partner.name}
              style={{ width: '100%', borderRadius: '15px', border: '2px solid #333', }} 
            />
          </Col>
          <Col xs={24} md={16}>
            <Tag color={typeColors[partner.type]}>{partner.type.toUpperCase()}</Tag>
            <Title level={1} style={{ color: '#fff', marginTop: '10px' }}>{partner.name}</Title>
            
<div style={{ marginTop: '20px', color: '#ccc' }}>
  <p>📅 <strong>Release Date:</strong> {partner.releaseDate}</p>
  <p>💿 <strong>Version:</strong> {partner.version}</p>
</div>
            <div style={{ margin: '20px 0', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
              <Text strong style={{ color: typeColors[partner.type] }}>SKILL: </Text>
              <Text style={{ color: '#eee' }}>{partner.skill}</Text>
            </div>

            <Title level={4} style={{ color: '#888' }}>Description</Title>
            <Paragraph style={{ color: '#ccc', fontSize: '16px' }}>
              {partner.description}
            </Paragraph>
          </Col>
        </Row>
          <Row gutter={[16, 16]}>
                        {[
          { label: 'STEP', value: partner.stat?.step, color: '#6247aa' },
          { label: 'FRAG', value: partner.stat?.frag, color: '#6247aa' },
          { label: 'OVER', value: partner.stat?.over, color: '#6247aa' }, // Màu tím Arcaea
        ].map((diff) => (
          <Col span={4.8} key={diff.label}> {/* Chia 5 cột cho cân đối */}
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)', 
              padding: '15px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: `1px solid ${diff.value ? diff.color : 'transparent'}` 
            }}>
              <div style={{ color: diff.color, fontWeight: 'bold', fontSize: '12px' }}>{diff.label}</div>
              <div style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                {diff.value && diff.value > 0 ? diff.value : '-'}
              </div>
              {diff.value !== undefined && (
                <div style={{ fontSize: '11px', color: '#888', marginTop: '5px' }}>
                  {diff.value} 
                </div>
              )}
            </div>
          </Col>
        ))}
                      </Row>
      </Card>
    </div>
  );
}