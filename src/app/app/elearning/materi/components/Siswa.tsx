'use client';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import type { User } from '../../../../../type';
type Props = {
  user: User;
};

const Siswa = ({ user }: Props) => {
  return (
    <List sx={{ width: '100%' }} className="!space-y-1">
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.username} secondary={user.fullName} />
      </ListItem>
    </List>
  );
};
export default Siswa;
