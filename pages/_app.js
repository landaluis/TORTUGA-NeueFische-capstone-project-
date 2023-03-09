import GlobalStyle from "../styles";
import Head from "next/head";
import Header from "../components/Header/index";
import Layout from "../components/Layout/index";

import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });

  function handleAddCard(newCard) {
    setCards([...cards, newCard]);
  }

  return (
    <>
      <GlobalStyle />
      <Header />

      <Head>
        <title>Capstone Project</title>
      </Head>
      <Layout />

      <Component {...pageProps} onAddCard={handleAddCard} cards={cards} />
    </>
  );
}
