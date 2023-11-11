import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/layout';
import { ThemeProvider, useTheme } from '@mui/material';
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        primary: {
          main: "#2EB895",
        },
        secondary: {
          main: "#044D72",
        },
        error: {
          main: "#E04B51",
        },
        success: {
          main: "#079453",
        },
        warning: {
          main: "#F09A1A",
        },
        background: {
          default: "#F8F8F8",
        },
        text: {
          primary: "#0E1210",
          secondary: "#6A6A6A",
        },
      },
      typography: {
        fontFamily: "'Archivo', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: { fontWeight: "bold", fontSize: 64 },
        h2: { fontWeight: "bold", fontSize: 48 },
        h3: { fontWeight: "bold", fontSize: 40 },
        h4: { fontWeight: "bold", fontSize: 32 },
        h5: { fontWeight: "bold", fontSize: 24 },
        h6: { fontWeight: "bold", fontSize: 20 },
        subtitle1: {},
        subtitle2: {},
        body1: {},
        body2: { fontSize: 14 },
        button: {
          textTransform: "none",
        },
        caption: { color: "rgba(177, 180, 186, 1)", fontWeight: 500, fontSize: "16px", textTransform: "uppercase" },
        overline: {},
      },

      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              wordBreak: "break-word"
            }
          }
        },
        MuiTooltip: {
          styleOverrides: {
            tooltip: ({ ownerState, theme }) => ({
              backgroundColor: theme.palette.common.white,
              boxShadow: "0px 16px 24px rgba(10, 31, 68, 0.16)",
              color: theme.palette.text.secondary,
              padding: "8px 12px",
            }),
            arrow: ({ ownerState, theme }) => ({
              "&:before": {
                backgroundColor: theme.palette.common.white,
              },
            }),
          },
        },
        MuiPaper: {
          styleOverrides: {
            elevation1: {
              boxShadow: "0px 16px 24px rgba(10, 31, 68, 0.16)",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: ({ ownerState, theme }) => ({
              boxShadow: "none",
              fontSize: "16px",
              "&:hover": { boxShadow: "none" },
              ...(ownerState.variant === "contained" && { color: theme.palette.common.white }),
            }),
          },
        },
        MuiTableHead: {
          styleOverrides: {
            root: ({ ownerState, theme }) => ({
              "th": {
                fontWeight: "600"
              }
            }),
          },
        }
      },
    }),
  );;

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
