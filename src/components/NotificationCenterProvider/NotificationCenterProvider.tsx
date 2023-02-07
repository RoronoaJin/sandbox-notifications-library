import React, { createContext, PropsWithChildren } from "react";
import { NotificationCenter } from "notifications-library";
import { NotificationListProvider } from "../NotificationListProvider/NotificationListProvider";

const notificationCenter = new NotificationCenter();

const configuration = {
  fetchUrl: "http://localhost:3001/notifications",
  createUrl: "http://localhost:3001/notifications",
  updateUrl: "http://localhost:3001/notifications",
};

export const NotificationContext = createContext<{
  notificationCenter: NotificationCenter;
}>({ notificationCenter });

export const NotificationCenterProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  notificationCenter.setConfig(configuration);

  return (
    <NotificationContext.Provider value={{ notificationCenter }}>
      <NotificationListProvider>{children}</NotificationListProvider>
    </NotificationContext.Provider>
  );
};
