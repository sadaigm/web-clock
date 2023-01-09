import React from "react";
import { ClockContext } from "./ClockProvider";

const ToggleButton: React.FC = () => {
  const { clockConfig, calenderView, setcalenderView } =
    React.useContext(ClockContext);
  const smallScreen = window.innerWidth < parseInt(clockConfig.width) * 2;
  return (
    <>
      {smallScreen ? (
        <div
          style={{
            display: "flex",
            height: "50px",
            borderBottom: "1px solid #9e9e9e",
            borderLeft: "1px solid #9e9e9e",
            borderRight: "1px solid #9e9e9e",
            justifyContent: "center",
            color: "cornflowerblue",
            alignItems: "center",
            fontSize: "1.5rem",
          }}
        >
          <button
            style={{
              display: "flex",

              backgroundColor: "cornflowerblue",
              padding: "5px",
              border: "1px solid cornflowerblue",
              fontSize: "1rem",
              color: "white",
            }}
            onClick={(e) => {
              setcalenderView((p) => !!!p);
            }}
          >
            {!calenderView ? `Calender` : `Clock`}
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ToggleButton;
