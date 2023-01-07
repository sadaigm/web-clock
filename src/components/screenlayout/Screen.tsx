import React from "react";
import Grid from "../grid/Grid";
import { NewDialog } from "../modal/NewModal";
// import AddButton from "./components/AddButton";
import Fab from "./components/Fab";
import { CenterContainer } from "./components/StyledComponents";
import ScreenProvider from "./ScreenProvider";

function Screen() {
  return (
    <div>
      <CenterContainer style={{ color: "crimson" }}>
        <h1>World Web Clock</h1>
      </CenterContainer>
      <ScreenProvider>
        <NewDialog />
        <Grid />
        <Fab add />
      </ScreenProvider>
    </div>
  );
}

export default Screen;
