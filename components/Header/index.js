import styled from "styled-components";
import Image from "next/image";
import TortugaBanner from "../../public/TortugaBanner.png";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <StyledHeader>T O R T U G A</StyledHeader>
        <StyledImage
          src={TortugaBanner}
          width={375}
          height={64}
          alt="Tortuga Banner"
          priority
        />
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  position: relative;
`;

const StyledHeader = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 59px;
  text-align: center;
  z-index: 10;
  margin: 0 auto;
  padding-top: 23px;
  font-family: "PressStart2P-Regular";
  font-size: 20px;
  color: #faf1da;
  text-shadow: 5px 4px 0px #130805;
`;

const StyledImage = styled(Image)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  /*   width: 100%;
  height: 65px; */
  background-repeat: repeat-x;
`;
