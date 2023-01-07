import React from "react";
import AddButton, { AddButtonType } from "./AddButton";
import { FabWrapper } from "./StyledComponents";

const Fab: React.FC<AddButtonType> = (props) => {
  return (
    <FabWrapper className="fab">
      <AddButton {...props} />
    </FabWrapper>
  );
};

export default Fab;
