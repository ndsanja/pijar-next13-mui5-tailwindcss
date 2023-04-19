'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/utils/theme/createEmotionCache';
import theme from '@/utils/theme/themeConfig';
import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors';

const clientSideEmotionCache = createEmotionCache();

const MuiContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper sx={{ background: grey[200] }}>{children}</Paper>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MuiContext;
