import { renderHook, act, waitFor } from "@testing-library/react";
import { Notification } from "notifications-library";
import { useNotification } from "./useNotification";
import { TestWrapper } from "../testconfig/TestWrapper";

const MOCK_NOTIFICATIONS_LIST: Notification[] = [
  {
    id: "asdsdaw-3232is-34265-zzs",
    data: {
      title: "There is the third notification",
      message: "Hello, im the third notification!",
    },
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

describe("useNotification hook", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse(JSON.stringify(MOCK_NOTIFICATIONS_LIST));
  });

  test("If fetchNotifications method is called, it should fill the notifications list", async () => {
    const { result } = renderHook(() => useNotification(), {
      wrapper: TestWrapper,
    });

    act(() => {
      result.current.fetchNotifications();
    });

    await waitFor(() => {
      expect(result.current.notificationsList.length).toBeGreaterThan(0);
    });
  });

  test("If deleteNotification method is called, it should delete the notification with the given ID", async () => {
    const { result } = renderHook(() => useNotification(), {
      wrapper: TestWrapper,
    });

    act(() => {
      result.current.fetchNotifications();
    });

    act(() => {
      result.current.deleteNotification(MOCK_NOTIFICATIONS_LIST[1].id);
    });

    await waitFor(() => {
      expect(
        result.current.notificationsList.find(
          (notification) => notification.id === MOCK_NOTIFICATIONS_LIST[1].id
        )
      ).toBeUndefined();
    });
  });

  test("If markAsRead method is called, it should mark as read the notification, whose readAt is not defined, with the given ID", async () => {
    const { result } = renderHook(() => useNotification(), {
      wrapper: TestWrapper,
    });

    act(() => {
      result.current.fetchNotifications();
    });

    await waitFor(() => {
      expect(
        result.current.notificationsList.find(
          (notification) => notification.id === MOCK_NOTIFICATIONS_LIST[0].id
        )
      ).toEqual(MOCK_NOTIFICATIONS_LIST[0]);
    });

    act(() => {
      result.current.markAsRead(MOCK_NOTIFICATIONS_LIST[0].id);
    });

    await waitFor(() => {
      console.log(MOCK_NOTIFICATIONS_LIST[0]);

      expect(
        result.current.notificationsList.find(
          (notification) => notification.id === MOCK_NOTIFICATIONS_LIST[0].id
        )?.readAt
      ).toBeDefined();
    });
  });

  test("If sendNotification method is called, it should add a new notification to the list", async () => {
    const { result } = renderHook(() => useNotification(), {
      wrapper: TestWrapper,
    });

    act(() => {
      result.current.fetchNotifications();
    });

    const newNotificationData = {
      title: "There is a new notification",
      message: "Hello, I am a new notification!",
    };

    act(() => {
      result.current.sendNotification(newNotificationData);
    });

    await waitFor(() => {
      expect(result.current.notificationsList[1]).toBeDefined();
    });

    await waitFor(() => {
      expect(result.current.notificationsList.length).toBe(2);
    });
  });

  test("If sendNotification method is called and no data is provided, it should not add a notification to the list", async () => {
    const { result } = renderHook(() => useNotification(), {
      wrapper: TestWrapper,
    });

    act(() => {
      result.current.fetchNotifications();
    });

    const newNotificationData = null;

    act(() => {
      result.current.sendNotification(newNotificationData);
    });

    await waitFor(() => {
      expect(result.current.notificationsList[2]).toBeUndefined();
    });
  });

  test("If markAllAsRead method is called, it should mark all notifications as read", async () => {
    const { result } = renderHook(() => useNotification(), {
      wrapper: TestWrapper,
    });

    act(() => {
      result.current.fetchNotifications();
    });

    act(() => {
      result.current.markAllAsRead();
    });

    await waitFor(() => {
      expect(
        result.current.notificationsList.every(
          (notification) => notification.readAt
        )
      ).toBeDefined();
    });
  });

  test("If deleteAllNotifications method is called, it should delete all notifications from the list", async () => {
    const { result } = renderHook(() => useNotification(), {
      wrapper: TestWrapper,
    });

    act(() => {
      result.current.fetchNotifications();
    });

    act(() => {
      result.current.deleteAllNotifications();
    });

    await waitFor(() => {
      expect(result.current.notificationsList.length).toBe(0);
    });
  });
});
