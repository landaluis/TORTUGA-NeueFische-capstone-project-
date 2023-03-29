import GlobalStyle from "../styles";
import Head from "next/head";
import Header from "../components/Header/index";
import Layout from "../components/Layout/index";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import styled from "styled-components";
import Router from "next/router";
import { pixelArray } from "../public/pixelArray.js";
import { useState, useEffect } from "react";
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

  const [showPopUp, setShowPopUp] = useState(false);
  const [showPopUp2, setShowPopUp2] = useState(false);

  function handlePopUp(id, savings, price) {
    const cardIndex = cards.findIndex((card) => card.id === id);
    const card = cards[cardIndex];

    let showedGoldPopUp = card.showedGoldPopUp;
    let showedPlatinumPopUp = card.showedPlatinumPopUp;
    let isUploaded2 = card.isUploaded2;

    savings = parseInt(savings);
    savings = savings;
    price = parseInt(price);
    price = price;

    if (savings >= price && !showedGoldPopUp) {
      setShowPopUp(true);

      let timer;
      timer = setTimeout(() => {
        setShowPopUp(false);
      }, 2000);

      showedGoldPopUp = true;
      const updatedCards = [...cards];
      updatedCards[cardIndex] = {
        ...updatedCards[cardIndex],
        showedGoldPopUp: showedGoldPopUp,
      };

      setCards(updatedCards);

      return () => clearTimeout(timer);
    } else if (isUploaded2 && !showedPlatinumPopUp) {
      setShowPopUp2(true);

      let timer;
      timer = setTimeout(() => {
        setShowPopUp2(false);
      }, 4000);

      showedPlatinumPopUp = true;
      const updatedCards = [...cards];
      updatedCards[cardIndex] = {
        ...updatedCards[cardIndex],
        showedPlatinumPopUp: showedPlatinumPopUp,
      };

      setCards(updatedCards);
    }
  }

  const handleImageWishUpload = (event, id) => {
    const cardIndex = cards.findIndex((card) => card.id === id);

    if (event.event === "success") {
      const updatedCards = [...cards];
      updatedCards[cardIndex] = {
        ...updatedCards[cardIndex],

        imageWish: {
          src: event.info.secure_url,
          height: event.info.height,
          width: event.info.width,
        },
        image: {
          src: event.info.secure_url,
          height: event.info.height,
          width: event.info.width,
        },
        isUploaded2: true,
        /* showedPlatinumPopUp: true, */
      };
      setCards(updatedCards);
    } else {
      //Upload war nicht erfolgreich
    }
  };

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
    totalTickets
  ) {
    price = parseInt(price);
    price = price;
    savings = parseInt(savings);
    savings = savings;

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

    let newNextSav = new Date(nextSavPeriod);
    let newStartDate = new Date(startDate);

    s = s + 1;
    savings = totalTickets + howMuch * s;
    needed = price - savings;

    if (needed < 0) {
      const newTicket = {
        id: uid(),
        ticketValue: -needed,
      };
      setTickets([newTicket, ...tickets]);
    }

    let diffInDays = Math.floor(
      (newNextSav.getTime() - newStartDate.getTime()) / (24 * 60 * 60 * 1000)
    );
    let savPeriod = Math.floor(diffInDays / frequencyDays) - 1;

    newNextSav = newNextSav.toDateString();

    const updatedCards = [...cards];
    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      pixels: newPixels,
      nextSav: newNextSav,
      x: x,
      s: s,
      savings: savings,
      needed: needed,
      savPeriod: savPeriod,
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
    let frequencyName = "";

    if (newCard.frequency == 1) {
      daysToSave = NumSavings;
      frequencyDays = 1;
      frequencyName = "days";
    } else if (newCard.frequency == 2) {
      daysToSave = NumSavings * 7;
      frequencyDays = 7;
      frequencyName = "weeks";
    } else {
      daysToSave = NumSavings * 30.416;
      frequencyDays = 30;
      frequencyName = "months";
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
    let totalTickets = 0;
    let usedTickets = 0;

    const diffInMs = Math.abs(startDate - futureDate);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const savPeriod = Math.ceil(diffInDays / frequencyDays);

    let imageWish = {};
    let isUploaded2 = false;
    let showedGoldPopUp = false;
    let showedPlatinumPopUp = false;

    setCards([
      {
        id: uid(),
        birthday,
        frequencyDays,
        frequencyName,
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
        totalTickets,
        usedTickets,
        savPeriod,
        isUploaded2,
        showedGoldPopUp,
        showedPlatinumPopUp,

        image: { src: image.src, height: image.height, width: image.width },
        imageWish: {
          src: imageWish.src,
          height: imageWish.height,
          width: imageWish.width,
        },
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

  function handleTicketApply(
    ticketValue,
    savings,
    price,
    needed,
    howMuch,
    totalTickets,
    frequency,
    birthday,
    pixels,
    usedTickets
  ) {
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
    card.totalTickets = parseInt(card.totalTickets);
    card.howMuch = parseInt(card.howMuch);
    card.frequency = parseInt(card.frequency);
    card.usedTickets = parseInt(card.usedTickets);

    let startDate = card.startDate;
    let nextSav = card.nextSav;

    let newTotalTickets = card.totalTickets + ticket.ticketValue;
    const newNeeded = card.price - newSavings;

    let newUsedTickets = card.usedTickets + 1;

    totalTickets = newTotalTickets;
    savings = newSavings;
    needed = newNeeded;
    price = card.price;
    howMuch = card.howMuch;
    frequency = card.frequency;
    pixels = card.pixels;
    usedTickets = newUsedTickets;
    let savPeriod = card.savPeriod;

    const NumSavings = Math.ceil(needed / howMuch);
    let daysToSave = NumSavings;
    let frequencyDays = 0;

    if (frequency == 1) {
      daysToSave = NumSavings;
      frequencyDays = 1;
    } else if (frequency == 2) {
      daysToSave = NumSavings * 7;
      frequencyDays = 7;
    } else {
      daysToSave = NumSavings * 30.416;
      frequencyDays = 30;
    }

    let ticketDate = new Date();
    const newFutureDate = new Date(
      ticketDate.getTime() + daysToSave * 24 * 60 * 60 * 1000
    );
    const newBirthday = newFutureDate.toDateString();

    birthday = newBirthday;

    let newPixels = [];

    const ticketPixels = 207 / (price / ticket.ticketValue);

    for (let i = 0; i < pixels?.length + ticketPixels; i++) {
      if (i >= pixelArray.length) break;
      newPixels.push(pixelArray[i]);
    }

    if (savings < price) {
    } else {
      let newStartDate = new Date(startDate);
      let newNextSav = new Date(nextSav);
      const diffInMs = Math.abs(newStartDate.getTime() - newNextSav.getTime());

      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      savPeriod = Math.ceil(diffInDays / frequencyDays) - 1;
      birthday = nextSav;
    }

    const updatedTickets = [
      ...tickets.slice(0, ticketIndex),
      ...tickets.slice(ticketIndex + 1),
    ];

    const updatedCards = [...cards];
    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      savings: savings,
      needed: needed,
      totalTickets: totalTickets,
      birthday: birthday,
      pixels: newPixels,
      usedTickets: usedTickets,
      savPeriod: savPeriod,
    };

    setCards(updatedCards);
    setTickets(updatedTickets);

    if (needed < 0) {
      const newTicket = {
        id: uid(),
        ticketValue: -needed,
      };
      setTickets([newTicket, ...updatedTickets]);
    }

    /*    Router.push("/"); */
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
        handleImageWishUpload={handleImageWishUpload}
        handlePopUp={handlePopUp}
        showPopUp={showPopUp}
        showPopUp2={showPopUp2}
      />
    </>
  );
}

const Pixel = styled.div`
  width: 7.5px;
  height: 50px;
  z-index: 40;
`;
