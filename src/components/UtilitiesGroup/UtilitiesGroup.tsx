import { useNotification } from "../../hooks/useNotification";
import { useState } from "react";
import { SendNotificationForm } from "../SendNotificationForm/SendNotificationForm";
import { Button } from "../Button/Button";
import { FiDownload, FiSend } from "react-icons/fi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./UtilitiesGroup.module.css";
import btn from "../Button/Button.module.css";

export function UtilitiesButtonGroup() {
  const { getAllNotifications, markAllAsRead, deleteAllNotifications } =
    useNotification();

  const [showForm, setShowForm] = useState(false);

  const handleGetAllNotifications = async () => {
    await getAllNotifications();
  };

  const handleDeleteAllNotifications = async () => {
    await deleteAllNotifications();
  };

  const handleMarkAllNotificationsAsRead = async () => {
    await markAllAsRead();
  };

  const handleFormDisplay = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className={styles.btnsContainer}>
        <Button className={btn.utilBtn} onClick={handleGetAllNotifications}>
          <FiDownload />
        </Button>
        <Button className={btn.utilBtn} onClick={handleFormDisplay}>
          <FiSend />
        </Button>
        <Button
          className={btn.utilBtn}
          onClick={handleMarkAllNotificationsAsRead}
        >
          <IoCheckmarkDoneSharp />
        </Button>
        <Button className={btn.utilBtn} onClick={handleDeleteAllNotifications}>
          <RiDeleteBinLine />
        </Button>
      </div>
      {showForm && <SendNotificationForm />}
    </>
  );
}
