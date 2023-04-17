'use client';

import { Button, Typography } from '@mui/material';
import Link from 'next/link';
const IndexPage = () => {
  return (
    <>
      <Typography variant="h1">Sekolah Terbuka</Typography>
      <Link href="/app">Goto App</Link>
    </>
  );
};
export default IndexPage;
