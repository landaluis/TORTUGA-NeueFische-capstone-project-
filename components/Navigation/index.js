import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import PlusIcon from "../../public/PlusIcon.svg";
import TicketIcon from "../../public/TicketIcon.svg";
import CardsIcon from "../../public/CardsIcon.svg";
import ProfileIcon from "../../public/ProfileIcon.svg";
export default function Navigation() {
  return (
    <StyledList>
      <li>
        <Link href={"/"}>
          <Image
            src={CardsIcon}
            alt="Home Page"
            title="Home Page"
            width="35"
            height="35"
          />
        </Link>
      </li>
      <li>
        <Link href={"/create-card"}>
          <Image
            src={PlusIcon}
            alt="Add Card"
            title="Add Card"
            width="35"
            height="35"
          />
        </Link>
      </li>
      <li>
        <Link href={"/create-ticket"}>
          <Image
            src={TicketIcon}
            alt="Create Ticket"
            title="Create Ticket"
            width="35"
            height="35"
          />
        </Link>
      </li>
      <li>
        {" "}
        <Link href={"/profilePage"}>
          <Image
            src={ProfileIcon}
            alt="Profile Page"
            title="Profile Page"
            width="35"
            height="35"
          />
        </Link>
      </li>
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 58px;
  position: fixed;
  bottom: 0;
  font-size: 10px;
  padding: 3px;
  align-items: center;
  background-color: #faf1da;
  z-index: 21;

  & > li {
    list-style: none;
  }
`;
