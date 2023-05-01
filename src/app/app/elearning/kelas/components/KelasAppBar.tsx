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
  Slide,
  useScrollTrigger,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const KelasAppBar = () => {
  const router = useRouter();
  const trigger = useScrollTrigger();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="sticky"
        className="!bg-white"
        color="transparent"
        elevation={0}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="flex items-center w-full">
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
              sx={{
                ml: 1,
                flexGrow: 1,
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: isExpanded ? 'none' : 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    mb: 0,
                    pb: 0,
                  }}
                >
                  XII-IPA 1
                </Typography>
                <div className="flex items-center absolute top-[28px] w-full">
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ fontSize: '10px' }}
                  >
                    SMA Harapan Bangsa
                  </Typography>
                </div>
              </Box>
              <ArrowDropDown
                sx={{ display: isExpanded ? 'none' : 'inline-block' }}
              />
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
            </div>
          </div>

          <Box
            sx={{
              display: !isExpanded ? 'none' : 'flex',
              py: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className="space-y-4"
          >
            <Box className="flex flex-col items-center justify-center">
              <Avatar sx={{ height: '50px', width: '50px' }}>
                <Typography>X</Typography>
              </Avatar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mb: 0,
                  pb: 0,
                }}
              >
                XII-IPA 1
              </Typography>
            </Box>

            <Box className="flex flex-col items-center justify-center">
              <Typography
                variant="body2"
                component="div"
                sx={{
                  mb: 0,
                  pb: 0,
                  fontSize: '10px',
                }}
              >
                Organisasi:
              </Typography>
              <Box className="flex items-center space-x-1">
                <Avatar sx={{ height: '24px', width: '24px' }}>
                  <Typography sx={{ fontSize: '12px' }}>S</Typography>
                </Avatar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    mb: 0,
                    pb: 0,
                    fontSize: '12px',
                  }}
                >
                  SMA Harapan Bangsa
                </Typography>
              </Box>
            </Box>

            <IconButton
              onClick={() => setIsExpanded(!isExpanded)}
              size="small"
              sx={{ mt: 2 }}
            >
              <ArrowDropUp
                sx={{
                  display: !isExpanded ? 'none' : 'inline-block',
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};
export default KelasAppBar;
