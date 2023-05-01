'use client';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const Modul = () => {
  return (
    <List sx={{ width: '100%' }} className="!space-y-1">
      <ListItem sx={{ backgroundColor: 'white' }}>
        <ListItemAvatar>
          <Avatar>
            <Typography variant="h6" sx={{ fontSize: '18px' }}>
              1
            </Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Modul Ajar 1"
          secondary="Terakhir dilihat - 23 February 2023"
        />
      </ListItem>
      <ListItem sx={{ backgroundColor: 'white' }}>
        <ListItemAvatar>
          <Avatar>
            <Typography variant="h6" sx={{ fontSize: '18px' }}>
              2
            </Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Modul Ajar 2"
          secondary="Terakhir dilihat - 9 Mei 2023"
        />
      </ListItem>
      <ListItem sx={{ backgroundColor: 'white' }}>
        <ListItemAvatar>
          <Avatar>
            <Typography variant="h6" sx={{ fontSize: '18px' }}>
              3
            </Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Modul Ajar 3" secondary="" />
      </ListItem>
      <ListItem sx={{ backgroundColor: 'white' }}>
        <ListItemAvatar>
          <Avatar>
            <Typography variant="h6" sx={{ fontSize: '18px' }}>
              4
            </Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Modul Ajar 4" secondary="" />
      </ListItem>
      <ListItem sx={{ backgroundColor: 'white' }}>
        <ListItemAvatar>
          <Avatar>
            <Typography variant="h6" sx={{ fontSize: '18px' }}>
              5
            </Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Modul Ajar 5" secondary="" />
      </ListItem>
      <ListItem sx={{ backgroundColor: 'white' }}>
        <ListItemAvatar>
          <Avatar>
            <Typography variant="h6" sx={{ fontSize: '18px' }}>
              6
            </Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Modul Ajar 6" secondary="" />
      </ListItem>
      <ListItem sx={{ backgroundColor: 'white' }}>
        <ListItemAvatar>
          <Avatar>
            <Typography variant="h6" sx={{ fontSize: '18px' }}>
              7
            </Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Modul Ajar 7" secondary="" />
      </ListItem>
    </List>
  );
};
export default Modul;
