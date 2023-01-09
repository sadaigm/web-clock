import React from "react";
import { ClockContext } from "./ClockProvider";
import { getBG } from "./clockutils";
import Number from "./Number";
import RenderHands from "./RenderHands";
import "./clock.css";

export const clockStyle = {
  width: "400px",
  height: "400px",
};
export enum Hands {
  Hour,
  Minute,
  Second,
}

const Clock = () => {
  const numbers = new Array(60).fill("number");
  const hands = Object.values(Hands).filter(
    (value) => typeof value === "number"
  );
  const { clockConfig, timeZone, isDark, minutes } =
    React.useContext(ClockContext);

  const getImage = React.useMemo(() => {
    const imageId = getBG(minutes);
    return imageId ? (
      <div
        style={{
          height: "75%",
          width: "75%",
          position: "relative",
        }}
      >
        <img
          height="100%"
          width="100%"
          title="Captain_America"
          style={{ objectFit: "cover", borderRadius: "50%" }}
          src={imageId}
          alt="Captain_America"
        />
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: `${
              isDark ? "rgb(0 0 0 / 60%)" : "rgb(242 207 195 / 55%)"
            }`,
            borderRadius: "50%",
          }}
        ></div>
      </div>
    ) : (
      <div
        style={{
          width: "5%",
          height: "5%",
          backgroundColor: "#686868",
          borderRadius: "50%",
          zIndex: 10,
        }}
      ></div>
    );
  }, [minutes, isDark]);

  const renderClock = React.useMemo(() => {
    return (
      <div
        style={{
          ...clockStyle,
          width: `${clockConfig.width}`,
          height: `${clockConfig.height}`,
          backgroundColor: `${clockConfig.bgcolor}`,
          position: "relative",
          borderRadius: "50%",
          color: "#a52a2a",
        }}
        className="clock"
      >
        <div
          style={{
            ...clockStyle,
            width: `${clockConfig.width}`,
            height: `${clockConfig.height}`,
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {getImage}
        </div>
        <RenderHands hands={hands} />
        {numbers.map((no, index) => (
          <Number key={index + 1} index={index + 1} total={numbers.length} />
        ))}
      </div>
    );
  }, [
    clockConfig.bgcolor,
    clockConfig.height,
    clockConfig.width,
    getImage,
    hands,
    numbers,
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "100%",
        // border: "1px solid grey",

        flexDirection: "column-reverse",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "75px",
          borderTop: "1px solid #9e9e9e",
          justifyContent: "center",
          color: "cornflowerblue",
        }}
      >
        <h3 title={`${timeZone}`}>{timeZone}</h3>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "5px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          width: "100%",
          //   border: "1px solid grey",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderClock}
      </div>
    </div>
  );
};

export default Clock;
