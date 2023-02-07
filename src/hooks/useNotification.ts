import { useCallback, useContext } from "react";
import { NotificationContext } from "../components/NotificationCenterProvider/NotificationCenterProvider";
import { NotificationListContext } from "../components/NotificationListProvider/NotificationListProvider";

export function useNotification() {
  const { notificationCenter } = useContext(NotificationContext);

  const { notificationsList, setNotificationsList } = useContext(
    NotificationListContext
  );

  const fetchNotification = useCallback(async () => {
    const allNotifications = await notificationCenter.getAllNotifications();
    setNotificationsList(allNotifications);
  }, [notificationCenter, setNotificationsList]);

  const deleteNotification = async (notificationID: string) => {
    await notificationCenter.deleteNotificationByID(notificationID);
    fetchNotification();
  };

  const markAsRead = async (notificationID: string) => {
    await notificationCenter.markNotificationAsRead(notificationID);
    fetchNotification();
  };

  const getAllNotifications = async () => {
    await notificationCenter.getAllNotifications();
    fetchNotification();
  };

  const sendNotification = async (newNotificationData: string) => {
    if (!newNotificationData) {
      return;
    }
    await notificationCenter.sendNotification(newNotificationData);
    fetchNotification();
  };

  const markAllAsRead = async () => {
    await notificationCenter.markAllAsRead();
    fetchNotification();
  };

  const deleteAllNotifications = async () => {
    await notificationCenter.deleteAllNotifications();
    fetchNotification();
  };

  return {
    notificationsList,
    fetchNotification,
    deleteNotification,
    markAsRead,
    getAllNotifications,
    sendNotification,
    markAllAsRead,
    deleteAllNotifications,
  };
}
