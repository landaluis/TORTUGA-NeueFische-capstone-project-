import "@testing-library/jest-dom";
import { render, screen, userEvent, click } from "@testing-library/react";
import Navigation from ".";

test("renders all navigation links", () => {
  const { getByAltText } = render(<Navigation />);
  expect(getByAltText("Home Page")).toBeInTheDocument();
  expect(getByAltText("Add Card")).toBeInTheDocument();
  expect(getByAltText("Create Ticket")).toBeInTheDocument();
  expect(getByAltText("Profile Page")).toBeInTheDocument();
});
