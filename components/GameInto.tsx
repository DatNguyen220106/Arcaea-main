'use client';
import React from 'react';
import { Button, Row, Col, Card, Typography, Divider } from 'antd';
import { PlayCircleOutlined, DownloadOutlined, StarOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Paragraph, Text } = Typography;

export default function HomePage() {
  const arcaeaPurple = '#6247aa';

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://static.wikia.nocookie.net/iowiro/images/7/7f/Wbg3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        paddingBottom: '60px'
      }}
    >
      {/* 1. Hero Section */}
      <div className="flex flex-col items-center justify-center pt-20 pb-16 px-4 text-center">
        <img 
          src="https://arcaea.fandom.com/wiki/Special:FilePath/Site-logo.png" 
          alt="Arcaea Logo" 
          className="h-32 mb-6 drop-shadow-2xl"
        />
        <Title style={{ color: '#fff', fontSize: '3rem', margin: 0 }}>A Harmony of Light and Conflict</Title>
        <Paragraph style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '800px', marginTop: '20px' }}>
          Arcaea is a rhythm video game developed and published by the British company <strong>Lowiro</strong> (stylized in all lowercase).<br></br> The game was released on <strong>iOS</strong> and <strong>Android</strong> mobile platforms on <strong>9 March 2017</strong>. A single-player version of the game was released for the str <strong>Nintendo Switch</strong> on <strong>18 May 2021</strong>.<br></br>

The game functions as a <strong>Vertical Scrolling Rhythm Game</strong> with an accompanying story displayed in visual novel format. The visual novel features illustrations covering the two main female heroines, <strong>Tairitsu</strong> and <strong>Hikari</strong>. It is also considered a three-dimensional music video game that allows unique and challenging gameplay.
        </Paragraph>
        <div className="flex gap-4 mt-8">
          <Link href="/SongList">
            <Button size="large" type="primary" icon={<PlayCircleOutlined />} style={{ backgroundColor: arcaeaPurple, borderColor: arcaeaPurple, height: '50px', padding: '0 30px' }}>
              Go to Song List
            </Button>
          </Link>
          <Link href="/Download">
            <Button size="large" ghost icon={<DownloadOutlined />} style={{ height: '50px', padding: '0 30px', color: '#fff', borderColor: '#fff' }}>
              Download
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* 2. Game Introduction Section */}
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} md={12}>
              <Title level={2} style={{ color: '#fff' }}>Gameplay</Title>
              <Paragraph style={{ color: '#eee', fontSize: '1.1rem' }}>
                The main gameplay of Arcaea uses three-dimensional chart lanes that are split into two parts: The top lane and the bottom lane. The top lane consists of two different note types; Arcs in blue(L) or pink(R) that are color coded to indicate which hand to play with, that require the player to hold the note throughout its duration (arcs go in 360 degrees of direction, creating unique chart patterns), and sky notes that are single-tap notes that are present on the top lane. The bottom lane consists of two note types as well: Floor notes and long notes. Floor notes are basic single-tap notes that are present on the bottom lane (much like the sky notes), and long notes require the player to hold throughout their duration. 
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <img 
                src="img/Gameplay.png" 
                alt="Gameplay" 
                className="w-full rounded-xl shadow-2xl border border-white/20"
              />
            </Col>
          </Row>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} md={12}>
              <img 
                src="img/arcaea-lowiro-opposition-hd-wallpaper-preview.jpg" 
                alt="Gameplay" 
                className="w-full rounded-xl shadow-2xl border border-white/20"
              />
            </Col>
            <Col xs={24} md={12}>
              <Title level={2} style={{ color: '#fff' }}>Story</Title>
              <Paragraph style={{ color: '#eee', fontSize: '1.1rem' }}>
               Two young girls explore a shattered world, filled with sound: a past to be uncovered... <br></br>

Each awakens in this blank, ruin-dotted world to discover that she is equally blank, remembering nothing of what came before.
And then they make a second discovery: the Arcaea, multitudes of floating glass-like shards containing vivid memories of the past. 
              </Paragraph>
            </Col>
          </Row>
        </div>

       
      </div>
    </div>
  );
}