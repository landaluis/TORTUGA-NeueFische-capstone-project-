import GlobalStyle from "../styles";
import Head from "next/head";
import Header from "../components/Header/index";
import Layout from "../components/Layout/index";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import styled from "styled-components";
import Router from "next/router";
import { pixelArray } from "@/lib/pixelArray";
import { useState } from "react";
import next from "next";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });
  const [tickets, setTickets] = useLocalStorageState("tickets", {
    defaultValue: [],
  });
  const [image, setImage] = useLocalStorageState("image", {
    defaultValue: {},
  });
  const [isUploaded, setIsUploaded] = useState(false);

  function handleShowInfo(id, showInfo) {
    const cardIndex = cards.findIndex((card) => card.id === id);
    const updatedCards = [...cards];
    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      showInfo: !showInfo,
    };

    setCards(updatedCards);
  }

  function handleFillCanvas(
    divisor,
    pixels,
    id,
    frequencyDays,
    x,
    startDate,
    savings,
    s,
    howMuch,
    needed,
    price,
    usedTickets
  ) {
    if (savings >= price) {
      return;
    }
    let newPixels = [];
    const cardIndex = cards.findIndex((card) => card.id === id);

    for (let i = 0; i < pixels?.length + divisor; i++) {
      if (i >= pixelArray.length) break;
      newPixels.push(pixelArray[i]);
    }

    x = x + 1;
    let currentDate = new Date(startDate);

    let nextSavPeriod = new Date(
      currentDate.getTime() + frequencyDays * x * 24 * 60 * 60 * 1000
    );

    let newNextSav = nextSavPeriod.toDateString();

    s = s + 1;
    savings = usedTickets + howMuch * s;
    needed = price - savings;

    if (needed < 0) {
      const newTicket = {
        id: uid(),
        ticketValue: -needed,
      };
      setTickets([...tickets, newTicket]);
    }

    const updatedCards = [...cards];
    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      pixels: newPixels,
      nextSav: newNextSav,
      x: x,
      s: s,
      savings: savings,
      needed: needed,
    };

    setCards(updatedCards);

    return newPixels;
  }

  const handleImageUpload = (event) => {
    if (event.event === "success") {
      setImage({
        src: event.info.secure_url,
        height: event.info.height,
        width: event.info.width,
      });
      setIsUploaded(true);
    } else {
      setIsUploaded(false);
      //Upload war nicht erfolgreich
    }
  };

  function handleAddCard(newCard) {
    let startDate = new Date();
    const NumSavings = Math.ceil(newCard.price / newCard.howMuch);
    const numIterations = Math.ceil(newCard.price / newCard.howMuch);

    let daysToSave = NumSavings;
    let frequencyDays = 0;

    if (newCard.frequency == 1) {
      daysToSave = NumSavings;
      frequencyDays = 1;
    } else if (newCard.frequency == 2) {
      daysToSave = NumSavings * 7;
      frequencyDays = 7;
    } else {
      daysToSave = NumSavings * 30;
      frequencyDays = 30;
    }

    const futureDate = new Date(
      startDate.getTime() + daysToSave * 24 * 60 * 60 * 1000
    );

    const firstSavData = new Date(
      startDate.getTime() + frequencyDays * 24 * 60 * 60 * 1000
    );

    const nextSav = firstSavData.toDateString();
    const birthday = futureDate.toDateString();

    const divisor = 207 / (newCard.price / newCard.howMuch);
    const pixels = [];
    let x = 1;
    let showInfo = true;
    let savings = 0;
    let s = 0;
    let needed = newCard.price - savings;
    let usedTickets = 0;

    setCards([
      {
        id: uid(),
        birthday,
        frequencyDays,
        startDate,
        numIterations,
        divisor,
        pixels,
        nextSav,
        x,
        showInfo,
        savings,
        s,
        needed,
        usedTickets,
        image: { src: image.src, height: image.height, width: image.width },
        ...newCard,
      },
      ...cards,
    ]);
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

  function handleTicketApply(ticketValue, savings, price, needed, usedTickets) {
    if (savings >= price) {
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const cardIndex = cards.findIndex((card) => card.id === id);

    const card = { ...cards[cardIndex] };

    const ticketIndex = tickets.findIndex(
      (ticket) => ticket.ticketValue == ticketValue
    );

    const ticket = tickets[ticketIndex];

    ticket.ticketValue = parseInt(ticket.ticketValue);
    card.savings = parseInt(card.savings);

    const newSavings = card.savings + ticket.ticketValue;

    card.needed = parseInt(card.needed);
    card.price = parseInt(card.price);
    card.usedTickets = parseInt(card.usedTickets);

    let totalUsedTickets = card.usedTickets + ticket.ticketValue;
    const newNeeded = card.price - newSavings;

    usedTickets = totalUsedTickets;
    savings = newSavings;
    needed = newNeeded;
    price = card.price;

    const updatedTickets = [
      ...tickets.slice(0, ticketIndex),
      ...tickets.slice(ticketIndex + 1),
    ];

    const updatedCards = [...cards];
    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      savings: savings,
      needed: needed,
      usedTickets: usedTickets,
    };

    setCards(updatedCards);
    setTickets(updatedTickets);

    if (needed < 0) {
      const newTicket = {
        id: uid(),
        ticketValue: -needed,
      };
      setTickets([...updatedTickets, newTicket]);
    }

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
        handleImageUpload={handleImageUpload}
        handleFillCanvas={handleFillCanvas}
        handleShowInfo={handleShowInfo}
        isUploaded={isUploaded}
      />
    </>
  );
}

const Pixel = styled.div`
  width: 7.5px;
  height: 50px;
  z-index: 40;
`;
