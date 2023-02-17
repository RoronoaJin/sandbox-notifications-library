import { render, screen, fireEvent } from "@testing-library/react";
import { UtilitiesGroup } from "./UtilitiesGroup";
import * as UseNotification from "../../hooks/useNotification";
import { TEST_ID } from "../../constants/testId";

describe("UtilitiesGroup componenet", () => {
  test("It should render all buttons", () => {
    render(<UtilitiesGroup />);
    const getButton = screen.getByText("Get");
    const sendButton = screen.getByText("Send");
    const markAsReadButton = screen.getByText("ReadAll");
    const deleteAllButton = screen.getByText("DeleteAll");

    expect(getButton).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
    expect(markAsReadButton).toBeInTheDocument();
    expect(deleteAllButton).toBeInTheDocument();
  });

  test("Clicking the 'get' button should trigger fetchNotifications method", async () => {
    const mockFetchNotifications = jest.fn();
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      fetchNotifications: mockFetchNotifications,
    });

    render(<UtilitiesGroup />);

    const getBtn = screen.getByText("Get");
    fireEvent.click(getBtn);

    expect(mockFetchNotifications).toHaveBeenCalled();
  });

  test("Clicking the 'readAll' button should trigger markAllAsRead method", async () => {
    const mockMarkAllAsRead = jest.fn();
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      markAllAsRead: mockMarkAllAsRead,
    });

    render(<UtilitiesGroup />);

    const markAsReadBtn = screen.getByText("ReadAll");
    fireEvent.click(markAsReadBtn);

    expect(mockMarkAllAsRead).toHaveBeenCalled();
  });

  test("Clicking the 'deleteAll' button should trigger deleteAllNotifications method", async () => {
    const mockDeleteAllNotifications = jest.fn();
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      deleteAllNotifications: mockDeleteAllNotifications,
    });
    render(<UtilitiesGroup />);

    const deleteAllBtn = screen.getByText("DeleteAll");
    fireEvent.click(deleteAllBtn);

    expect(mockDeleteAllNotifications).toHaveBeenCalled();
  });

  test("Clicking the 'send' button should display the form", () => {
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      fetchNotifications: jest.fn(),
    });
    render(<UtilitiesGroup />);

    const sendBtn = screen.getByText("Send");

    fireEvent.click(sendBtn);

    const form = screen.getByTestId(TEST_ID.SEND_NOTIFICATION_FORM);

    expect(form).toBeInTheDocument();
  });
});
