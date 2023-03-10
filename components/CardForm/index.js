import styled from "styled-components";
import Link from "next/link";

export default function CardForm({ onAddCard }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formDataCard = new FormData(form);

    const data = Object.fromEntries(formDataCard);
    onAddCard(data);
    form.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h4>New Card</h4>
        <section>
          <div>
            <label htmlFor="what">What: </label>
            <input type="text" id="what" name="what" required />
          </div>
          <div>
            <label htmlFor="why">Why: </label>
            <input type="text" id="why" name="why" />
          </div>
          <div>
            <label htmlFor="price">Price: </label>
            <input type="number" id="price" name="price" required />
          </div>

          <div>
            <label htmlFor="howMuch">How much: </label>
            <input type="number" id="howMuch" name="howMuch" required />
          </div>
          <div>
            <label>How often: </label>
            <select name="frequency" required>
              <option value="o"></option>
              <option value="1">Daily</option>
              <option value="2">Weekly</option>
              <option value="3">Monthly</option>
            </select>
          </div>
          <button type="reset">Reset</button>
          <button type="submit">Create</button>
        </section>
        <Exit>
          <Link href={"/"}>
            <span className="material-symbols-outlined">
              disabled_by_default
            </span>
          </Link>
        </Exit>
      </StyledForm>
    </>
  );
}

const Exit = styled.div`
  z-index: 30;
  top: -20px;
  position: absolute;
  right: -30px;
`;
const StyledForm = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  top: 100px;
  display: block;
  width: 315px;
  height: 450px;
  text-align: center;
  border: 1px solid white;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: #eaeaea;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
