import { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

export default function Counter() {
  const [score, setScore] = useLocalStorageState("score", 0);

  return (
    <StyledDiv>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  z-index: 60;
  top: 0;
  position: absolute;
`;
