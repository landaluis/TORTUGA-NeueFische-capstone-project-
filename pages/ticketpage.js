import styled from "styled-components";
import { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import TicketIcon from "../public/TicketIcon.svg";

export default function TicketPage({ tickets, handleTicketApply }) {
  const [showPopUp, setShowPopUp] = useState(false);

  function handlePopUp() {
    setShowPopUp(true);
    let timer;
    timer = setTimeout(() => {
      Router.push("/");
      setShowPopUp(false);
    }, 1500);
  }

  return (
    <>
      {showPopUp ? (
        <PopUp>
          <p>You have applied a new ticket</p>
        </PopUp>
      ) : null}
      {tickets.length === 0 ? (
        <StyledWelcome>
          <Image
            src={TicketIcon}
            alt="Ticket Icon"
            title="AddCard"
            width="50"
            height="50"
          />
          <p>
            Currently, there are no available tickets . To purchase new tickets,
            please visit the Tickets section located in the Navigation bar.
          </p>
        </StyledWelcome>
      ) : null}

      <TicketPageContainer>
        {tickets?.map((ticket) => (
          <StyledTicketContainer key={ticket?.id}>
            <StyledTicket>{ticket?.ticketValue}€</StyledTicket>

            <StyledButton
              onClick={() => {
                handleTicketApply(ticket.ticketValue);
                handlePopUp();
              }}
            >
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
  height: 220px;
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

const PopUp = styled.div`
  border: 1px solid grey;
  position: absolute;
  background: rgba(255, 253, 245);
  top: 200px;
  z-index: 80;
  border-radius: 10px;
  font-size: 18px;
  width: 300px;
  height: 130px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px 5px #000000;
  margin-right: 20px;
  line-height: 30px;
  & > p {
    text-align: center;
  }
`;
