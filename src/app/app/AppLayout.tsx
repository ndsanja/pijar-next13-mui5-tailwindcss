'use client';

import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import {
  MenuOutlined,
  DesktopWindowsOutlined,
  HomeOutlined,
  SchoolOutlined,
  ControlPointOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

interface PropsSlide {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
 window?: () => Window;
  children: React.ReactNode;
}

function HideOnScroll(props: PropsSlide) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const AppLayoutClient = (props: Props) => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  return (
    <>
      {/* <HideOnScroll {...props}> */}
      <AppBar
        position="sticky"
        className="!bg-white"
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            className="!hidden md:!inline-flex"
          >
            <MenuOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pijar
          </Typography>
          <div className="flex items-center justify-center space-x-2">
            <IconButton
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
            <Avatar
              color="red"
              className="!w-[28px] !h-[28px]"
              src="https://picsum.photos/200"
            >
              N
            </Avatar>
          </div>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}

      <div className="w-full max-w-[1400px] mx-auto pb-[68px]">
        {props.children}
      </div>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="!fixed !bottom-0 !left-0 !right-0 md:!hidden"
      >
        <BottomNavigationAction
          onClick={() => router.push('/app')}
          label="Lobi"
          icon={<HomeOutlined />}
        />
        <BottomNavigationAction
          onClick={() => router.push('/app/elearning')}
          sx={{ whiteSpace: 'nowrap' }}
          label="E-Learning"
          icon={<SchoolOutlined />}
        />
        <BottomNavigationAction label="Post" icon={<ControlPointOutlined />} />
        <BottomNavigationAction
          label="Studio"
          icon={<DesktopWindowsOutlined />}
        />
        <BottomNavigationAction
          label="Info"
          icon={<NotificationsNoneOutlined />}
        />
      </BottomNavigation>
    </>
  );
};
export default AppLayoutClient;
