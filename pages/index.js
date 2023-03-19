import styled from "styled-components";
import Card from "../components/Card/index";

export default function Home({
  cards,
  onDeleteCard,
  pixels,
  handleFillCanvas,
}) {
  /*   console.log(cards);
  console.log("hola");
  const hola = [];
  console.log(hola.length); */
  return (
    <main>
      {cards.length === 0 ? (
        <StyledWelcome>
          Welcome to Tortuga app! To get started, simply tap the button with the
          (+) sign in the navigation bar to create your very first card. You can
          come back here to see your cards.
        </StyledWelcome>
      ) : null}
      <WrapperDiv>
        <CardList>
          {cards?.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              what={card.what}
              why={card.why}
              price={card.price}
              howMuch={card.howMuch}
              onDeleteCard={onDeleteCard}
              birthday={card.birthday}
              divisor={card.divisor}
              image={card.image?.src}
              pixels={card.pixels}
              handleFillCanvas={handleFillCanvas}
            />
          ))}
        </CardList>
      </WrapperDiv>
    </main>
  );
}

const StyledWelcome = styled.p`
  justify-content: center;
  box-sizing: border-box;
  text-align: center;

  z-index: 2;
  position: relative;
  width: 340px;
  height: 184px;
  background: #d9d9d9;
  border: 1px solid #a6a6a6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  margin: 0 auto;
  margin-top: 80px;
`;

const CardList = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
