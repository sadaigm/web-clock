import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { ScreenContext } from "../ScreenProvider";

const ResetButton: React.FC = () => {
  const { removeAllWidgets } = React.useContext(ScreenContext);
  const handleButtonClick = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = confirm(
      "Are you sure you want to delete all widgets ?"
    );
    confirmDelete && removeAllWidgets();
  };
  return (
    <Button
      className="clear_btn"
      icon={faTrash}
      title="Clear All"
      handleButtonClick={handleButtonClick}
      size="2x"
    />
  );
};

export default ResetButton;
