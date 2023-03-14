import CardForm from "../components/CardForm/index";

export default function CreateCard({ onAddCard }) {
  return (
    <>
      <CardForm onAddCard={onAddCard} />
    </>
  );
}
