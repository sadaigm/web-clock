import React from "react";
import { ClockContext } from "./ClockProvider";
import { MONTHS_VALUES, WEEKDAYS } from "./clockutils";

function DateSection() {
  const { dateValue } = React.useContext(ClockContext);
  const renderDate = React.useMemo(() => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>{WEEKDAYS[dateValue.day]}</h2>
        </div>
        <div
          style={{
            display: "flex",
            flex: "2",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "1px solid #9e9e9e",
          }}
        >
          <span
            style={{ fontSize: "10rem", fontWeight: "800", color: "#3f51b5" }}
          >
            {dateValue.today}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            height: "75px",
            borderTop: "1px solid #9e9e9e",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>{MONTHS_VALUES[dateValue.month] || dateValue.month}</h2>
          <span style={{ width: "5px" }}> </span>
          <h1>{`  ${dateValue.fullYear}`}</h1>
        </div>
      </>
    );
    // return (
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-around",
    //       backgroundColor: "#ffeb3b",
    //       left: "30%",
    //       bottom: "calc(20%)",
    //       transformOrigin: "center bottom",
    //       width: "40%",
    //       opacity: "0.85",
    //       height: "30px",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //       }}
    //     >
    //       {dateValue.today}:{dateValue.month}:{dateValue.fullYear}
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //       }}
    //     >
    //       {dateValue.day}
    //     </div>
    //   </div>
    // );
  }, [dateValue.day, dateValue.fullYear, dateValue.month, dateValue.today]);
  return <>{renderDate}</>;
}

export default DateSection;
