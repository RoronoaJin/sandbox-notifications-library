import { fireEvent, screen, render } from "@testing-library/react";
import { Button } from "./Button";
import { TEST_ID } from "../../constants/testId";

describe("Button component", () => {
  test("On click, it should trigger the callback passed as a prop", () => {
    const fn = jest.fn();
    render(<Button onClick={fn} />);
    const btn = screen.getByTestId(TEST_ID.BUTTON);
    fireEvent.click(btn);
    expect(fn).toBeCalled();
  });
});
