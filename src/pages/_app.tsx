import "@/styles/globals.css";
import "@/utils/i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layouts from "@/layouts";
import { QueryClientProvider, QueryClient } from "react-query";
import { queryClientConfig } from "@/utils/query";
import CssBaseline from "@mui/material/CssBaseline";
const queryClient = new QueryClient(queryClientConfig);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <link rel="icon" href="/img/favicon.svg" />
        <title>순술</title>
      </Head>
      <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Layouts>
        
        <Component {...pageProps} />
      </Layouts>
      </QueryClientProvider>
    </>
  );
}
