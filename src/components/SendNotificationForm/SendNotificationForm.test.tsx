import { fireEvent, render, screen } from "@testing-library/react";
import { TEST_ID } from "../../constants/testId";
import { SendNotificationForm } from "./SendNotificationForm";
import * as UseNotification from "../../hooks/useNotification";

describe("SendNotificationForm component", () => {
  test("It should render SendNotificationForm component", () => {
    render(<SendNotificationForm />);
    const form = screen.getByTestId(TEST_ID.SEND_NOTIFICATION_FORM);
    const textarea = screen.getByTestId(TEST_ID.SEND_NOTIFICATION_TEXTAREA);
    const button = screen.getByTestId(TEST_ID.SEND_NOTIFICATION_BTN);

    expect(form).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("It should call sendNotification on form submit", async () => {
    const mockSendNotification = jest.fn();
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      sendNotification: mockSendNotification,
      fetchNotifications: jest.fn(),
    });
    render(<SendNotificationForm />);
    const textarea = screen.getByTestId(TEST_ID.SEND_NOTIFICATION_TEXTAREA);
    const button = screen.getByTestId(TEST_ID.SEND_NOTIFICATION_BTN);

    fireEvent.change(textarea, { target: { value: "Test notification" } });
    fireEvent.click(button);

    expect(mockSendNotification).toHaveBeenCalledWith("Test notification");
  });
});
