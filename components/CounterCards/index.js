import styled from "styled-components";

export default function CounterCards({ cards }) {
  console.log(cards);
  const activeCardsFilter = cards.filter((card) => card.savings < card.price);
  const activeCards = activeCardsFilter.length;

  const goldenCardsFilter = cards.filter(
    (card) => card.savings >= card.price && card.isUploaded2 === false
  );
  const goldenCards = goldenCardsFilter.length;

  const platinumCardsFilter = cards.filter((card) => card.isUploaded2);
  const platinumCards = platinumCardsFilter.length;

  return (
    <>
      <CountContainer>
        <Box>
          <Span>Actives</Span>
          <Span2> {activeCards}</Span2>
        </Box>
        <Box>
          <Span>Golden</Span>
          <Span2> {goldenCards}</Span2>
        </Box>
        <Box>
          <Span>Platinum</Span>
          <Span2> {platinumCards}</Span2>
        </Box>
      </CountContainer>
    </>
  );
}

const CountContainer = styled.section`
  display: flex;
  flex-direction: row;
  top: 200px;
  left: 20px;
  position: absolute;
`;

const Box = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 20px;
`;

const Span = styled.span`
  display: block;
  font-size: 15px;
`;

const Span2 = styled.span`
  display: block;
  font-size: 40px;
`;
