'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Table, Avatar, message } from 'antd';
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
      <div className="max-w-5xl mx-auto">
        <h1 className="text-white text-center text-3xl font-bold mb-8 shadow-sm">
          Songs
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
            dataSource={songs}
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