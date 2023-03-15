import GlobalStyle from "../styles";
import Head from "next/head";
import Header from "../components/Header/index";
import Layout from "../components/Layout/index";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });
  const [tickets, setTickets] = useLocalStorageState("tickets", {
    defaultValue: [],
  });

  function handleAddCard(newCard) {
    const currentDate = new Date();
    const NumSavings = Math.ceil(newCard.price / newCard.howMuch);

    let daysToSave = NumSavings;

    if (newCard.frequency === 1) {
      daysToSave = NumSavings;
    } else if (newCard.frequency === 2) {
      daysToSave = NumSavings * 7;
    } else if (newCard.frequency === 3) {
      daysToSave = NumSavings * 30;
    }

    const futureDate = new Date(
      currentDate.getTime() + daysToSave * 24 * 60 * 60 * 1000
    );
    const birthday = futureDate.toDateString();
    const daysDiff = Math.ceil(
      (futureDate.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000)
    );
    setCards([{ id: uid(), birthday, daysDiff, ...newCard }, ...cards]);
  }

  function handleDeleteCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  function handleAddTicket(newTicket) {
    setTickets([{ id: uid(), ...newTicket }, ...tickets]);
  }

  function handleDeleteTicket(id) {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  }

  return (
    <>
      <GlobalStyle />
      <Header />

      <Head>
        <title>Capstone Project</title>
      </Head>
      <Layout />

      <Component
        {...pageProps}
        cards={cards}
        onAddCard={handleAddCard}
        onDeleteCard={handleDeleteCard}
        tickets={tickets}
        onAddTicket={handleAddTicket}
        onDeleteTicket={handleDeleteTicket}
      />
    </>
  );
}

const Pixel = styled.div`
  width: 7.5px;
  height: 50px;
  z-index: 40;
`;
