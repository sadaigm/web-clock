import React from "react";
import { ScreenContext } from "../ScreenProvider";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./button.css";
import Button from "./Button";

const AddButton: React.FC<AddButtonType> = ({
  handleClick,
  label,
  add,
  remove,
}) => {
  const { setCloseModal } = React.useContext(ScreenContext);
  const handleButtonClick = () => {
    setCloseModal(false);
  };
  return (
    <Button
      label={label}
      icon={faPlus}
      className="add_btn"
      handleButtonClick={handleButtonClick}
    />
  );
};

export type AddButtonType = {
  label?: string;
  handleClick?: () => void;
  add?: boolean;
  remove?: boolean;
};

export default AddButton;
