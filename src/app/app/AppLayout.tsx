'use client';

import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  MenuOutlined,
  CalendarToday,
  DesktopWindowsOutlined,
  Home,
  Person,
  Search,
} from '@mui/icons-material';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const AppLayoutClient = ({ children }: Props) => {
  const [value, setValue] = useState(0);
  return (
    <>
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
            sx={{ mr: 2 }}
          >
            <MenuOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pijar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <div className="w-full">{children}</div>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="!fixed !bottom-0 !left-0 !right-0 sm:!hidden"
      >
        <BottomNavigationAction label="Lobi" icon={<Home />} />
        <BottomNavigationAction label="Explore" icon={<Search />} />
        <BottomNavigationAction
          label="Studio"
          icon={<DesktopWindowsOutlined />}
        />
        <BottomNavigationAction label="Agenda" icon={<CalendarToday />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
    </>
  );
};
export default AppLayoutClient;
