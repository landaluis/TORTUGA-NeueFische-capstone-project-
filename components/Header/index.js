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
  font-family: PressStart2P-Regular;
  font-size: 20px;
  color: #faf1da;
  /*  box-shadow: 10px 11px 13px 3px rgba(0, 0, 0, 0.89); */
  text-shadow: 5px 4px 0px #130805;
  /*   border: 1px solid grey; */
`;

const StyledImage = styled(Image)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-repeat: repeat-x;
`;
