import { useNotification } from "../../hooks/useNotification";
import { useState } from "react";
import { SendNotificationForm } from "../SendNotificationForm/SendNotificationForm";
import { Button } from "../Button/Button";
import { FiDownload, FiSend } from "react-icons/fi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./UtilitiesGroup.module.css";
import btn from "../Button/Button.module.css";

export function UtilitiesGroup() {
  const { fetchNotifications, markAllAsRead, deleteAllNotifications } =
    useNotification();

  const [showForm, setShowForm] = useState(false);

  const handleGetAllNotifications = async () => {
    await fetchNotifications();
  };

  const handleDeleteAllNotifications = async () => {
    await deleteAllNotifications();
  };

  const handleMarkAllNotificationsAsRead = async () => {
    await markAllAsRead();
  };

  const handleFormDisplay = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <>
      <div className={styles.btnsContainer}>
        <Button className={btn.utilBtn} onClick={handleGetAllNotifications}>
          <p>Get</p>
          <FiDownload />
        </Button>
        <Button className={btn.utilBtn} onClick={handleFormDisplay}>
          <p>Send</p>
          <FiSend />
        </Button>
        <Button
          className={btn.utilBtn}
          onClick={handleMarkAllNotificationsAsRead}
        >
          <p>ReadAll</p>
          <IoCheckmarkDoneSharp />
        </Button>
        <Button className={btn.utilBtn} onClick={handleDeleteAllNotifications}>
          <p>DeleteAll</p>
          <RiDeleteBinLine />
        </Button>
      </div>
      {showForm && <SendNotificationForm />}
    </>
  );
}
