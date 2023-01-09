import React from "react";
import { screenSize } from "../grid/device";
import Grid from "../grid/Grid";
import NewModal from "../modal/NewModal";
// import AddButton from "./components/AddButton";
import Fab from "./components/Fab";
import { CenterContainer } from "./components/StyledComponents";
import ScreenProvider from "./ScreenProvider";

function Screen() {
  return (
    <div>
      <CenterContainer
        style={{
          color: "crimson",
          padding: `${window.innerWidth < screenSize.laptop ? "1rem" : "2rem"}`,
        }}
      >
        <h1>World Web Clock</h1>
      </CenterContainer>
      <ScreenProvider>
        <NewModal />
        <Grid />
        <Fab add />
      </ScreenProvider>
    </div>
  );
}

export default Screen;
