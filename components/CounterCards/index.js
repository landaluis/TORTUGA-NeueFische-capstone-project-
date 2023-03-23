import styled from "styled-components";

export default function CounterCards({ cards }) {
  return (
    <>
      <CountContainer>
        <Box>
          <Span>Actives</Span>
          <Span2> {cards.length}</Span2>
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
`;

const Span = styled.span`
  display: block;
  font-size: 15px;
`;

const Span2 = styled.span`
  display: block;
  font-size: 40px;
`;
