import { render, screen, fireEvent } from "@testing-library/react";
import { UtilitiesGroup } from "./UtilitiesGroup";
import * as UseNotification from "../../hooks/useNotification";

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

    const getButton = screen.getByText("Get");
    fireEvent.click(getButton);

    expect(mockFetchNotifications).toHaveBeenCalled();
  });

  test("Clicking the 'readAll' button should trigger markAllAsRead method", async () => {
    const mockMarkAllAsRead = jest.fn();
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      markAllAsRead: mockMarkAllAsRead,
    });

    render(<UtilitiesGroup />);

    const markAsReadButton = screen.getByText("ReadAll");
    fireEvent.click(markAsReadButton);

    expect(mockMarkAllAsRead).toHaveBeenCalled();
  });

  test("Clicking the 'deleteAll' button should trigger deleteAllNotifications method", async () => {
    const mockDeleteAllNotifications = jest.fn();
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      deleteAllNotifications: mockDeleteAllNotifications,
    });
    render(<UtilitiesGroup />);

    const deleteAllButton = screen.getByText("DeleteAll");
    fireEvent.click(deleteAllButton);

    expect(mockDeleteAllNotifications).toHaveBeenCalled();
  });
});
