import styled from "styled-components";

export default function CardInfo({ what, why, price, nextSav }) {
  return (
    <>
      <What>
        <strong>{what}</strong>{" "}
      </What>
      <Why>{why}</Why>
      <Price>Price: {price}€</Price>
      <NextSav>
        <Span>Next saving date:</Span>
        <Span> {nextSav}</Span>
      </NextSav>
      <Savings>Savings: </Savings>
      <Needed>Needed:</Needed>
    </>
  );
}

const What = styled.div`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Why = styled.div`
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Price = styled.p`
  position: absolute;
  display: inline;
  top: 45px;
  left: 20px;
`;

const NextSav = styled.p`
  position: absolute;
  display: inline;
  top: 50px;
  font-size: 12px;
  line-height: 16px;
  right: 55px;
`;

const Savings = styled.p`
  position: absolute;
  top: 110px;
  left: 20px;
`;

const Needed = styled.p`
  position: absolute;
  top: 110px;
  right: 100px;
`;

const Span = styled.span`
  display: block;
`;
