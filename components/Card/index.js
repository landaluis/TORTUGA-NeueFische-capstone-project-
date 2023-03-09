import styled from "styled-components";

export default function Card({
  what,
  why,
  price,
  howMuch,
  frequency,
  id,
  onDeleteCard,
}) {
  return (
    <>
      <StyledCard>
        {" "}
        <div>What: {what}</div>
        <div>Why: {why}</div>
        <div>Price: {price}</div>
        <div>How Much: {howMuch}</div>
        <div>Frequency: {frequency}</div>
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
  height: 250px;
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
