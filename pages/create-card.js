import CardForm from "../components/CardForm/index";
import Card from "../components/Card/index";
import { useState } from "react";
import styled from "styled-components";

export default function CreateCard() {
  const [cards, setCards] = useState([]);

  function handleAddCard(newCard) {
    setCards([...cards, newCard]);
  }
  return (
    <>
      <WrapperDiv>
        <CardForm onAddCard={handleAddCard} />
        <CardList>
          {cards.map((card, index) => (
            <Card
              key={index}
              id={card.index}
              wish={card.wish}
              why={card.why}
              price={card.price}
              howMuch={card.howMuch}
              frequency={card.frequency}
            />
          ))}
        </CardList>
      </WrapperDiv>
    </>
  );
}

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardList = styled.div`
  margin-top: 160px;
  margin-bottom: 170px;
`;
