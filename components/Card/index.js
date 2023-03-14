import styled from "styled-components";
import CardPhoto from "../CardPhoto.js";
import Canvas from "../Canvas";

export default function Card({ what, id, onDeleteCard, day, frequency }) {
  console.log(day);
  console.log(frequency);
  return (
    <>
      <StyledCard>
        {" "}
        <CardPhoto what={what}></CardPhoto>
        <Canvas day={day} frequency={frequency}></Canvas>
        <StyledButton
          onClick={() => onDeleteCard(id)}
          type="button"
          title="delete card"
        >
          ✕
        </StyledButton>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  box-sizing: border-box;
  text-align: center;
  background: #eaeaea;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  width: 340px;
  height: 184px;
  margin: 16px auto;
  display: block;
  position: relative;
  line-height: 35px;
`;

const StyledButton = styled.button`
  position: absolute;
  border: none;
  z-index: 2;
  right: 10px;
  top: 10px;
`;
