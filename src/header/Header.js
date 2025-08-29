import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
} from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import styled from 'styled-components';
import heroImage from '../asset/wood-iphone_X0R5VP6BSB.jpg';

// styled-components: ハンバーガーアイコン
const Hamburger = styled.div`
  width: 24px;
  height: 20px;
  position: relative;
  z-index: 2000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.4s ease;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
`;

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Class Details', href: '#class-details' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      {/* ヘッダー */}
      <AppBar
        position="static"
        sx={{
          bgcolor: '#efebf5a6',
          color: '#3c3c3c',
          boxShadow: 'none',
          height: '100px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100px',
            px: 2,
          }}
        >
          {/* ロゴ */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocalPizzaIcon sx={{ color: '#d35400', fontSize: '2rem' }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
            >
              Napoli Pizza Elite
            </Typography>
          </Box>

          {/* ハンバーガー */}
          <Hamburger
            className={drawerOpen ? 'open' : ''}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </Toolbar>
      </AppBar>

      {/* ドロワー（左） */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 250,
            bgcolor: '#121212',
            color: '#fff',
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ mt: 8 }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#book"
                sx={{
                  bgcolor: '#d35400',
                  color: '#fff',
                  mt: 1,
                  py: 1.5,
                  justifyContent: 'center',
                }}
              >
                <ListItemText
                  primary="Book Now"
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* ヒーローセクション */}
      <Box
        sx={{
          height: { xs: 400, md: 600 },
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            color: '#fff',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Master the Art of Neapolitan Pizza
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, maxWidth: 600, mx: 'auto', fontSize: '1.7rem' }}
          >
            Join our exclusive, once-a-year cooking class in Naples and learn
            the secrets of authentic homemade pizza from a renowned chef.
          </Typography>
          <Button
            variant="contained"
            href="#book"
            sx={{
              bgcolor: '#d35400',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              px: 5,
              py: 2,
              minWidth: 220,
              '&:hover': { bgcolor: '#e67e22' },
            }}
          >
            Book Your Spot
          </Button>
        </Box>
      </Box>
    </>
  );
}
