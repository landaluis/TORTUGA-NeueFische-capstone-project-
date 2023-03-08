import Layout from "../components/Layout/index";
import GlobalStyle from "../styles";
import Head from "next/head";
import Header from "../components/Header/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Head>
        <title>Capstone Project</title>
      </Head>

      <Layout />
      <Component {...pageProps} />
    </>
  );
}
