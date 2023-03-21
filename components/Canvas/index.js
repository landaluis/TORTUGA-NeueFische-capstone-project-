import styled from "styled-components";
import { uid } from "uid";
import { pixelArray } from "../../lib/pixelArray";
import useLocalStorageState from "use-local-storage-state";

export default function Canvas({ birthday, pixels }) {
  return (
    <>
      <CanvasWrapper>
        <PixelContainer>
          {pixels?.map((pixel) => (
            <Pixel
              key={uid()}
              style={{
                background: `${pixel}`,
                width: "7.5px",
                height: "7.5px",
                gap: 0,
              }}
            />
          ))}
        </PixelContainer>
        <Title>Birthday:</Title>
        <Birthday>{birthday}</Birthday>
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
  /* height: 140px; */
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

const Birthday = styled.div`
  position: absolute;
  text-align: center;
  top: 127px;
  font-size: 14px;
`;

const Title = styled.h5`
  margin: 16px;
  position: absolute;
  text-align: center;
  top: 110px;
  margin: 0;
`;
