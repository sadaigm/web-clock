import React from "react";
import { Hands } from "./Clock";
import { ClockContext } from "./ClockProvider";

type HandProps = {
  hand: string | Hands;
  rotationDeg: any;
  id?: number;
};

const Hand: React.FC<HandProps> = ({ hand, rotationDeg, id }) => {
  const {
    clockConfig: { hourHandConfig, minuteHandConfig, secondHandConfig },
  } = React.useContext(ClockContext);
  let handStyle: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "red",
    left: "50%",
    bottom: "50%",
    transformOrigin: "bottom",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  };

  if (hand === Hands.Hour) {
    const backgroundColor = `${hourHandConfig.bgColor}`;
    const transform = `translateX(-50%) rotate(${rotationDeg.hoursDeg}deg)`;

    handStyle = {
      ...handStyle,
      ...hourHandConfig,
      height: "35%",
      transform,
    };
    handStyle = {
      ...handStyle,
      backgroundColor,
    };
  } else if (hand === Hands.Minute) {
    const backgroundColor = `${minuteHandConfig.bgColor}`;
    const transform = `translateX(-50%) rotate(${rotationDeg.minuteDeg}deg)`;
    handStyle = {
      ...handStyle,
      ...minuteHandConfig,
      height: "40%",
      transform,
      backgroundColor,
    };
    handStyle = {
      ...handStyle,
    };
  } else if (hand === Hands.Second) {
    const backgroundColor = `${secondHandConfig.bgColor}`;
    const transform = `translateX(-50%) rotate(${rotationDeg.secondDeg}deg)`;
    // let bg = "rgba(165, 42, 42, 0.9)";
    // if (id && id < rotationDeg.secondDeg) {
    //   bg = "rgba(165, 42, 42, 0.7)";
    // } else if (id && id === rotationDeg.secondDeg) {
    //   bg = "rgba(165, 42, 42, 0.9)";
    // }
    handStyle = {
      ...handStyle,
      ...secondHandConfig,
      height: "45%",
      transform,
      backgroundColor,
    };
    handStyle = {
      ...handStyle,
    };
  }

  return <div style={handStyle} className={`hand ${hand}`}></div>;
};

export default Hand;
