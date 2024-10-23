import React from "react";
import { useAlerts } from "../context/AlertContext";
import SideBar from "./SideBar";

const Alerts = () => {
  const { alerts, removeAlert } = useAlerts(); // Get alerts and removeAlert from the context

  return (
    <div className="alerts-container bg-white text-blue-700 p-4 rounded-lg shadow-lg max-w-lg mx-auto mt-10 ml-60`">
      <SideBar />
      <h2 className="text-center text-blue-700 font-bold text-xl mb-4">
        Alerts
      </h2>
      {alerts.length > 0 ? (
        alerts.map((alert, index) => (
          <div
            key={index}
            className="alert bg-blue-100 text-blue-500 border-l-4 border-blue-500 p-4 mb-4 rounded flex justify-between"
          >
            <span>{alert}</span>
            <button
              onClick={() => removeAlert(index)}
              className="text-blue-500 ml-4"
            >
              Dismiss
            </button>
          </div>
        ))
      ) : (
        <p className="text-blue-900 text-center">No alerts at this time</p>
      )}
    </div>
  );
};

export default Alerts;
