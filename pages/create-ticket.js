import Ticket from "../components/Ticket/index";
import FormTicket from "../components/TicketForm/index";

import styled from "styled-components";

export default function CreateTicket({ onAddTicket, tickets, onDeleteTicket }) {
  return (
    <>
      <FormTicket onAddTicket={onAddTicket} />
      <WrapperDiv>
        <TicketList>
          {tickets?.map((ticket) => (
            <Ticket
              key={ticket.id}
              id={ticket.id}
              ticketValue={ticket.ticketValue}
              onDeleteTicket={onDeleteTicket}
            />
          ))}
        </TicketList>
      </WrapperDiv>
    </>
  );
}

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TicketList = styled.div`
  margin-top: 280px;
  margin-bottom: 70px;
`;
