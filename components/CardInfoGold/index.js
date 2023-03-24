import styled from "styled-components";

export default function CardInfoGold({
  what,
  why,
  price,
  savings,
  id,
  onDeleteCard,
  birthday,
  totalTickets,
  usedTickets,
}) {
  return (
    <>
      {savings < price ? null : (
        <>
          <PhotoContainer></PhotoContainer>
          <What>
            <strong>{what}</strong>{" "}
          </What>
          <Why>{why}</Why>
          <Price>
            <strong>Price:</strong>
            {price}€
          </Price>
          <SavingPeriod>
            <strong>Saving period:</strong>{" "}
          </SavingPeriod>

          <Birthday>
            <strong>Birthday:</strong> {birthday}
          </Birthday>
          <Tickets>
            <strong>Tickets</strong>({usedTickets}): {totalTickets}€
          </Tickets>

          <DeleteButton
            onClick={() => onDeleteCard(id)}
            type="button"
            title="delete card"
          >
            Delete
          </DeleteButton>
        </>
      )}
    </>
  );
}

const What = styled.div`
  position: absolute;
  top: 5%;
  left: 35%;
`;

const Why = styled.div`
  position: absolute;
  top: 15%;
  left: 35%;
  font-size: 14px;
`;

const Birthday = styled.div`
  position: absolute;
  top: 35%;
  font-size: 15px;
  left: 35%;
`;

const Price = styled.div`
  position: absolute;
  display: inline;
  top: 48%;
  left: 35%;
  font-size: 15px;
`;

const SavingPeriod = styled.div`
  margin: 16px;
  position: absolute;
  top: 52%;
  left: 30%;
  font-size: 15px;
`;

const Tickets = styled.div`
  margin: 16px;
  position: absolute;
  text-align: center;
  top: 65%;
  left: 30%;
  font-size: 15px;
`;

const DeleteButton = styled.button`
  position: absolute;
  border: 1px solid gray;
  border-radius: 4px;
  z-index: 2;
  right: 5%;
  bottom: 5%;
  font-size: 15px;
`;

const PhotoContainer = styled.div`
  width: 90px;
  height: 100px;
  border: 1px solid grey;
  border-radius: 10px;
  left: 5%;
  position: absolute;
  background: grey;
  top: 10%;
`;
