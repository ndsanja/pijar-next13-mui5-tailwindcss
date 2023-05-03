'use client';

import { Avatar, Box, Typography } from '@mui/material';

const Info = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        py: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}
      className="space-y-4"
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          mb: 0,
          pb: 0,
        }}
      >
        Bahasa Indonesia
      </Typography>
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
          Kelas:
        </Typography>
        <Box className="flex items-center space-x-1">
          <Avatar sx={{ height: '20px', width: '20px' }}>
            <Typography sx={{ fontSize: '12px' }}>X</Typography>
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
            XII-IPA 1
          </Typography>
        </Box>
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
          Lembaga:
        </Typography>
        <Box className="flex items-center space-x-1">
          <Avatar sx={{ height: '20px', width: '20px' }}>
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
          Fasilitator:
        </Typography>

        <Box className="flex items-center justify-center gap-3 flex-wrap">
          <Box className="flex flex-nowrap items-center space-x-1">
            <Avatar
              sx={{ height: '24px', width: '24px' }}
              src="data:image/jpeg;base64,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"
            >
              <Typography sx={{ fontSize: '12px' }}>N</Typography>
            </Avatar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mb: 0,
                pb: 0,
                fontSize: '12px',
                whiteSpace: 'nowrap',
              }}
            >
              Nadiem Makarim
            </Typography>
          </Box>
          <Box className="flex flex-nowrap items-center space-x-1">
            <Avatar
              sx={{ height: '24px', width: '24px' }}
              src="https://sekolah-gamma.vercel.app/pp.jpeg"
            >
              <Typography sx={{ fontSize: '12px' }}>N</Typography>
            </Avatar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mb: 0,
                pb: 0,
                fontSize: '12px',
                whiteSpace: 'nowrap',
              }}
            >
              Nila Dwi Sanja
            </Typography>
          </Box>
          <Box className="flex flex-nowrap items-center space-x-1">
            <Avatar
              sx={{ height: '24px', width: '24px' }}
              src="data:image/jpeg;base64,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"
            >
              <Typography sx={{ fontSize: '12px' }}>M</Typography>
            </Avatar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mb: 0,
                pb: 0,
                fontSize: '12px',
                whiteSpace: 'nowrap',
              }}
            >
              Maudy Ayunda
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Info;
