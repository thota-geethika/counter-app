import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test('should display the heading', () => {
  render(<Counter/>);
  const heading = screen.getByText("M2P Counter");
  expect(heading).toBeVisible();
})


test('should have initial value 0 when user passes nothing', () => {
  render(<Counter/>);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
})
