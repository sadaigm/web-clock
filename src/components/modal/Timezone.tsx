import React from "react";
import { world_timezones } from "../clock/timezone";
import { CustomSelect, SizedBox } from "./styledComponents";

export type TimezoneProps = {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
};
const Timezone: React.FC<TimezoneProps> = ({
  selectedValue,
  setSelectedValue,
}) => {
  const handleSelect = React.useCallback(
    (event: any) => {
      setSelectedValue(event.target.value);
    },
    [setSelectedValue]
  );
  return (
    <>
      <div className="form-group">
        <label htmlFor="">Select Timezone</label>
        <SizedBox height="10px" />
        <CustomSelect value={selectedValue} onChange={handleSelect}>
          {world_timezones.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </CustomSelect>
      </div>
    </>
  );
};

export default Timezone;
