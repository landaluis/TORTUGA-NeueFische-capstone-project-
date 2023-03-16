import GlobalStyle from "../styles";
import Head from "next/head";
import Header from "../components/Header/index";
import Layout from "../components/Layout/index";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import styled from "styled-components";
import Router from "next/router";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });
  const [tickets, setTickets] = useLocalStorageState("tickets", {
    defaultValue: [],
  });

  function handleAddCard(newCard) {
    const currentDate = new Date();
    const NumSavings = newCard.price / newCard.howMuch;

    let daysToSave = NumSavings;

    if (newCard.frequency == 1) {
      daysToSave = NumSavings;
    } else if (newCard.frequency == 2) {
      daysToSave = NumSavings * 7;
    } else {
      daysToSave = NumSavings * 30;
    }
    console.log(daysToSave);
    const futureDate = new Date(
      currentDate.getTime() + daysToSave * 24 * 60 * 60 * 1000
    );

    const birthday = futureDate.toDateString();

    const timeDiff = futureDate.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

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

  function handleTicketApply(ticketValue, id) {
    console.log(`Applying ticket: ${ticketValue}`);

    const ticketIndex = tickets.findIndex(
      (ticket) => ticket.ticketValue == ticketValue
    );

    const cardIndex = cards.findIndex((card) => card.id == id);
    const card = cards[cardIndex];

    const ticket = tickets[ticketIndex];

    const newPrice = card?.price - ticket.ticketValue;

    const updatedTickets = [
      ...tickets.slice(0, ticketIndex),
      ...tickets.slice(ticketIndex + 1),
    ];

    const updatedCard = { ...card, price: newPrice };
    const updatedCards = [
      ...cards.slice(0, cardIndex),
      updatedCard,
      ...cards.slice(cardIndex + 1),
    ];

    setCards(updatedCards);
    setTickets(updatedTickets);

    Router.push("/");
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
        handleTicketApply={handleTicketApply}
      />
    </>
  );
}

const Pixel = styled.div`
  width: 7.5px;
  height: 50px;
  z-index: 40;
`;
