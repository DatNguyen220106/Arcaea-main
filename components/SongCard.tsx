'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {  Avatar, message, List, Card, Typography } from 'antd';
import { Song } from '@/service/Song/song.service';
import { songService } from '@/service/Song/song.service';

export default function SongListPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await songService.getAllSongs();
        setSongs(data);
      } catch (error) {
        message.error("Lỗi khi kết nối API!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const columns = [
    {
      title: 'Song',
      dataIndex: 'title',
      key: 'title',
      render: (_: any, record: Song) => (
        <div className="flex items-center gap-3">
          <Avatar src={record.image} shape="square" size={48} />
          <div>
            <Link href={`/Arcaea/${record.id}`} style={{ color: 'inherit', fontWeight: 'bold' }}>
            <div className="font-bold text-purple-800">{record.title}</div>
            </Link>
            <div className="text-xs text-gray-400">{record.artist}</div>
          </div>
        </div>
      ),
    },
   
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
          Songs
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
    dataSource={songs}
    renderItem={(song: Song) => (
      <List.Item>
        <Card
          hoverable
          className="glass-card"
          cover={
            <img 
              alt={song.title} 
              src={song.image} 
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
              <Link href={`/Arcaea/${song.id}`} style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
                {song.title}
              </Link>
            }
            description={
              <div style={{ color: '#aaa' }}>{song.artist}</div>
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