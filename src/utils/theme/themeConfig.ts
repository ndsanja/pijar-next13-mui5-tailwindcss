import { Roboto, IBM_Plex_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import { createTheme, useTheme } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
export const ibm_plex_sans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
});
export const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
});

let mode = 'light';
// Create a theme instance.
const theme = createTheme({
  palette:
    mode === 'light'
      ? {
          mode: 'light',
          background: {
            default: '#ffffff',
          },
        }
      : {
          mode: 'dark',
          background: {
            default: 'rgb(10, 25, 41)',
            paper: 'rgb(0, 30, 60)',
          },
        },
  typography: {
    fontFamily: ibm_plex_sans.style.fontFamily,
    h1: {
      fontFamily: plus_jakarta_sans.style.fontFamily,
    },
    h2: {
      fontFamily: plus_jakarta_sans.style.fontFamily,
    },
    h3: {
      fontFamily: plus_jakarta_sans.style.fontFamily,
    },
    h4: {
      fontFamily: plus_jakarta_sans.style.fontFamily,
    },
    h5: {
      fontFamily: plus_jakarta_sans.style.fontFamily,
    },
    h6: {
      fontFamily: plus_jakarta_sans.style.fontFamily,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
});

export default theme;
