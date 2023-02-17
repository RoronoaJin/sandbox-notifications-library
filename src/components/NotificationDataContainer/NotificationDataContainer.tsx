import { Notification } from "notifications-library";
import { TEST_ID } from "../../constants/testId";
import styles from "./NotficationDataContainer.module.css";

type Props = {
  displayedNotification: Notification;
};

export const NotficationDataContainer: React.FC<Props> = ({
  displayedNotification,
}) => {
  return (
    <div
      className={styles.dataContainer}
      data-testid={TEST_ID.DISPLAYED_NOTIFICATION_CONTAINER}
    >
      <span>
        <h5>ID:</h5> {displayedNotification.id}
      </span>
      <span>
        <h5>Data:</h5> {displayedNotification.data}
      </span>
      <span>
        <h5>Sender:</h5> {displayedNotification.sender}
      </span>
      <span>
        <h5>Created At:</h5> {displayedNotification.createdAt}
      </span>
      {displayedNotification.readAt && (
        <span>
          <h5>Read At:</h5> {displayedNotification.readAt}
        </span>
      )}
    </div>
  );
};
