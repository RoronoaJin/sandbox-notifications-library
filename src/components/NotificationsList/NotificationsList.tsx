import { useNotification } from "../../hooks/useNotification";
import { useEffect, useState } from "react";
import { Notification } from "notifications-library";
import { NotificationListItem } from "../NotificationListItem/NotificationListItem";
import { NotficationDataContainer } from "../NotificationDataContainer/NotificationDataContainer";
import style from "./NotificationsList.module.css";
import { TEST_ID } from "../../constants/testId";

export function NotificationsList() {
  const {
    notificationsList,
    fetchNotifications,
    deleteNotification,
    markAsRead,
  } = useNotification();

  const [selectedNotificationId, setSelectedNotificationId] =
    useState<string>("");

  const [displayedNotification, setDisplayedNotification] =
    useState<Notification>();

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  useEffect(() => {
    if (selectedNotificationId) {
      const selectedNotification = notificationsList.find(
        ({ id }) => id === selectedNotificationId
      );
      setDisplayedNotification(selectedNotification);
    }
  }, [notificationsList, selectedNotificationId]);

  const handleNotificationSelect = (id: string) => {
    setSelectedNotificationId(id);
  };

  const handleNotificationDelete = async (id: string) => {
    await deleteNotification(id);
    await fetchNotifications();
  };

  const handleNotificationMarkAsRead = async (id: string) => {
    await markAsRead(id);
  };

  return (
    <>
      <div className={style.listContainer}>
        <h4 data-testid={TEST_ID.NOTIFICATION_HEADER}>Notifications</h4>
        {notificationsList.map(({ id, data }) => (
          <NotificationListItem
            key={id}
            id={id}
            data={data}
            onSelect={handleNotificationSelect}
            onMarkAsRead={handleNotificationMarkAsRead}
            onDelete={handleNotificationDelete}
          />
        ))}
      </div>
      {displayedNotification && (
        <NotficationDataContainer
          displayedNotification={displayedNotification}
        />
      )}
    </>
  );
}
