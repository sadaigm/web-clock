import React from "react";
import Clock from "./Clock";
import ClockProvider, { ClockSize } from "./ClockProvider";
import { selectedlist } from "./timezone";
type ClockProps = {
  size?: ClockSize;
  timeZone?: string;
};

export const ClockWrapper: React.FC<ClockProps> = ({ size, timeZone }) => {
  return (
    <div
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
        <Clock />
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
        <ClockWrapper key={t} size={ClockSize.lg} timeZone={t} />
      ))}

      {/* <ClockWrapper /> */}
    </div>
  );
};

export default ClockList;
