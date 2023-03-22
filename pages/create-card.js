import CardForm from "../components/CardForm/index";

export default function CreateCard({
  onAddCard,
  handleImageUpload,
  isUploaded,
}) {
  return (
    <>
      <CardForm
        onAddCard={onAddCard}
        onHandleImageUpload={handleImageUpload}
        isUploaded={isUploaded}
      />
    </>
  );
}
