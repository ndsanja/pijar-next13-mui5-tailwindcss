'use client';
import TimelineCard from './components/TimelineCard';
import AgendaCard from './components/AgendaCard';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { InboxOutlined, MailOutline } from '@mui/icons-material';

const AppPageClient = () => {
  return (
    <div className="relative flex w-full">
      <div className="hidden lg:flex flex-col min-w-[250px] max-w-[250px] overflow-x-scroll lg:min-h-[calc(100vh-48px)] lg:max-h-[calc(100vh-48px)] lg:!overflow-y-auto lg:sticky lg:top-[72px]">
        <List className="w-full">
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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
        <Divider />
        <List className="w-full">
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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
        <Divider />
        <List className="w-full">
          {['Inbox', 'Starred'].map((text, index) => (
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
        <div className="px-4 md:pr-8 py-2 md:pt-0 flex md:sticky md:top-[72px] md:flex-col md:order-2 w-full max-w-[100vw] md:w-[320px] gap-4 !overflow-x-auto  md:min-h-[calc(100vh-48px)] md:max-h-[calc(100vh-48px)] md:!overflow-y-auto">
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
        </div>
        <div className="px-4 mt-4 md:mt-2 md:flex-1 space-y-8">
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
