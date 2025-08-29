import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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
import logo from '../asset/autumn-leaves_8HO7QT2MFH.jpg';

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 300, md: 600 },
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        color: '#fff',
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          {/* モバイルのハンバーガーは左 */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
          )}

          {/* PCのメニューは左寄せ */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                alignItems: 'center',
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': { color: '#8e8d8cff' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* ここでスペースを伸ばす */}
          <Box sx={{ flexGrow: 1 }} />

          {/* 右端にログイン・サインアップ */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ borderColor: '#fff', color: '#fff' }}
            >
              ログイン
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                bgcolor: '#aba690ff',
                color: '#000',
                '&:hover': { bgcolor: '#827c63ff' },
              }}
            >
              サインアップ
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ドロワーメニュー */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* 画像の中央に文字を配置 */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          textAlign: 'center',
          px: 2,
          fontSize: { xs: '1.8rem', md: '3rem' },
          fontWeight: 'bold',
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          pointerEvents: 'none', // 文字にマウスイベントが行かないように
        }}
      >
        Welcome to Our Site
      </Box>
    </Box>
  );
}
