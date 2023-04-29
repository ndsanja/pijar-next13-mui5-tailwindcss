'use client';

import {
  ChatBubbleOutlineOutlined,
  MenuOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
  ArrowBack,
} from '@mui/icons-material';
import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const OrganisasiAppBar = () => {
  const router = useRouter();
  return (
    <AppBar
      position="sticky"
      className="!bg-white"
      color="transparent"
      elevation={0}
    >
      <Toolbar>
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Universitas Gadjah Mada
        </Typography>
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
export default OrganisasiAppBar;
