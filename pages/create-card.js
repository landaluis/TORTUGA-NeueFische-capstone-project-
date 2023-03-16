import CardForm from "../components/CardForm/index";

export default function CreateCard({ onAddCard, handleImageUpload }) {
  return (
    <>
      <CardForm onAddCard={onAddCard} onHandleImageUpload={handleImageUpload} />
    </>
  );
}
