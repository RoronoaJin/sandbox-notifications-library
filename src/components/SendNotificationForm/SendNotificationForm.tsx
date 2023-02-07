import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import style from "./SendNotificationForm.module.css";
import btn from "../Button/Button.module.css";
import { useNotification } from "../../hooks/useNotification";

export function SendNotificationForm() {
  const { sendNotification } = useNotification();
  const [newNotificationData, setNewNotificationData] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await sendNotification(newNotificationData);
    // setNewNotificationData("");
  };

  return (
    <form className={style.formContainer} onSubmit={handleSubmit}>
      <textarea onChange={(e) => setNewNotificationData(e.target.value)} />
      <Button type="submit" className={btn.sendNotificationBtn}>
        Send Notification
      </Button>
    </form>
  );
}
