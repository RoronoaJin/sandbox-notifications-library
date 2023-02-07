import { Notification } from "notifications-library";
import { createContext, PropsWithChildren, useState } from "react";

interface NotificationsListContextProps {
  notificationsList: Notification[];
  setNotificationsList: React.Dispatch<React.SetStateAction<Notification[]>>;
}

export const NotificationListContext =
  createContext<NotificationsListContextProps>({
    notificationsList: [],
    setNotificationsList: () => {},
  });

export const NotificationListProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [notificationsList, setNotificationsList] = useState<Notification[]>(
    []
  );

  return (
    <NotificationListContext.Provider
      value={{ notificationsList, setNotificationsList }}
    >
      {children}
    </NotificationListContext.Provider>
  );
};
