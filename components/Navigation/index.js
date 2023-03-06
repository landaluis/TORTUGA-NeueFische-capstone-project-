import Link from "next/link";
import styled from "styled-components";
import "material-symbols";

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
  background-color: lightgray;
  z-index: 21;
`;

export default function Navigation() {
  return <StyledList></StyledList>;
}
