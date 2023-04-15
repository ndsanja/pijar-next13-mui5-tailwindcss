"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
const IndexPage = () => {
  return (
    <>
      <Typography variant="h1">Sekolah Terbuka</Typography>
      <div className="flex w-full items-center justify-center space-x-2">
        <Button variant="contained">Click Me</Button>
        <Button variant="outlined">Click Me</Button>
        <Button variant="text">Click Me</Button>
      </div>

      <Link href="/app">Goto App</Link>
    </>
  );
};
export default IndexPage;
