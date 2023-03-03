import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  font-size: 10px;
  padding: 3px;
  background-color: lightgray;
  z-index: 21;
`;

export default function Navigation() {
  return (
    <StyledList>
      <Link href={"/create-card"}>+ Card</Link>
      <Link href={"/tickets"}>Tickets</Link>
      <Link href={"/"}>Cards</Link>
      <Link href={"/profile-page"}>Cards</Link>
    </StyledList>
  );
}
