import React from "react";
import TrashButton from "../screenlayout/components/TrashButton";
import { Widget } from "../screenlayout/widget.types";
// import Clock from "./Clock";
import ClockContainer from "./ClockContainer";
import ClockProvider, { ClockSize } from "./ClockProvider";
import { selectedlist } from "./timezone";
import ToggleButton from "./ToggleButton";
type ClockProps = {
  widget: Widget;
  size?: ClockSize;
  timeZone?: string;
};

export const ClockWrapper: React.FC<ClockProps> = ({
  size,
  timeZone,
  widget,
}) => {
  return (
    <div
      key={timeZone}
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "5px",
      }}
    >
      <ClockProvider
        key={timeZone}
        size={size !== undefined ? size : ClockSize.lg}
        timeZone={timeZone}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            boxShadow: "0 0 5px 5px #9e9e9e82",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <TrashButton widget={widget} />
          </div>
          <ClockContainer key={timeZone} />
          <ToggleButton />
        </div>
      </ClockProvider>
    </div>
  );
};
export const CLOCKLIST_WORKSPACE = "ClockList";
const ClockList: React.FC<ClockProps> = () => {
  return (
    <div
      style={{
        width: "calc( 100% - 5px )",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {/*
      * example snippet for different Clock options
      *
      <ClockWrapper size={ClockSize.xs} />
            <ClockWrapper size={ClockSize.sm} timeZone="America/New_York" />
            <ClockWrapper
                key={'Europe/London'}
                size={ClockSize.lg}
                timeZone="Europe/London"
            />
            <ClockWrapper size={ClockSize.xl} timeZone="Asia/Kolkata" />
            <ClockWrapper
                key="America/Toronto"
                size={ClockSize.xl}
                timeZone="America/Toronto"
            /> */}
      {/* <ClockWrapper size={ClockSize.xl} />
            <ClockWrapper size={ClockSize.xl} timeZone="America/New_York" />
            <ClockWrapper
                key={'Europe/London'}
                size={ClockSize.xl}
                timeZone="Europe/London"
            /> */}
      {selectedlist.map((t, index) => (
        <ClockWrapper
          widget={{} as Widget}
          key={t}
          size={ClockSize.lg}
          timeZone={t}
        />
      ))}

      {/* <ClockWrapper /> */}
    </div>
  );
};

export default ClockList;
