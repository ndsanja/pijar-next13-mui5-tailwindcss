'use client'

import { Chat, Favorite, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import TimelineCard from "./components/TimelineCard";

const AppPageClient = () => {
  return (
  <div className="relative flex w-full">
    <div className="hidden lg:block sticky top-[90px] min-h-screen max-h-screen overflow-y-auto w-[250px] border-r bg-blue-200"></div>
    <div className="flex-1 px-4">
      <div className="flex flex-col space-y-8 mt-4">
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
    <div className="hidden lg:block sticky top-[90px] min-h-screen max-h-screen overflow-y-auto w-[250px] border-l bg-blue-200"></div>
  </div>
  )
};
export default AppPageClient;
