import styled from "styled-components";
import CardPhoto from "../CardPhoto.js";
import Canvas from "../Canvas";
import TicketUse from "../TicketUse/index.js";

export default function Card({
  what,
  id,
  onDeleteCard,
  birthday,
  divisor,
  image,
  handleFillCanvas,
  pixels,
}) {
  return (
    <>
      <StyledCard>
        {" "}
        <CardPhoto what={what} image={image}></CardPhoto>
        <Canvas
          birthday={birthday}
          id={id}
          divisor={divisor}
          handleFillCanvas={handleFillCanvas}
          pixels={pixels}
        />
        <StyledButton
          onClick={() => onDeleteCard(id)}
          type="button"
          title="delete card"
        >
          ✕
        </StyledButton>
        <TicketUse></TicketUse>
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
  display: block;
  position: relative;
  line-height: 35px;
`;

const StyledButton = styled.button`
  position: absolute;
  border: none;
  z-index: 2;
  right: 10px;
  top: 10px;
`;
