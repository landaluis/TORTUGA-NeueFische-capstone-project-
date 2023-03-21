import styled from "styled-components";

export default function CardInfo({ what, why, price, nextSav }) {
  return (
    <>
      <What>
        <strong>{what}</strong>{" "}
      </What>
      <Why>{why}</Why>
      <Price>Price: {price}€</Price>
      <NextSav>Next saving date: {nextSav}</NextSav>
      <Savings>Savings: </Savings>
      <Needed>Needed:</Needed>
    </>
  );
}

const What = styled.div`
  position: relative;
  top: 10px;
`;

const Why = styled.div`
  position: relative;
  top: 0px;
`;

const Price = styled.section`
  position: relative;
  display: inline;
  top: -2px;
  right: 40px;
`;

const NextSav = styled.section`
  position: relative;
  display: inline;
  top: -2px;
  font-size: 12px;
`;

const Savings = styled.section`
  position: relative;

  top: 15px;
  right: 100px;
`;

const Needed = styled.section`
  position: relative;
  top: -19px;
  left: 30px;
`;
