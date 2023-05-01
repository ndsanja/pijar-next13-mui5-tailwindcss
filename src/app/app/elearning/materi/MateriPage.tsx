'use client';

import { Box, Typography } from '@mui/material';
import Info from './components/Info';
import TabDisplayView from './components/TabDisplayView';
import Modul from './components/Modul';
import Silabus from './components/Silabus';
import Siswa from './components/Siswa';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

type Props = {
  value?: any;
};
const MateriPageClient = (props: Props) => {
  const { value } = props;

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
      <TabPanel value={value} index={0}>
        <TabDisplayView>
          <Info />
        </TabDisplayView>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabDisplayView>
          <Silabus />
        </TabDisplayView>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabDisplayView>
          <Modul />
        </TabDisplayView>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabDisplayView>
          <Typography>organisasi 4</Typography>
        </TabDisplayView>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TabDisplayView>
          <Typography>organisasi 5</Typography>
        </TabDisplayView>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TabDisplayView>
          <Typography>organisasi 6</Typography>
        </TabDisplayView>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <TabDisplayView>
          <Siswa />
        </TabDisplayView>
      </TabPanel>
    </Box>
  );
};
export default MateriPageClient;
