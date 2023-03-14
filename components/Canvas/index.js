import styled from "styled-components";
import { uid } from "uid";
import { useState } from "react";
import { pixelArray } from "../../lib/pixelArray";

let pixels = [];
export default function Canvas({ day, price, howMuch, frequency, birthday }) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(16);

  function handlefillCanvas() {
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= pixelArray.length) break;

      pixels.push(
        <Pixel
          key={uid()}
          style={{
            background: `${pixelArray[i]}`,
            width: "7.5px",
            height: "7.5px",
            gap: 0,
          }}
        />
      );
    }
    setStartIndex(startIndex + 16);
    setEndIndex(endIndex + 16);

    return pixels;
  }

  return (
    <>
      <CanvasWrapper>
        <PixelContainer>{pixels}</PixelContainer>
        <Title>Birthday:</Title>
        <Birthday>{birthday}</Birthday>
        <GenerateButton onClick={handlefillCanvas}>€</GenerateButton>
      </CanvasWrapper>
    </>
  );
}

const CanvasWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  width: 143px;
  height: 163px;
  margin: 0;
  position: absolute;
  right: 35px;
  top: 10px;
  border-radius: 17px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PixelContainer = styled.div`
  position: relative;
  top: 10px;
  transform: rotate(180deg);
  height: 150px;
  max-width: 150px;
  display: grid;
  aspect-ratio: 1 / 1;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(15, 1fr);
  background-color: #999;
  border-radius: 4px;
  overflow: hidden;
  clip-path: ellipse(40% 46% at 52% 50%);
`;

const Pixel = styled.div`
  width: 7.5px;
  height: 50px;
  z-index: 40;
`;

const GenerateButton = styled.button`
  margin: 16px;
  position: relative;
  top: 15px;
  left: 90px;
  border-radius: 50%;
  background-color: greenyellow;
`;

const Birthday = styled.div`
  position: absolute;
  text-align: center;
  top: 127px;
  font-size: 14px;
`;

const Title = styled.h5`
  margin: 16px;
  position: absolute;
  top: 95px;
  left: 25px;
`;
