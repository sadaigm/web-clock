import React from "react";
import { ClockContext } from "./ClockProvider";

type NumberProps = {
  index: number;
  total: number;
};

const Number: React.FC<NumberProps> = ({ index, total }) => {
  const { clockConfig } = React.useContext(ClockContext);
  const numberStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    fontSize: clockConfig.numberConfig.fontSize,
    color: clockConfig.numberConfig.fontColor,
  };

  const deg = 360 / total;
  const rotationDeg = index * deg;
  const isNumber = index % 5 === 0;
  let customStyle: React.CSSProperties = {};
  if (isNumber) {
    customStyle = {
      ...customStyle,
      fontSize: clockConfig.numberConfig.numberFontSize,
      color: clockConfig.numberConfig.numberColor,
    };
  }

  return (
    <div
      style={{
        ...numberStyle,
        transform: `rotate(${rotationDeg}deg)`,
        ...customStyle,
      }}
      className={`number number${index}`}
    >
      {isNumber ? (
        <div
          style={{
            transform: `rotate(${360 - rotationDeg}deg)`,
            position: "absolute",
          }}
        >
          {index / 5}
        </div>
      ) : (
        "I"
      )}
    </div>
  );
};

export default Number;
