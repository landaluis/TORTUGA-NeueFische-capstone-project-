import styled from "styled-components";

export default function CalculateFutureDate() {
  const price = 100;
  const howMuch = 10;
  const frequency = 2;
  const currentDate = new Date();
  const NumSavings = Math.ceil(price / howMuch);

  let daysToSave = NumSavings;

  if (frequency === 1) {
    daysToSave = NumSavings;
  } else if (frequency === 2) {
    daysToSave = NumSavings * 7;
  } else if (frequency === 3) {
    daysToSave = NumSavings * 30;
  }

  const futureDate = new Date(
    currentDate.getTime() + daysToSave * 24 * 60 * 60 * 1000
  );
  const Birthday = futureDate.toDateString();

  return (
    <>
      <StyledDiv>{Birthday}</StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  position: absolute;
  size: 200px;
  z-index: 200;
`;
