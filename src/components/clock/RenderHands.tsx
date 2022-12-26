import React, { useState } from "react";
import { Hands } from "./Clock";
import { ClockContext } from "./ClockProvider";
import Hand from "./Hand";
import { getHandDegree } from "./clockutils";

type RenderHandsProps = {
  hands: (string | Hands)[];
};
const RenderHands: React.FC<RenderHandsProps> = ({ hands }) => {
  const [HandDeg, setHandDeg] = useState<any>({});
  const { timeZone, hours, setHours, minutes, setMinutes } =
    React.useContext(ClockContext);

  React.useEffect(() => {
    const setClock = () => {
      let time = new Date();
      const result = getHandDegree(time, timeZone);
      const { secondDeg, minuteDeg, hoursDeg } = result;
      // console.log({ timeZone, secondDeg, minuteDeg, hoursDeg, hours })
      result.hours !== hours && setHours((p) => result.hours);
      result.minutes !== minutes && setMinutes((p) => result.minutes);
      setHandDeg({ secondDeg, minuteDeg, hoursDeg });
    };
    const interval = setInterval(setClock, 1000);
    setClock();
    return () => {
      clearInterval(interval);
    };
  }, [setHandDeg, timeZone, setHours, hours, minutes, setMinutes]);

  const renderHands = React.useMemo(() => {
    return hands.map((hand, index) => {
      return <Hand key={index} hand={hand} rotationDeg={HandDeg} />;
      // const handId = index
      // const d =
      //     handId === Hands.Second
      //         ? HandDeg.secondDeg
      //         : handId === Hands.Minute
      //         ? HandDeg.minuteDeg
      //         : HandDeg.hoursDeg
      // const deg = Math.floor(d)
      // // console.log({ HandDeg, deg, d })
      // const degrees = new Array(deg).fill('number')
      // return degrees.map((r, index) => (
      //     <Hand
      //         key={`${handId}_${index}`}
      //         hand={hand}
      //         rotationDeg={HandDeg}
      //         id={index}
      //     />
      // ))
    });
  }, [HandDeg, hands]);

  return <>{renderHands}</>;
};

export default RenderHands;
