import styled from "styled-components";
import ProgressBar from "../ProgressBar";

export default function CardInfo({
  what,
  why,
  price,
  nextSav,
  savings,
  needed,
  id,
  onDeleteCard,
}) {
  return (
    <>
      <What>
        <strong>{what}</strong>{" "}
      </What>
      <Why>{why}</Why>
      <Price>
        <span style={{ fontSize: 15 }}>Price: </span>
        <strong>{price}€</strong>
      </Price>
      <NextSav>
        <Span>Next saving date:</Span>
        <Span> {nextSav}</Span>
      </NextSav>
      <Savings>
        <span style={{ fontSize: 15 }}>Savings: </span> {savings}€
      </Savings>
      <Needed>
        <span style={{ fontSize: 15 }}>Needed: </span>{" "}
        <span style={{ color: "red" }}>{needed}€</span>
      </Needed>
      <ProgressBar
        savings={savings}
        needed={needed}
        price={price}
      ></ProgressBar>
      <DeleteButton
        onClick={() => onDeleteCard(id)}
        type="button"
        title="delete card"
      >
        Delete Card
      </DeleteButton>
    </>
  );
}

const What = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Why = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Price = styled.p`
  position: absolute;
  display: inline;
  top: 40px;
  left: 20px;
`;

const NextSav = styled.p`
  position: absolute;
  display: inline;
  top: 45px;
  font-size: 12px;
  line-height: 16px;
  right: 55px;
`;

const Savings = styled.p`
  position: absolute;
  top: 92px;
  left: 19px;
`;

const Needed = styled.p`
  position: absolute;
  top: 92px;
  right: 50px;
`;

const Span = styled.span`
  display: block;
`;

const DeleteButton = styled.button`
  position: absolute;
  border: 1px solid gray;
  border-radius: 4px;
  z-index: 2;
  left: 120px;
  top: 150px;
`;
