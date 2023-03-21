import styled from "styled-components";

export default function ProgressBar({ price, savings, needed }) {
  const savedPercent = (savings / price) * 100;
  const neededPercent = (needed / price) * 100;

  return (
    <div>
      <StyledProgressBar>
        <StyledSavings style={{ width: `${savedPercent}%` }}></StyledSavings>
        <StyledNeeded style={{ width: `${neededPercent}%` }}></StyledNeeded>
      </StyledProgressBar>
    </div>
  );
}

const StyledProgressBar = styled.div`
  display: flex;
  width: 280px;
  height: 10px;
  border: 1px solid black;
  position: absolute;
  top: 105px;
  left: 15px;
`;
const StyledSavings = styled.div`
  background-color: green;
  height: 10px;
`;

const StyledNeeded = styled.div`
  background-color: red;
  height: 10px;
`;
