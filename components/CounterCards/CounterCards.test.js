import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import CounterCards from ".";

describe("CounterCards component", () => {
  const cards = [
    { savings: 100, price: 50, isUploaded2: false },
    { savings: 50, price: 100, isUploaded2: false },
    { savings: 0, price: 200, isUploaded2: true },
    { savings: 300, price: 150, isUploaded2: true },
  ];

  it("should render three counters", () => {
    const { getByText } = render(<CounterCards cards={cards} />);
    const activeCardsCounter = getByText("Actives");
    const goldenCardsCounter = getByText("Golden");
    const platinumCardsCounter = getByText("Platinum");

    expect(activeCardsCounter).toBeInTheDocument();
    expect(goldenCardsCounter).toBeInTheDocument();
    expect(platinumCardsCounter).toBeInTheDocument();
  });
});
