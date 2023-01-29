import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export type ButtonProps = {
  icon?: IconProp;
  handleButtonClick?: () => void;
  label?: string;
  title?: string;
  className?: string;
  size?: SizeProp;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  handleButtonClick,
  label,
  title,
  className,
  size,
}) => {
  const getIcon = () => {
    if (icon) {
      const iconProps = {
        size,
        icon,
      };

      return (
        icon && (
          <>
            <FontAwesomeIcon color="white" {...iconProps} />
            {icon && label && <div style={{ width: "5px" }}></div>}
          </>
        )
      );
    }
    return null;
  };

  return (
    <button
      title={title}
      className={`${className || ""} btn `}
      onClick={handleButtonClick}
    >
      {getIcon()}
      {label}
    </button>
  );
};

export default Button;
