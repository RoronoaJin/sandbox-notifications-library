import { fireEvent, render, screen } from "@testing-library/react";
import { Notification } from "notifications-library";
import { TEST_ID } from "../../constants/testId";
import { TestWrapper } from "../../testconfig/TestWrapper";
import { NotificationsList } from "./NotificationsList";
import * as UseNotification from "../../hooks/useNotification";

describe("NoificationList component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("It should render the header and the correct number of notifications", async () => {
    const MOCK_NOTIFICATIONS_LIST: Notification[] = [
      {
        id: "asdsdaw-3232is-34265-zzs",
        data: "This is the second notification!",
        sender: "APP_SENDER",
        createdAt: 123434344568,
      },
      {
        id: "0eb4bf72-6fdf-4475-b99e-a94ca98f49b8",
        data: "This is the second notification!",
        sender: "defaultSender",
        createdAt: 1675786499832,
        readAt: 1675811304189,
      },
    ];
    fetchMock.mockResponse(JSON.stringify(MOCK_NOTIFICATIONS_LIST));

    render(<NotificationsList />, { wrapper: TestWrapper });
    const header = screen.getByTestId(TEST_ID.NOTIFICATION_HEADER);
    const notifications = await screen.findAllByRole("listitem");

    expect(header).toBeInTheDocument();
    expect(notifications).toHaveLength(MOCK_NOTIFICATIONS_LIST.length);
  });

  test("It should call markAsRead when the 'markAsRead' button is clicked", async () => {
    const mockMarkAsRead = jest.fn();
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      notificationsList: [
        {
          id: "asdsdaw-3232is-34265-zzs",
          data: "This is the second notification!",
          sender: "APP_SENDER",
          createdAt: 123434344568,
        },
        {
          id: "0eb4bf72-6fdf-4475-b99e-a94ca98f49b8",
          data: "This is the second notification!",
          sender: "defaultSender",
          createdAt: 1675786499832,
          readAt: 1675811304189,
        },
      ],
      markAsRead: mockMarkAsRead,
      fetchNotifications: jest.fn(),
    });

    render(<NotificationsList />, { wrapper: TestWrapper });

    const markAsReadBtn = screen.getAllByTestId(TEST_ID.MARK_AS_READ_BUTTON);

    await markAsReadBtn.forEach((button) => {
      fireEvent.click(button);
      expect(mockMarkAsRead).toHaveBeenCalled();
    });
  });

  test("It should call deleteNotification when the 'deleteNotificationBtn' is clicked", async () => {
    const mockDeleteNotification = jest.fn();
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      notificationsList: [
        {
          id: "asdsdaw-3232is-34265-zzs",
          data: "This is the second notification!",
          sender: "APP_SENDER",
          createdAt: 123434344568,
        },
        {
          id: "0eb4bf72-6fdf-4475-b99e-a94ca98f49b8",
          data: "This is the second notification!",
          sender: "defaultSender",
          createdAt: 1675786499832,
          readAt: 1675811304189,
        },
      ],
      deleteNotification: mockDeleteNotification,
      fetchNotifications: jest.fn(),
    });

    render(<NotificationsList />, { wrapper: TestWrapper });

    const deleteNotificationBtn = screen.getAllByTestId(TEST_ID.DELETE_BUTTON);

    await deleteNotificationBtn.forEach((button) => {
      fireEvent.click(button);
      expect(mockDeleteNotification).toHaveBeenCalled();
    });
  });

  test("It should set the selected notification correctly", async () => {
    // @ts-expect-error
    jest.spyOn(UseNotification, "useNotification").mockReturnValue({
      notificationsList: [
        {
          id: "asdsdaw-3232is-34265-zzs",
          data: "This is the second notification!",
          sender: "APP_SENDER",
          createdAt: 123434344568,
        },
        {
          id: "0eb4bf72-6fdf-4475-b99e-a94ca98f49b8",
          data: "This is the second notification!",
          sender: "defaultSender",
          createdAt: 1675786499832,
          readAt: 1675811304189,
        },
      ],
      fetchNotifications: jest.fn(),
    });

    render(<NotificationsList />, { wrapper: TestWrapper });

    const notificationListItem = screen.getAllByTestId(
      TEST_ID.SELECTED_NOTIFICATION_BTN
    );

    const listItem = notificationListItem[0];

    expect(
      screen.queryByTestId(TEST_ID.DISPLAYED_NOTIFICATION_CONTAINER)
    ).not.toBeInTheDocument();

    fireEvent.click(listItem);

    expect(
      screen.getByTestId(TEST_ID.DISPLAYED_NOTIFICATION_CONTAINER)
    ).toBeInTheDocument();
  });
});
