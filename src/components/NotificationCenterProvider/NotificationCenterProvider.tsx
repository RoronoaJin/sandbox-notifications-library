import { createContext, PropsWithChildren, useState } from "react";
import { Notification, NotificationCenter } from "notifications-library";

const notificationCenter = new NotificationCenter();

const configuration = {
  fetchUrl: "http://localhost:3001/notifications",
  createUrl: "http://localhost:3001/notifications",
  updateUrl: "http://localhost:3001/notifications",
};

interface NotificationCenterContextProps {
  notificationCenter: NotificationCenter;
  notificationsList: Notification[];
  setNotificationsList: React.Dispatch<React.SetStateAction<Notification[]>>;
}

export const NotificationCenterContext =
  createContext<NotificationCenterContextProps>({
    notificationCenter,
    notificationsList: [],
    setNotificationsList: () => {},
  });

export const NotificationCenterProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [notificationsList, setNotificationsList] = useState<Notification[]>(
    []
  );

  notificationCenter.setConfig(configuration);

  return (
    <NotificationCenterContext.Provider
      value={{ notificationCenter, notificationsList, setNotificationsList }}
    >
      {children}
    </NotificationCenterContext.Provider>
  );
};
