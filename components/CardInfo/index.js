import styled from "styled-components";
import ProgressBar from "../ProgressBar";
import DeleteButton from "../DeleteButton";

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
      {savings < price ? (
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
          <DeleteContainer>
            <DeleteButton onDeleteCard={onDeleteCard} id={id}></DeleteButton>
          </DeleteContainer>
        </>
      ) : null}
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

const DeleteContainer = styled.div`
  position: absolute;
  border-radius: 4px;
  z-index: 2;
  left: 122px;
  bottom: 5px;
`;
