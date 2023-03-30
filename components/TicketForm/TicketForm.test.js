import { render } from "@testing-library/react";
import FormTicket from ".";
import "@testing-library/jest-dom/extend-expect";

test("renders reset and create buttons", () => {
  const { getByText } = render(<FormTicket />);
  const resetButton = getByText("Reset");
  const createButton = getByText("Buy a Ticket");
  expect(resetButton).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
});
