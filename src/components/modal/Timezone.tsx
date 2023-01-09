import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { world_timezones } from "../clock/timezone";
import { screenSize } from "../grid/device";
import {
  SelectedValue,
  CustomAutoComplete,
  SizedBox,
  CustomMenuList,
  CustomMenu,
  CustomMenuListItem,
  CustomMenuListItemActive,
} from "./styledComponents";

export type TimezoneProps = {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
};
const Timezone: React.FC<TimezoneProps> = ({
  selectedValue,
  setSelectedValue,
}) => {
  const smallScreen = window.innerWidth < screenSize.laptop;
  const [filteredTimeZones, setFilteredTimeZones] =
    React.useState(world_timezones);
  const [inputValue, setinputValue] = React.useState("");
  const handleSelect = React.useCallback(
    (value: string) => {
      setSelectedValue(value);
    },
    [setSelectedValue]
  );
  const handleUnSelect = React.useCallback(
    (value: string) => {
      setSelectedValue("");
      setinputValue("");
    },
    [setSelectedValue]
  );

  const handleChange = React.useCallback((event: any) => {
    setinputValue(event.target.value);
    if (event.target.value) {
      const filtered = world_timezones.filter((t) =>
        t.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredTimeZones(filtered);
    } else {
      setFilteredTimeZones(world_timezones);
    }
  }, []);

  const resetInput = React.useCallback(() => {
    setinputValue("");
    setFilteredTimeZones(world_timezones);
  }, []);

  return (
    <>
      <div
        style={{
          width: `${smallScreen ? "300px" : "450px"}`,
        }}
        className="form-group"
      >
        <label htmlFor="">Select Timezone :</label>
        <SelectedValue>{selectedValue}</SelectedValue>
        <SizedBox height="10px" />
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <CustomAutoComplete
            value={inputValue}
            placeholder="Enter Timezone i.e. Asia/Kolkata"
            onChange={handleChange}
          />
          <span
            style={{
              marginLeft: "-30px",
              cursor: `${inputValue.length > 0 ? "pointer" : "none"} `,
            }}
          >
            <FontAwesomeIcon
              title="Clear Text"
              color={inputValue.length > 0 ? "red" : "grey"}
              icon={faXmarkCircle}
              onClick={resetInput}
            />
          </span>
        </div>
        <SizedBox height="10px" />
        <CustomMenu>
          <CustomMenuList>
            {filteredTimeZones.map((w) =>
              w === selectedValue ? (
                <CustomMenuListItemActive
                  onClick={() => {
                    handleUnSelect(w);
                  }}
                  key={w}
                  value={w}
                >
                  {w}
                </CustomMenuListItemActive>
              ) : (
                <CustomMenuListItem
                  onClick={() => {
                    handleSelect(w);
                  }}
                  key={w}
                  value={w}
                >
                  {w}
                </CustomMenuListItem>
              )
            )}
          </CustomMenuList>
        </CustomMenu>
      </div>
    </>
  );
};

export default Timezone;
