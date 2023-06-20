import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layouts from "@/layouts";

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
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}
