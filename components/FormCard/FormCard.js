export default function FormCard({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formDataCard = new FormDataCard(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Card</h2>
      <div>
        <div>
          <label htmlFor=""></label>
          <input type="" id="" name=""></input>
        </div>
      </div>
    </form>
  );
}
