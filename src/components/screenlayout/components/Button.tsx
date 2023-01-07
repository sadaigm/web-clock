import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export type ButtonProps = {
  icon?: IconProp;
  handleButtonClick?: () => void;
  label?: string;
  title?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  handleButtonClick,
  label,
  title,
  className,
}) => {
  return (
    <button
      title={title}
      className={`${className || ""} btn `}
      onClick={handleButtonClick}
    >
      {icon && (
        <>
          <FontAwesomeIcon icon={icon} color="white" size="2x" />
          {icon && label && <div style={{ width: "5px" }}></div>}
        </>
      )}
      {label}
    </button>
  );
};

export default Button;
