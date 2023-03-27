import { useState } from "react";
import styled from "styled-components";

export default function DeleteButton({ onDeleteCard, id }) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <DeleteWrap>
        {!confirmed && (
          <Delete onClick={() => setConfirmed(true)}>Delete</Delete>
        )}
        {confirmed && (
          <QuestionWrapper>
            <Question>Are you sure?</Question>
            <YesButton onClick={() => onDeleteCard(id)}>Yes</YesButton>
            <NoButton onClick={() => setConfirmed(false)}>No</NoButton>
          </QuestionWrapper>
        )}
      </DeleteWrap>
    </>
  );
}
const DeleteWrap = styled.div`
  position: relative;
  border: none;
`;

const Delete = styled.button`
  border-radius: 8px;
`;

const QuestionWrapper = styled.div`
  border: 1px solid grey;
  position: relative;
  background: rgba(255, 253, 245, 0.91);
  bottom: 10px;
  right: 40px;
  height: 150px;
  width: 200px;
  border-radius: 10px;
`;

const Question = styled.p`
  font-size: 16px;
  margin-top: 30px;
`;

const YesButton = styled.button`
  margin: 5px;
  border: 1px solid green;
  border-radius: 10px;
`;

const NoButton = styled.button`
  margin: 5px;
  border: 1px solid red;

  border-radius: 10px;
`;
