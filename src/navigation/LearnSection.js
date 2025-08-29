import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const learnItems = [
  {
    icon: '🍕',
    title: '生地の極意',
    description:
      '完璧な生地作りの技術を習得しましょう。混ぜ方から発酵まで、軽くてふわっとしたクラストを目指します。',
  },
  {
    icon: '🌀',
    title: '伝統的な技法',
    description:
      'ナポリピザ作りの伝統的な技法を学びます。手で伸ばす方法やトッピングの乗せ方をマスターしましょう。',
  },
  {
    icon: '🔥',
    title: '焼きの極意',
    description:
      '薪窯で完璧に焼き上げる秘訣を発見しましょう。パリッとしたクラストとふっくらした縁が特徴です。',
  },
];

export default function LearnSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ bgcolor: '#fff8f4', py: 8, px: 2, width: '100%' }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          mb: 8,
          fontSize: { xs: '2.5rem', md: '3rem' },
        }}
      >
        学べること
      </Typography>
      <Grid container spacing={8} justifyContent="center">
        {learnItems.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Paper
              elevation={4}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: '400px',
                minWidth: '400px',
                maxWidth: '400px',
                transition: 'transform 0.3s ease',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#f4c6a0',
                  mb: 3,
                  width: 64,
                  height: 64,
                  fontSize: 36,
                }}
                aria-label={item.title}
              >
                {item.icon}
              </Avatar>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' } }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
