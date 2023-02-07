import { Button } from "../Button/Button";
import { RiDeleteBin7Line } from "react-icons/ri";
import { IoCheckmarkSharp } from "react-icons/io5";
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
    <li className={style.listIndex}>
      <Button className={btn.notificationTitleBtn} onClick={() => onSelect(id)}>
        {data}
      </Button>
      <Button className={btn.smallUtilBtn} onClick={() => onMarkAsRead(id)}>
        <IoCheckmarkSharp />
      </Button>
      <Button className={btn.smallUtilBtn} onClick={() => onDelete(id)}>
        <RiDeleteBin7Line />
      </Button>
    </li>
  );
};
