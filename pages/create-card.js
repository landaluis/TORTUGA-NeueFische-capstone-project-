import CardForm from "../components/CardForm/index";
import Card from "../components/Card/index";

import styled from "styled-components";

export default function CreateCard({ onAddCard }) {
  return (
    <>
      <CardForm onAddCard={onAddCard} />
    </>
  );
}
