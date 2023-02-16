import { PropsWithChildren } from "react";
import { NotificationCenterProvider } from "../components/NotificationCenterProvider/NotificationCenterProvider";

export const TestWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <NotificationCenterProvider>{children}</NotificationCenterProvider>;
};
