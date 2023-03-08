import styled from "styled-components";

export default function Card({ wish, why, price, howMuch, frequency }) {
  return (
    <>
      <StyledCard>
        {" "}
        <p>Wish: {wish}</p>
        <div>Why: {why}</div>
        <div>Price: {price}</div>
        <div>How Much: {howMuch}</div>
        <div>Frequency: {frequency}</div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
