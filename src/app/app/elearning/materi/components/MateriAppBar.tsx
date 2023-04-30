'use client';

import {
  ChatBubbleOutlineOutlined,
  MenuOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
  ArrowBack,
  ArrowDropDown,
  ArrowDropUp,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const MateriAppBar = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <AppBar
      position="sticky"
      className="!bg-white"
      color="transparent"
      elevation={0}
    >
      <Toolbar sx={{ mb: isExpanded ? '100px' : 'auto' }}>
        <IconButton
          onClick={() => router.back()}
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
          <ArrowBack />
        </IconButton>
        <Box
          className="flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{ ml: 1, flexGrow: 1, position: 'relative' }}
        >
          <div className="flex flex-col">
            <Typography variant="h6" component="div" sx={{ mb: 0, pb: 0 }}>
              Bahasa Indonesia
            </Typography>
            <div className="flex items-center space-x-2 absolute top-[28px] w-full">
              <Typography
                variant="body1"
                component="div"
                sx={{ fontSize: '10px' }}
              >
                XII - IPA 1
              </Typography>
              <div className="w-1 h-1 bg-black rounded-full" />
              <Typography
                variant="body1"
                component="div"
                sx={{ fontSize: '10px' }}
              >
                SMA Harapan Bangsa
              </Typography>
            </div>
          </div>
          {isExpanded ? <ArrowDropUp /> : <ArrowDropDown />}
        </Box>
        <div className="flex items-center justify-center space-x-2">
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
            aria-label="menu"
          >
            <MenuOutlined />
          </IconButton>
          {/* <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="chat"
          >
            <SearchOutlined />
          </IconButton>
          <IconButton
            className="!mr-2 md:!mr-0"
            size="small"
            edge="start"
            color="inherit"
            aria-label="chat"
          >
            <ChatBubbleOutlineOutlined />
          </IconButton>
          <IconButton
            className="!hidden md:!inline-flex"
            size="small"
            edge="start"
            color="inherit"
            aria-label="chat"
          >
            <NotificationsNoneOutlined />
          </IconButton>
          <Avatar color="red" className="!w-[28px] !h-[28px]">
            <Typography>N</Typography>
          </Avatar> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default MateriAppBar;
