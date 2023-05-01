'use client';

import { Paper, Tab, Tabs, useScrollTrigger } from '@mui/material';
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
  const trigger = useScrollTrigger();

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
        sx={{
          backgroundColor: 'white',
          position: 'sticky',
          top: trigger ? '0px' : '50px',
          zIndex: 100,
        }}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="kategory elearning"
      >
        <Tab label="Info" {...a11yProps(0)} />
        <Tab label="Silabus" {...a11yProps(1)} />
        <Tab label="Modul" {...a11yProps(2)} />
        <Tab label="Latihan Soal" {...a11yProps(3)} />
        <Tab label="Kelompok Belajar" {...a11yProps(4)} />
        <Tab label="Jadwal" {...a11yProps(5)} />
        <Tab label="Siswa" {...a11yProps(6)} />
        <Tab label="Guru" {...a11yProps(7)} />
        <Tab label="Wali" {...a11yProps(8)} />
        <Tab label="Pengaturan" {...a11yProps(9)} />
      </Tabs>
      <MateriPageClient value={value} />
    </>
  );
};
export default MateriLayoutClient;
