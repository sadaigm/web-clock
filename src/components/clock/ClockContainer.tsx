import React from "react";
import Clock from "./Clock";
import { ClockContext } from "./ClockProvider";
import DateSection from "./Date";

const ClockContainer: React.FC = () => {
  const { clockConfig, calenderView } = React.useContext(ClockContext);
  const smallScreen = window.innerWidth < parseInt(clockConfig.width) * 2;
  let showClockCss = "flex";
  if (smallScreen) {
    showClockCss = !calenderView ? "flex" : "none";
  }
  const totalWidth = !smallScreen
    ? `${clockConfig.width} * 2 + 30px`
    : `${clockConfig.width} + 15px`;

  //   const renderToggleButton = React.useMemo(() => {
  //     return (
  //       smallScreen && (
  //         <div
  //           style={{
  //             display: "flex",
  //             width: "100%",
  //             height: "50px",
  //             borderBottom: "1px solid cornflowerblue",
  //             borderLeft: "1px solid cornflowerblue",
  //             borderRight: "1px solid cornflowerblue",
  //             justifyContent: "center",
  //             color: "cornflowerblue",
  //             alignItems: "center",
  //             fontSize: "1.5rem",
  //           }}
  //         >
  //           <button
  //             // style={{
  //             //   backgroundColor: "cornflowerblue",
  //             //   padding: "5px",
  //             //   border: "1px solid cornflowerblue",
  //             //   fontSize: "1rem",
  //             //   color: "white",
  //             // }}
  //             onClick={() => {
  //               //   setcalenderView((p) => !!!p);
  //             }}
  //           >
  //             Calender View
  //           </button>
  //         </div>
  //       )
  //     );
  //   }, [smallScreen]);
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #9e9e9e",
        color: "cornflowerblue",
        height: `calc(${clockConfig.height} + 85px)`,
        width: `calc(${totalWidth})`,
      }}
    >
      {(!smallScreen || calenderView) && (
        <div
          className="calender__section"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRight: smallScreen ? `none` : `1px solid #9e9e9e`,
            width: `calc(${clockConfig.width} + 15px)`,
            height: `100%`,
          }}
        >
          <DateSection />
        </div>
      )}
      {
        <div
          className="clock__section"
          style={{
            display: `${showClockCss}`,
            width: `calc(${clockConfig.width} + 15px)`,
            height: `100%`,
          }}
        >
          <Clock />
        </div>
      }
    </div>
  );
};

export default ClockContainer;
