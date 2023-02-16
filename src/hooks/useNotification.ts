import { useCallback, useContext } from "react";
import { NotificationCenterContext } from "../components/NotificationCenterProvider/NotificationCenterProvider";

export function useNotification() {
  const { notificationCenter, notificationsList, setNotificationsList } =
    useContext(NotificationCenterContext);

  const fetchNotifications = useCallback(async () => {
    const allNotifications = await notificationCenter.getAllNotifications();
    setNotificationsList(allNotifications);
  }, [notificationCenter, setNotificationsList]);

  const deleteNotification = async (notificationID: string) => {
    await notificationCenter.deleteNotificationByID(notificationID);
  };

  const markAsRead = async (notificationID: string) => {
    await notificationCenter.markNotificationAsRead(notificationID);
  };

  const sendNotification = async (newNotificationData: any) => {
    if (!newNotificationData) {
      return;
    }
    await notificationCenter.sendNotification(newNotificationData);
  };

  const markAllAsRead = async () => {
    await notificationCenter.markAllAsRead();
  };

  const deleteAllNotifications = async () => {
    await notificationCenter.deleteAllNotifications();
  };

  return {
    notificationsList,
    fetchNotifications,
    deleteNotification,
    markAsRead,
    sendNotification,
    markAllAsRead,
    deleteAllNotifications,
  };
}
