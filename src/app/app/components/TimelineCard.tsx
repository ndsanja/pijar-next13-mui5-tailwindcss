'use client';

import { Chat, Favorite, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

const TimelineCard = () => {
  return (
    <Card elevation={0} variant="outlined" sx={{ borderRadius: 0, border: 0 }}>
      <CardHeader
        avatar={
          <Avatar
            src="https://picsum.photos/id/237/200/200"
            className="bg-red-500"
            aria-label="avatar"
          >
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="setting">
            <MoreVert />
          </IconButton>
        }
        title="Nila Dwi Sanja"
        subheader="1 jam yang lalu"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://picsum.photos/300/200"
        alt="Paela Dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          THis is contane for aoa apklsjdkj djdkjdakj yan akan mengakibatkan
          semaunya inrtikj fa apa ameneknlrn alapa ajdkfj aijg em ne men ...
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="flex justify-between">
        <div>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </div>
        <div>
          <IconButton aria-label="massage">
            <Chat />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default TimelineCard;
