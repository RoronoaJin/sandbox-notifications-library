import { Button } from "../Button/Button";
import { RiDeleteBin7Line } from "react-icons/ri";
import { IoCheckmarkSharp } from "react-icons/io5";
import { TEST_ID } from "../../constants/testId";
import style from "./NotificationListItem.module.css";
import btn from "../Button/Button.module.css";

interface Props {
  id: string;
  data: string;
  onSelect: (id: string) => void;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
}

export const NotificationListItem: React.FC<Props> = ({
  id,
  data,
  onSelect,
  onMarkAsRead,
  onDelete,
}) => {
  return (
    <li data-testid={TEST_ID.NOTIFICATION_ITEM} className={style.listIndex}>
      <Button
        className={btn.notificationTitleBtn}
        data-testid={TEST_ID.SELECTED_NOTIFICATION_BTN}
        onClick={() => onSelect(id)}
      >
        {data}
      </Button>
      <Button
        data-testid={TEST_ID.MARK_AS_READ_BUTTON}
        className={btn.smallUtilBtn}
        onClick={() => onMarkAsRead(id)}
      >
        <IoCheckmarkSharp />
      </Button>
      <Button
        data-testid={TEST_ID.DELETE_BUTTON}
        className={btn.smallUtilBtn}
        onClick={() => onDelete(id)}
      >
        <RiDeleteBin7Line />
      </Button>
    </li>
  );
};
