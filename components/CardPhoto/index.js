import styled from "styled-components";
import Image from "next/image";
import BlurryWish from "../../public/BlurryWish.png";

export default function CardPhoto({ what, image }) {
  return (
    <>
      <StyledCardPhoto>
        {" "}
        <Image
          src={image || BlurryWish}
          alt={"My Wish"}
          width="100"
          height="100"
          style={{
            position: "relative",
            top: "10px",
            borderRadius: "10px",
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
  background: rgba(242, 242, 242, 0.4);
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
