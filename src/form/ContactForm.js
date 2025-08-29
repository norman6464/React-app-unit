import React, { useState } from 'react';
import { Box, Container, TextField, Typography, Button } from '@mui/material';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 実際の送信処理（API連携など）はここに追加
    console.log('送信データ:', formData);
    alert('お問い合わせありがとうございます！');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ backgroundColor: '#fdf8f5', py: 6 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          お問い合わせ
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="お名前"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="メールアドレス"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="メッセージ"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            送信する
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
