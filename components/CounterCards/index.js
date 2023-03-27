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
        <Box1>
          <Span>Actives</Span>
          <Span2> {activeCards}</Span2>
        </Box1>
        <Box2>
          <Span>Golden</Span>
          <Span2> {goldenCards}</Span2>
        </Box2>
        <Box3>
          <Span>Platinum</Span>
          <Span2> {platinumCards}</Span2>
        </Box3>
      </CountContainer>
    </>
  );
}

const CountContainer = styled.section`
  display: flex;
  flex-direction: row;
  top: 200px;
  left: 29px;
  position: absolute;
`;

const Box1 = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid grey;
  border-radius: 10px;
  margin-right: 20px;
`;

const Box2 = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid grey;
  border-radius: 10px;
  margin-right: 20px;
  background: linear-gradient(
    56deg,
    rgba(131, 101, 30, 1) 0%,
    rgba(186, 150, 38, 1) 12%,
    rgba(216, 183, 64, 1) 24%,
    rgba(231, 201, 78, 1) 37%,
    rgba(239, 211, 86, 1) 44%,
    rgba(246, 232, 94, 1) 54%,
    rgba(238, 182, 11, 1) 86%,
    rgba(219, 165, 19, 1) 91%,
    rgba(198, 147, 32, 1) 96%,
    rgba(184, 134, 41, 1) 100%
  );
`;

const Box3 = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid grey;
  border-radius: 10px;
  margin-right: 20px;
  background: linear-gradient(
    56deg,
    rgba(155, 155, 155, 1) 0%,
    rgba(130, 130, 130, 1) 19%,
    rgba(174, 174, 174, 1) 37%,
    rgba(233, 233, 233, 1) 53%,
    rgba(204, 204, 204, 1) 71%,
    rgba(157, 157, 157, 1) 83%,
    rgba(123, 123, 123, 1) 99%,
    rgba(155, 155, 155, 1) 100%
  );
`;

const Span = styled.span`
  display: block;
  font-size: 15px;
`;

const Span2 = styled.span`
  display: block;
  font-size: 40px;
`;
