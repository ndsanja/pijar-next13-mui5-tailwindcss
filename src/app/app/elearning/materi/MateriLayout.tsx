'use client';

import { Paper, Tab, Tabs } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import MateriPageClient from './MateriPage';
import MateriAppBar from './components/MateriAppBar';

type Props = {
  children?: React.ReactNode;
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

const MateriLayoutClient = (props: Props) => {
  const { children } = props;

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <>
      <MateriAppBar />
      <Tabs
        sx={{ backgroundColor: 'white', position: 'sticky', top: '50px' }}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="kategory elearning"
      >
        <Tab label="Info" {...a11yProps(0)} />
        <Tab label="Kelas" {...a11yProps(1)} />
        <Tab label="Materi" {...a11yProps(2)} />
        <Tab label="Siswa" {...a11yProps(3)} />
        <Tab label="Guru" {...a11yProps(4)} />
        <Tab label="Wali" {...a11yProps(5)} />
        <Tab label="Jadwal" {...a11yProps(6)} />
      </Tabs>
      <MateriPageClient value={value} />
    </>
  );
};
export default MateriLayoutClient;
