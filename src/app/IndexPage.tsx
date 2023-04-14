'use client';

import { Button, Typography } from '@mui/material';
const IndexPage = () => {
  return (
    <>
      <Typography variant="h1">Hello WOrld</Typography>
      <div className="flex min-w-sm items-center justify-center space-x-4">
        <Button variant="contained">Click Me</Button>
        <Button variant="outlined">Click Me</Button>
        <Button variant="text">Click Me</Button>
      </div>
    </>
  );
};
export default IndexPage;
