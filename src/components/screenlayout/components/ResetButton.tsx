import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { ScreenContext } from "../ScreenProvider";

const ResetButton: React.FC = () => {
  const { removeAllWidgets } = React.useContext(ScreenContext);
  const handleButtonClick = () => {
    removeAllWidgets();
  };
  return (
    <Button
      className="clear_btn"
      icon={faTrash}
      title="Clear All"
      handleButtonClick={handleButtonClick}
    />
  );
};

export default ResetButton;
