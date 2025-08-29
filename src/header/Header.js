import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

import heroImage from '../asset/wood-iphone_X0R5VP6BSB.jpg';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Class Details', href: '#class-details' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* ヘッダー */}
      <AppBar
        position="static"
        sx={{
          bgcolor: '#f5f0eb',
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
          }}
        >
          {/* 左ロゴ */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocalPizzaIcon sx={{ color: '#d35400', fontSize: '2rem' }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: '#3c3c3c', fontSize: '1.5rem' }}
            >
              Napoli Pizza Elite
            </Typography>
          </Box>

          {/* PC用メニュー */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: '#3c3c3c',
                    textTransform: 'none',
                    fontWeight: '500',
                    fontSize: '1.1rem',
                    py: 1.5,
                    px: 2,
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                href="#book"
                sx={{
                  bgcolor: '#d35400',
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 3,
                  '&:hover': { bgcolor: '#e67e22' },
                }}
              >
                Book Now
              </Button>
            </Box>
          )}

          {/* モバイルメニュー */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ my: 'auto' }}
            >
              <MenuIcon sx={{ color: '#3c3c3c', fontSize: '2rem' }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* モバイルDrawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  sx={{
                    py: 1.5, // PCメニューの高さと揃える
                  }}
                >
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
                  py: 1.5, // PCのBook Nowボタンの高さに合わせる
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

      {/* メインセクション */}
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
