import styled from "styled-components";

export default function Ticket({ ticketValue, id, onDeleteTicket }) {
  return (
    <StyledTicket>
      <StyledValue>{ticketValue}€</StyledValue>

      <StyledButton
        onClick={() => onDeleteTicket(id)}
        type="button"
        title="delete ticket"
      >
        ✕
      </StyledButton>
    </StyledTicket>
  );
}

const StyledTicket = styled.div`
  box-sizing: border-box;
  text-align: center;
  background: #a8d9d4;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  width: 340px;
  height: 100px;
  margin: 16px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledValue = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
`;

const StyledButton = styled.button`
  position: absolute;
  border: none;
  right: 8px;
  top: 16px;
  background: #a8d9d4;
`;
