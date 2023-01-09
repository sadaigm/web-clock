import React, { Dispatch, SetStateAction } from "react";
import { getHandDegree } from "./clockutils";
import { world_timezones } from "./timezone";

export const getTimeZone = (timeZone?: string) => {
  return world_timezones.find((t) => t === timeZone);
};

export enum ClockSize {
  xs,
  sm,
  lg,
  xl,
  xxl,
}

type ClockContextType = {
  size: ClockSize;
  children: React.ReactNode;
  timeZone?: string;
};
type ClockConfigType = {
  width: string;
  height: string;
  bgcolor: string;
  secondHandConfig: HandType;
  minuteHandConfig: HandType;
  hourHandConfig: HandType;
  numberConfig: NumberType;
};
type NumberType = {
  numberFontSize: string;
  numberColor: string;
  fontSize: string;
  fontColor: string;
};
type HandType = {
  width: string;
  bgColor: string;
  opacity?: number;
};
const DAY_BG = "#f3cec2";
const NIGHT_BG = "#242424";
const DAY_HAND_COLOR = "rgba(51, 53, 54)";
const NIGHT_HAND_COLOR = "rgb(206 197 197)";
const DAY_SECOND_HAND_COLOR = "rgb(3, 169, 244)";
const NIGHT_SECOND_HAND_COLOR = "rgb(214, 51, 132)";

const defaultClockConfig: ClockConfigType = {
  height: "100px",
  width: "100px",
  bgcolor: DAY_BG,
  numberConfig: {
    fontColor: "rgb(165, 42, 42)",
    fontSize: "4px",
    numberColor: "rgb(165, 42, 42)",
    numberFontSize: "12px",
  },
  hourHandConfig: {
    width: "15px",
    bgColor: "rgba(165, 42, 42, 0.5)",
    opacity: 0.6,
  },
  minuteHandConfig: {
    width: "10px",
    bgColor: "rgba(165, 42, 42, 0.75)",
    opacity: 0.85,
  },
  secondHandConfig: {
    width: "5px",
    bgColor: "rgba(165, 42, 42, 0.9)",
    opacity: 1,
  },
};
const defaultProviderType = {
  clockConfig: defaultClockConfig,
  setclockConfig: () => {},
  timeZone: getTimeZone(),
  hours: 0,
  minutes: 0,
  setHours: () => {},
  setMinutes: () => {},
  dateValue: {},
  setDateValue: () => {},
  calenderView: false,
  setcalenderView: () => {},
};
export const ClockContext =
  React.createContext<ClockProviderType>(defaultProviderType);
type ClockProviderType = {
  clockConfig: ClockConfigType;
  setclockConfig: Dispatch<SetStateAction<ClockConfigType>>;
  timeZone?: string;
  isDark?: boolean;
  hours: number;
  setHours: Dispatch<SetStateAction<number>>;
  minutes: number;
  setMinutes: Dispatch<SetStateAction<number>>;
  dateValue: any;
  setDateValue: Dispatch<SetStateAction<any>>;
  calenderView: boolean;
  setcalenderView: Dispatch<SetStateAction<boolean>>;
};

