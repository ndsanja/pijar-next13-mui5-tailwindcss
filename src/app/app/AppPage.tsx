'use client';
import TimelineCard from './components/TimelineCard';
import AgendaCard from './components/AgendaCard';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import { InboxOutlined, MailOutline } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const AppPageClient = () => {
  return (
    <div className="relative flex w-full">
      <div className="hidden lg:flex flex-col min-w-[250px] max-w-[250px] overflow-x-scroll lg:min-h-[calc(100vh-48px)] lg:max-h-[calc(100vh-48px)] lg:!overflow-y-auto lg:sticky lg:top-[64px]">
        <List
          aria-labelledby="general"
          subheader={
            <ListSubheader
              sx={{ background: grey[200] }}
              component="div"
              id="general"
            >
              umum
            </ListSubheader>
          }
          className="w-full"
        >
          {['Lobi', 'Dashboard', 'Agenda', 'Eksplorasi'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List
          aria-labelledby="E-Learning"
          subheader={
            <ListSubheader
              sx={{ background: grey[200] }}
              component="div"
              id="E-Learning"
            >
              e-learning
            </ListSubheader>
          }
          className="w-full"
        >
          {['Organisasi', 'Kelas', 'Pelajaran', 'Jadwal', 'Tugas'].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <List
          aria-labelledby="studio"
          subheader={
            <ListSubheader
              sx={{ background: grey[200] }}
              component="div"
              id="studio"
            >
              studio
            </ListSubheader>
          }
          className="w-full"
        >
          {['Karya', 'Riset', 'Proyek', 'Koleksi'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List
          aria-labelledby="personal"
          subheader={
            <ListSubheader
              sx={{ background: grey[200] }}
              component="div"
              id="personal"
            >
              personal
            </ListSubheader>
          }
          className="w-full"
        >
          {[
            'Nila Dwi Sanja',
            'Pengaturan',
            'Informasi',
            'Kebijakan Privasi',
            'Pusat Bantuan',
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div className="mt-14 mb-10 px-6">
          <Typography variant="body2" color="text" className="!text-xs">
            © Pijar - Sekolah Terbuka 2023
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="!text-xs mt-2"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            dicta, eius accusamus rem in minus est maxime natus aut esse
            deleniti nostrum expedita ipsum, ducimus minima, fuga magnam
            voluptates! Nesciunt!
          </Typography>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <Box className="px-2 md:pr-3 py-2 flex md:sticky md:top-[64px] md:flex-col md:order-2 w-full max-w-[100vw] md:w-[320px] gap-2 !overflow-x-auto  md:min-h-[calc(100vh-48px)] md:max-h-[calc(100vh-48px)] md:!overflow-y-auto">
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
        </Box>
        <div className="md:mt-2 md:flex-1 space-y-2">
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
        </div>
      </div>
    </div>
  );
};
export default AppPageClient;
