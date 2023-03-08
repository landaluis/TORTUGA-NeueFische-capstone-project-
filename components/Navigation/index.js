import styled from "styled-components";
import "material-symbols";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledList>
      <Link href={"/"}>
        <span className="material-symbols-outlined">view_agenda</span>
      </Link>
      <Link href={"/create-card"}>
        <span className="material-symbols-outlined">add_circle</span>
      </Link>
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  font-size: 10px;
  padding: 3px;
  align-items: center;
  background-color: #eaeaea;
  z-index: 21;
`;
