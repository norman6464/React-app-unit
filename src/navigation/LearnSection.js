import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const learnItems = [
  {
    icon: '🍕',
    title: 'Dough Perfection',
    description:
      'Master the art of crafting the perfect dough, from mixing to proofing, ensuring a light and airy crust.',
  },
  {
    icon: '🌀',
    title: 'Traditional Techniques',
    description:
      'Learn the time-honored techniques of Neapolitan pizza making, including hand-stretching and topping application.',
  },
  {
    icon: '🔥',
    title: 'Baking Mastery',
    description:
      'Discover the secrets to achieving a perfectly baked pizza in a wood-fired oven, with a crispy crust and bubbly edges.',
  },
];

export default function LearnSection() {
  return (
    <Box sx={{ bgcolor: '#fff8f4', py: 8, px: 2, width: '100%' }}>
      <Typography
        variant="h5"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 6 }}
      >
        What You'll Learn
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {learnItems.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }} // 中央揃え
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: '280px', // 固定幅に設定（お好みで調整）
                minWidth: '280px', // 最小幅も同じにして均等化
                maxWidth: '280px',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#f4c6a0',
                  mb: 2,
                  width: 48,
                  height: 48,
                  fontSize: 24,
                }}
                aria-label={item.title}
              >
                {item.icon}
              </Avatar>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
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
