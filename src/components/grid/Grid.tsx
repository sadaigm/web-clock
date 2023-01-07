import React from "react";
import styled from "styled-components";
import { ClockWrapper } from "../clock/ClockWrapper";
import ResetButton from "../screenlayout/components/ResetButton";
import { ScreenContext } from "../screenlayout/ScreenProvider";
import { device } from "./device";
import { screenSize } from "../grid/device";
import "./grid.css";

const smallScreen = screenSize.laptopL > window.innerWidth;

export const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${smallScreen ? "center" : "flex-start"};
  padding: 2px;
  // overflow-y: auto;
`;
export const Cell = styled.div`
  height: auto;
  flex-basis: auto;
  -ms-flex: auto;
  width: auto;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding: 10px;
  @media ${device.tablet} {
    flex-basis: 50%;
  }
  @media ${device.laptop} {
    flex-basis: 33.33%;
  }

  @media ${device.desktop} {
    flex-basis: 20%;
  }
`;
const Grid = () => {
  const { widgets } = React.useContext(ScreenContext);
  const renderGrid = React.useMemo(() => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="clear_section">
          <ResetButton />
        </div>
        <StyledGrid>
          {widgets.map((widget) => (
            <Cell key={widget.id}>
              <ClockWrapper key={widget.id} timeZone={widget.timezone} />
            </Cell>
          ))}
        </StyledGrid>
      </div>
    );
  }, [widgets]);
  return <div>{renderGrid}</div>;
};

export default Grid;
