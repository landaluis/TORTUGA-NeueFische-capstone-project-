import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>T O R T U G A</StyledHeader>
    </>
  );
}

const StyledHeader = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 59px;
  text-align: center;
  border-bottom: 1px solid black;
  z-index: 10;
  margin: 0;
  padding: 10px;
  background-color: #eaeaea;
`;