const ClockProvider: React.FunctionComponent<ClockContextType> = ({
  size,
  children,
  timeZone,
}) => {
  const [calenderView, setcalenderView] = React.useState(false);
  const [timeZoneVal] = React.useState(getTimeZone(timeZone));
  const data = getHandDegree(new Date(), timeZoneVal);
  const [hours, setHours] = React.useState<number>(data.hours);
  const [minutes, setMinutes] = React.useState<number>(data.minutes);
  const [dark, setDark] = React.useState(false);
  const [dateValue, setDateValue] = React.useState({});
  const [clockConfig, setclockConfig] =
    React.useState<ClockConfigType>(defaultClockConfig);
  React.useEffect(() => {
    let config: ClockConfigType = {
      ...defaultClockConfig,
    } as ClockConfigType;
    if (size === ClockSize.xs) {
      config = {
        ...config,
        height: "100px",
        width: "100px",
        numberConfig: {
          fontColor: "rgb(165, 42, 42)",
          fontSize: "4px",
          numberColor: "rgb(165, 42, 42)",
          numberFontSize: "12px",
        },
        hourHandConfig: {
          width: "8px",
          bgColor: "rgba(165, 42, 42, 0.5)",
          opacity: 0.6,
        },
        minuteHandConfig: {
          width: "5px",
          bgColor: "rgba(165, 42, 42, 0.75)",
          opacity: 0.85,
        },
        secondHandConfig: {
          width: "2px",
          bgColor: "rgba(165, 42, 42, 0.9)",
          opacity: 1,
        },
      };
    } else if (size === ClockSize.sm) {
      config = {
        ...config,
        height: "200px",
        width: "200px",
        numberConfig: {
          fontColor: "rgb(165, 42, 42)",
          fontSize: "8px",
          numberColor: "rgb(165, 42, 42)",
          numberFontSize: "24px",
        },
        hourHandConfig: {
          width: "9px",
          bgColor: "rgba(165, 42, 42, 0.5)",
          opacity: 0.6,
        },
        minuteHandConfig: {
          width: "6px",
          bgColor: "rgba(165, 42, 42, 0.75)",
          opacity: 0.85,
        },
        secondHandConfig: {
          width: "3px",
          bgColor: "rgba(165, 42, 42, 0.9)",
          opacity: 1,
        },
      };
    } else if (size === ClockSize.lg) {
      config = {
        ...config,
        height: "300px",
        width: "300px",
        numberConfig: {
          fontColor: "rgb(165, 42, 42)",
          fontSize: "9px",
          numberColor: "rgb(165, 42, 42)",
          numberFontSize: "32px",
        },
        hourHandConfig: {
          width: "11px",
          bgColor: "rgba(165, 42, 42, 0.5)",
          opacity: 0.6,
        },
        minuteHandConfig: {
          width: "8px",
          bgColor: "rgba(165, 42, 42, 0.75)",
          opacity: 0.85,
        },
        secondHandConfig: {
          width: "4px",
          bgColor: "rgba(165, 42, 42, 0.9)",
          opacity: 1,
        },
      };
    } else if (size === ClockSize.xl) {
      config = {
        ...config,
        height: "400px",
        width: "400px",
        numberConfig: {
          fontColor: "rgb(165, 42, 42)",
          fontSize: "10px",
          numberColor: "rgb(165, 42, 42)",
          numberFontSize: "36px",
        },
        hourHandConfig: {
          width: "13px",
          bgColor: "rgba(165, 42, 42, 0.5)",
          opacity: 0.6,
        },
        minuteHandConfig: {
          width: "10px",
          bgColor: "rgba(165, 42, 42, 0.75)",
          opacity: 0.85,
        },
        secondHandConfig: {
          width: "5px",
          bgColor: "rgba(165, 42, 42, 0.9)",
          opacity: 1,
        },
      };
    } else if (size === ClockSize.xxl) {
      config = {
        ...config,
        height: "500px",
        width: "500px",
        numberConfig: {
          fontColor: "rgb(165, 42, 42)",
          fontSize: "11px",
          numberColor: "rgb(165, 42, 42)",
          numberFontSize: "42px",
        },
      };
    }
    setclockConfig((p) => {
      return { ...p, ...config };
    });
  }, [size]);

  React.useEffect(() => {
    if ((-1 < hours && hours < 6) || (24 > hours && hours >= 18)) {
      // night mode
      setDark(() => true);
    } else {
      // day mode
      setDark(() => false);
    }
  }, [hours]);

  React.useEffect(() => {
    setclockConfig((config) => {
      const newConfig = {
        ...config,
        bgcolor: `${dark ? NIGHT_BG : DAY_BG}`,
        hourHandConfig: {
          ...config.hourHandConfig,
          bgColor: `${dark ? NIGHT_HAND_COLOR : DAY_HAND_COLOR}`,
        },
        minuteHandConfig: {
          ...config.minuteHandConfig,
          bgColor: `${dark ? NIGHT_HAND_COLOR : DAY_HAND_COLOR}`,
        },
        secondHandConfig: {
          ...config.secondHandConfig,
          bgColor: `${dark ? NIGHT_SECOND_HAND_COLOR : DAY_SECOND_HAND_COLOR}`,
        },
        numberConfig: {
          ...config.numberConfig,
          numberColor: `${dark ? NIGHT_HAND_COLOR : DAY_HAND_COLOR}`,
          fontColor: `${dark ? NIGHT_HAND_COLOR : DAY_HAND_COLOR}`,
        },
      };
      return { ...newConfig };
    });
  }, [dark]);

  const renderProvider = React.useMemo((): React.ReactElement<
    any,
    any
  > | null => {
    return (
      <ClockContext.Provider
        key={timeZoneVal}
        value={{
          clockConfig,
          setclockConfig,
          timeZone: timeZoneVal,
          isDark: dark,
          hours,
          setHours,
          minutes,
          setMinutes,
          dateValue,
          setDateValue,
          calenderView,
          setcalenderView,
        }}
      >
        {children}
      </ClockContext.Provider>
    );
  }, [
    timeZoneVal,
    clockConfig,
    dark,
    hours,
    minutes,
    dateValue,
    calenderView,
    children,
  ]);

  return <>{renderProvider} </>;
};

export default ClockProvider;
