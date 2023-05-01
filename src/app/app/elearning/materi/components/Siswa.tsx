'use client';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

const Siswa = () => {
  return (
    <List sx={{ width: '100%' }} className="!space-y-1">
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Iqbal Ramadhan" secondary="" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cristiano Ronaldo Jr" secondary="" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Raffathar Ahmad" secondary="" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Kiano Tiger Wong" secondary="" />
      </ListItem>
    </List>
  );
};
export default Siswa;
