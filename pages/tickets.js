import Ticket from "../components/Ticket/index";
import FormTicket from "../components/TicketForm/index";
import { useState } from "react";
import styled from "styled-components";

export default function CreateTicket({ onAddTicket, tickets }) {
  return (
    <>
      <WrapperDiv>
        <FormTicket onAddTicket={onAddTicket} />
        <TicketList>
          {tickets?.map((ticket, index) => (
            <Ticket
              key={index}
              id={ticket.index}
              ticketValue={ticket.ticketValue}
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
  margin-top: 260px;
  margin-bottom: 70px;
`;
