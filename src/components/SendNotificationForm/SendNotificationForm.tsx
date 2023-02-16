import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import style from "./SendNotificationForm.module.css";
import btn from "../Button/Button.module.css";
import { useNotification } from "../../hooks/useNotification";
import { TEST_ID } from "../../constants/testId";

export function SendNotificationForm() {
  const { fetchNotifications, sendNotification } = useNotification();
  const [newNotificationData, setNewNotificationData] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await sendNotification(newNotificationData);
    await fetchNotifications();
    // setNewNotificationData("");
  };

  return (
    <form
      data-testid={TEST_ID.SEND_NOTIFICATION_FORM}
      className={style.formContainer}
      onSubmit={handleSubmit}
    >
      <textarea
        data-testid={TEST_ID.SEND_NOTIFICATION_TEXTAREA}
        onChange={(e) => setNewNotificationData(e.target.value)}
      />
      <Button
        data-testid={TEST_ID.SEND_NOTIFICATION_BTN}
        type="submit"
        className={btn.sendNotificationBtn}
      >
        Send Notification
      </Button>
    </form>
  );
}
