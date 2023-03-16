import styled from "styled-components";
import Image from "next/image";
import NES from "./../../lib/NESswitch.png";

export default function CardPhoto({ what }) {
  return (
    <>
      <StyledCardPhoto>
        {" "}
        <Image
          src={NES}
          alt={"My Wish photo"}
          width="100"
          height="auto"
          style={{
            position: "relative",
            top: "10px",
          }}
        />
        <StyledName>
          <strong>{what}</strong>
        </StyledName>
      </StyledCardPhoto>
    </>
  );
}

const StyledCardPhoto = styled.div`
  box-sizing: border-box;
  text-align: center;
  background: #eaeaea;
  border: 1px solid grey;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  width: 143px;
  height: 163px;
  margin: 0;
  display: block;
  position: relative;
  line-height: 35px;
  left: 10px;
  top: 10px;
`;

const StyledName = styled.div`
  position: relative;
  text-align: center;
  top: 4px;
`;
