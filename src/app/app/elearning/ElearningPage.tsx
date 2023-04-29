'use client';

import { Box, Typography } from '@mui/material';
import ContentDisplayView from './components/ContentDisplayView';
import OrganisasiCard from './components/OrganisasiCard';
import KelasCard from './components/KelasCard.';
import MateriCard from './components/MateriCard';

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
const ElearningPageClient = (props: Props) => {
  const { value } = props;

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
      <TabPanel value={value} index={0}>
        <ContentDisplayView>
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
          <OrganisasiCard />
        </ContentDisplayView>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentDisplayView>
          <KelasCard />
          <KelasCard />
          <KelasCard />
          <KelasCard />
          <KelasCard />
          <KelasCard />
          <KelasCard />
        </ContentDisplayView>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContentDisplayView>
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
          <MateriCard />
        </ContentDisplayView>
      </TabPanel>
    </Box>
  );
};
export default ElearningPageClient;
