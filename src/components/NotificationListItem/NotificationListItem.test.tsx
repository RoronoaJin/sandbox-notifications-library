import { render, screen, fireEvent } from "@testing-library/react";
import { NotificationListItem } from "./NotificationListItem";
import { TEST_ID } from "../../constants/testId";

describe("NotificationListItem component", () => {
  test("It should renders the data passed as a prop", () => {
    const onSelect = jest.fn();
    const onMarkAsRead = jest.fn();
    const onDelete = jest.fn();
    const data = "This is a notification";
    const id = "noti-Id";

    render(
      <NotificationListItem
        id={id}
        data={data}
        onSelect={onSelect}
        onMarkAsRead={onMarkAsRead}
        onDelete={onDelete}
      />
    );

    expect(screen.getByText(data)).toBeInTheDocument();
  });

  test("It should trigger the onSelect prop function when the notification is clicked", () => {
    const onSelect = jest.fn();
    const onMarkAsRead = jest.fn();
    const onDelete = jest.fn();
    const data = "Notification";
    const id = "noti-Id";

    render(
      <NotificationListItem
        id={id}
        data={data}
        onSelect={onSelect}
        onMarkAsRead={onMarkAsRead}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByText(data));
    expect(onSelect).toHaveBeenCalledWith(id);
    expect(onMarkAsRead).not.toHaveBeenCalled();
    expect(onDelete).not.toHaveBeenCalled();
  });

  test("It should trigger the onMarkAsRead prop function when the 'mark as read' button is clicked", () => {
    const onSelect = jest.fn();
    const onMarkAsRead = jest.fn();
    const onDelete = jest.fn();
    const data = "Notification";
    const id = "noti-Id";

    render(
      <NotificationListItem
        id={id}
        data={data}
        onSelect={onSelect}
        onMarkAsRead={onMarkAsRead}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByTestId(TEST_ID.MARK_AS_READ_BUTTON));
    expect(onMarkAsRead).toHaveBeenCalledWith(id);
    expect(onSelect).not.toHaveBeenCalled();
    expect(onDelete).not.toHaveBeenCalled();
  });

  test("It should trigger the onDelete prop function when the 'delete notification' button is clicked", () => {
    const onSelect = jest.fn();
    const onMarkAsRead = jest.fn();
    const onDelete = jest.fn();
    const data = "Notification";
    const id = "noti-Id";

    render(
      <NotificationListItem
        id={id}
        data={data}
        onSelect={onSelect}
        onMarkAsRead={onMarkAsRead}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByTestId(TEST_ID.DELETE_BUTTON));
    expect(onDelete).toHaveBeenCalledWith(id);
    expect(onMarkAsRead).not.toHaveBeenCalled();
    expect(onSelect).not.toHaveBeenCalled();
  });
});
