import styled from "styled-components";
import CardPhoto from "../CardPhoto.js";
import Canvas from "../Canvas";
import TicketUse from "../TicketUse/index.js";
import { useState } from "react";
import CardInfo from "../CardInfo/index.js";

export default function Card({
  what,
  why,
  price,
  id,
  onDeleteCard,
  birthday,
  divisor,
  image,
  handleFillCanvas,
  pixels,
  nextSav,
  frequencyDays,
  numIterations,
  x,
  startDate,
  handleShowInfo,
  showInfo,
  savings,
  howMuch,
  s,
  needed,
  usedTickets,
}) {
  return (
    <>
      <StyledCard>
        {showInfo ? (
          <>
            <CardPhoto what={what} image={image}></CardPhoto>
            <Canvas
              birthday={birthday}
              id={id}
              divisor={divisor}
              handleFillCanvas={handleFillCanvas}
              pixels={pixels}
            />
          </>
        ) : (
          <CardInfo
            what={what}
            why={why}
            price={price}
            nextSav={nextSav}
            numnumIterations={numIterations}
            savings={savings}
            howMuch={howMuch}
            needed={needed}
            onDeleteCard={onDeleteCard}
            id={id}
          />
        )}
        {/*    <DeleteButton
          onClick={() => onDeleteCard(id)}
          type="button"
          title="delete card"
        >
          Delete Card
        </DeleteButton> */}
        <InfoButton onClick={() => handleShowInfo(id, showInfo)}>i</InfoButton>
        <TicketUse id={id}></TicketUse>

        <GenerateButton
          style={
            savings >= price
              ? { background: "red" }
              : { background: "greenyellow" }
          }
          onClick={() =>
            handleFillCanvas(
              divisor,
              pixels,
              id,
              frequencyDays,
              x,
              startDate,
              savings,
              s,
              howMuch,
              needed,
              price,
              usedTickets
            )
          }
        >
          €
        </GenerateButton>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  box-sizing: border-box;
  text-align: center;
  background: #eaeaea;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  width: 340px;
  height: 184px;
  margin: 16px auto;
  position: relative;
  display: block;
  line-height: 35px;
`;

const DeleteButton = styled.button`
  position: absolute;
  border: 1px solid gray;
  border-radius: 4px;
  z-index: 2;
  left: 70px;
  top: 150px;
`;

const GenerateButton = styled.button`
  margin: 16px;
  position: absolute;
  bottom: 0px;
  right: -10px;
  border-radius: 50%;
`;

const InfoButton = styled.button`
  position: absolute;
  top: 70px;
  right: 8px;
`;
