'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Layout, Button, Spin, Tag, Card, Row, Col, Typography } from 'antd';
import { StarFilled, CustomerServiceOutlined } from '@ant-design/icons';
import songService, { Song } from '@/service/Song/song.service';

const { Title, Text, Paragraph } = Typography;

export default function SongDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const data = await songService.getSongById(id as string);
        setSong(data);
      } catch (error) {
        console.error("Lỗi lấy chi tiết bài hát:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSong();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0a0a0a]">
        <Spin size="large" description="Loading song data..." />
      </div>
    );
  }

  if (!song) {
    return <div className="text-white text-center">Song not found!</div>;
  }
  const arcaeaPurple = '#6247aa';

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${song.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '40px 20px'
    }}>
      <div className="max-w-5xl mx-auto">

        <div style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(15px)',
          borderRadius: '24px',
          padding: '40px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          <Row gutter={[40, 40]} align="middle">
            {/* Hình ảnh bài hát */}
            <Col xs={24} md={10}>
              <img 
                src={song.image} 
                alt={song.title} 
                style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              />
            </Col>

            {/* Thông tin văn bản */}
            <Col xs={24} md={14}>
              <Tag color={arcaeaPurple} style={{ marginBottom: 10 }}>Song Detail</Tag>
              <Title style={{ color: '#fff', fontSize: '3rem', margin: '0 0 10px 0' }}>{song.title}</Title>
              <Title level={3} style={{ color: '#aaa', margin: '0 0 30px 0', fontWeight: 'normal' }}>
                <CustomerServiceOutlined /> {song.artist}
              </Title>
<div style={{ marginTop: '20px', color: '#ccc' }}>
  <p>📅 <strong>Release Date:</strong> {song.releaseDate}</p>
  <p>💿 <strong>Version:</strong> {song.version}</p>
  <p>💽 <strong>Pack:</strong> {song.pack}</p>
</div>

<div style={{ marginTop: '20px', fontStyle: 'italic', color: '#aaa' }}>
  {song.description}
</div>
              <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

              {/* Chỉ số độ khó */}
              <Title level={4} style={{ color: '#fff', marginBottom: 20 }}>Difficulties</Title>

  <Row gutter={[16, 16]}>
                {[
  { label: 'PST', value: song.difficulty?.pst, note: song.note?.pst, color: '#4a90e2' },
  { label: 'PRS', value: song.difficulty?.prs, note: song.note?.prs, color: '#50e3c2' },
  { label: 'FTR', value: song.difficulty?.ftr, note: song.note?.ftr, color: '#6247aa' }, // Màu tím Arcaea
  { label: 'BYD', value: song.difficulty?.byd, note: song.note?.byd, color: '#d0021b' },
  { label: 'ETR', value: song.difficulty?.etr, note: song.note?.etr, color: '#666666' }
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
      {diff.note !== undefined && (
        <div style={{ fontSize: '11px', color: '#888', marginTop: '5px' }}>
          {diff.note} notes
        </div>
      )}
    </div>
  </Col>
))}
              </Row>
              
              <Button 
                size="large" 
                block 
                style={{ marginTop: 40, backgroundColor: arcaeaPurple, borderColor: arcaeaPurple, color: '#fff', height: 50, fontWeight: 'bold' }}
              onClick={() => {
    if (song?.play) {
      window.open(song.play, '_blank'); // Mở link trong tab mới
    } else {
      alert("Link bài hát hiện chưa có!");
    }
  }}>
                PLAY NOW
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

// Hàm bổ trợ Divider đơn giản
const Divider = ({ style }: { style: React.CSSProperties }) => (
  <div style={{ borderTop: '1px solid #333', margin: '20px 0', ...style }} />
);