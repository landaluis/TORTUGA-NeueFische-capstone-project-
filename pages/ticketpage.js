import styled from "styled-components";

export default function TicketPage({ tickets, handleTicketApply }) {
  return (
    <>
      {tickets.length === 0 ? (
        <StyledWelcome>
          <p>
            Currently, there are no available tickets. To purchase new tickets,
            please visit the Tickets section located in the Navigation bar.
          </p>
        </StyledWelcome>
      ) : null}

      <TicketPageContainer>
        {tickets?.map((ticket) => (
          <StyledTicketContainer key={ticket?.id}>
            <StyledTicket>{ticket?.ticketValue}€</StyledTicket>

            <StyledButton onClick={() => handleTicketApply(ticket.ticketValue)}>
              Apply Ticket
            </StyledButton>
          </StyledTicketContainer>
        ))}
      </TicketPageContainer>
    </>
  );
}

const TicketPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
`;

const StyledTicketContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledTicket = styled.div`
  box-sizing: border-box;
  text-align: center;
  background: #a8d9d4;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  width: 100px;
  height: 50px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledButton = styled.button`
  background: #eaeaea;

  border: 1px solid grey;
  border-radius: 7px;
  padding: 6px 6px;
  font-size: 14px;
  cursor: pointer;
`;

const StyledWelcome = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  z-index: 2;
  position: relative;
  width: 340px;
  height: 240px;
  background: #faf1da;
  border: 1px solid #a6a6a6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  margin: 0 auto;
  margin-top: 130px;

  & > p {
    margin: 20px;
    text-align: justify;
  }
`;
