import styled from "styled-components";
import Link from "next/link";

export default function TicketUse() {
  return (
    <>
      <Link href="/ticketpage">
        <TicketButton></TicketButton>
      </Link>
    </>
  );
}

const TicketButton = styled.button`
  margin: 16px;
  position: absolute;
  width: 10px;
  height: 20px;
  top: 90px;
  left: 298px;
  border: 1px solid grey;

  background-color: #e08989;
  transform: rotate(20deg);
`;
