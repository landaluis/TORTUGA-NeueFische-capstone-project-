import styled from "styled-components";

export default function FormTicket({ onAddTicket }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formDataTicket = new FormData(form);

    const data = Object.fromEntries(formDataTicket);
    onAddTicket(data);
    form.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h4>New Ticket</h4>
      <section>
        <div>
          <label htmlFor="ticketValue">Ticket value: </label>
          <input
            type="number"
            id="ticketValue"
            name="ticketValue"
            min="1"
            placeholder="€"
            required
          />
        </div>

        <ResetButton type="reset">Reset</ResetButton>
        <CreateButton type="submit">Buy a Ticket</CreateButton>
      </section>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  box-sizing: border-box;
  text-align: center;
  background: rgba(250, 241, 219, 0.92);
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 340px;
  height: 184px;
  margin: 0 auto;
  z-index: 15;
`;

const ResetButton = styled.button`
  position: fixed;
  z-index: 8;
  left: 90px;
  top: 120px;
  border-radius: 10px;
`;

const CreateButton = styled.button`
  position: fixed;
  left: 170px;
  top: 120px;
  border-radius: 10px;
`;
