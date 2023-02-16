import { NotificationsList } from "./components/NotificationsList/NotificationsList";
import { NotificationCenterProvider } from "./components/NotificationCenterProvider/NotificationCenterProvider";
import { UtilitiesGroup } from "./components/UtilitiesGroup/UtilitiesGroup";
import "./App.css";

function App() {
  return (
    <NotificationCenterProvider>
      <div className="container">
        <div className="notifications-container">
          <NotificationsList />
        </div>
        <div className="utils-container">
          <UtilitiesGroup />
        </div>
      </div>
    </NotificationCenterProvider>
  );
}

export default App;
