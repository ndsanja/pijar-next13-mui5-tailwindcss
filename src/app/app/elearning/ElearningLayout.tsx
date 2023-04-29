'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Paper, Tab, Tabs } from '@mui/material';
import { useTheme } from '@emotion/react';
import ElearningPageClient from './ElearningPage';

type Props = {
  children: React.ReactNode;
  dir?: string;
  index?: number;
  value?: number;
};

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ElearningLayoutClient = (props: Props) => {
  const { children } = props;

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <>
      <Tabs
        sx={{ backgroundColor: 'white', position: 'sticky', top: '50px' }}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="kategory elearning"
      >
        <Tab label="Organisasi" {...a11yProps(0)} />
        <Tab label="Kelas" {...a11yProps(1)} />
        <Tab label="Materi" {...a11yProps(2)} />
      </Tabs>
      <ElearningPageClient value={value} />
    </>
  );
};
export default ElearningLayoutClient;
