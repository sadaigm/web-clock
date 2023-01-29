import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ScreenContext } from "../ScreenProvider";
import { Widget } from "../widget.types";
import Button from "./Button";

export type TrashButtonProps = {
  widget: Widget;
};

const TrashButton: React.FC<TrashButtonProps> = ({ widget }) => {
  const { removeWidget } = React.useContext(ScreenContext);
  const handleButtonClick = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = confirm(
      "Are you sure you want to delete this widget \nClock : " +
        widget.timezone +
        " ?"
    );
    confirmDelete && removeWidget(widget);
  };
  return (
    <Button
      className="trash_btn"
      icon={faTrashAlt}
      title="Remove"
      handleButtonClick={handleButtonClick}
      size="xs"
    />
  );
};

export default TrashButton;
