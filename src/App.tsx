import { NotificationsList } from "./components/NotificationsList/NotificationsList";
import { NotificationCenterProvider } from "./components/NotificationCenterProvider/NotificationCenterProvider";
import { UtilitiesButtonGroup } from "./components/UtilitiesGroup/UtilitiesGroup";
import "./App.css";

function App() {
  return (
    <NotificationCenterProvider>
      <div className="container">
        <div className="notifications-container">
          <NotificationsList />
        </div>
        <div className="utils-container">
          <UtilitiesButtonGroup />
        </div>
      </div>
    </NotificationCenterProvider>
  );
}

export default App;
