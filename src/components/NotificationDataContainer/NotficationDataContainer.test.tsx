import { render, screen } from "@testing-library/react";
import { NotficationDataContainer } from "./NotificationDataContainer";

describe("NotficationDataContainer", () => {
  test("It should renders the notification", () => {
    const displayedNotification = {
      id: "aa-faf-bsvse23",
      data: "Questa è una notifica",
      sender: "Sender1",
      createdAt: 1241421412,
      readAt: 324243432,
    };

    render(
      <NotficationDataContainer displayedNotification={displayedNotification} />
    );

    expect(screen.getByText(displayedNotification.id)).toBeInTheDocument();
    expect(screen.getByText(displayedNotification.data)).toBeInTheDocument();
    expect(screen.getByText(displayedNotification.sender)).toBeInTheDocument();
    expect(
      screen.getByText(displayedNotification.createdAt)
    ).toBeInTheDocument();
    expect(screen.getByText(displayedNotification.readAt)).toBeInTheDocument();
  });

  test("It should render only createdAt if readAt is not present", () => {
    const displayedNotification = {
      id: "aa-faf-bsvse23",
      data: "Questa è una notifica",
      sender: "Sender1",
      createdAt: 1241421412,
    };

    render(
      <NotficationDataContainer displayedNotification={displayedNotification} />
    );

    expect(screen.queryByText("Read At:")).toBeNull();
  });
});
