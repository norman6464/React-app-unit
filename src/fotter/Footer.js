import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1c1b1a',
        color: '#b3a999',
        py: 6,
        px: { xs: 3, md: 10 },
        borderRadius: '0 0 10px 10px',
        fontFamily: 'Georgia, serif',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          mb: 4,
        }}
      >
        {/* 左の説明 */}
        <Box sx={{ mb: { xs: 4, md: 0 }, maxWidth: 300 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Napoli Pizza Elite
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            Experience the authentic taste of Naples.
            <br />
            Learn from the best, once a year.
          </Typography>
        </Box>

        {/* 真ん中のリンク */}
        <Box sx={{ mb: { xs: 4, md: 0 } }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Stack component="nav" spacing={1}>
            <Typography variant="body2" sx={{ cursor: 'pointer' }}>
              About the Class
            </Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer' }}>
              What You'll Learn
            </Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer' }}>
              Testimonials
            </Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer' }}>
              Book Your Spot
            </Typography>
          </Stack>
        </Box>

        {/* 右のSNS */}
        <Box sx={{ maxWidth: 300 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Connect With Us
          </Typography>
          <Stack direction="row" spacing={1} mb={1}>
            <IconButton
              aria-label="Instagram"
              sx={{ color: '#b3a999', p: 0 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="Facebook"
              sx={{ color: '#b3a999', p: 0 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Email"
              sx={{ color: '#b3a999', p: 0 }}
              href="mailto:info@napolipizzaelite.it"
            >
              <EmailIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" sx={{ fontSize: 12, opacity: 0.7 }}>
            info@napolipizzaelite.it
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: '1px solid #3b322f',
          pt: 2,
          textAlign: 'center',
          fontSize: 12,
          opacity: 0.7,
        }}
      >
        © 2024 Napoli Pizza Elite. All rights reserved.&nbsp;
        <Typography
          component="span"
          sx={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          Privacy Policy
        </Typography>
        &nbsp;|&nbsp;
        <Typography
          component="span"
          sx={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          Terms of Service
        </Typography>
      </Box>
    </Box>
  );
}
