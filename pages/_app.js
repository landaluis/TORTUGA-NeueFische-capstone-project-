import GlobalStyle from "@/styles";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Head>
        <title>Capstone Project</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
