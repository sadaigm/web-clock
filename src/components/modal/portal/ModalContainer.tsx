import React from "react";
import { ModalContainerDiv } from "../styledComponents";
import Portal from "./Portal";
export type ModalContainerProps = {
  onClose?: () => void;
  children: React.ReactNode;
};
const ModalContainer: React.FunctionComponent<ModalContainerProps> = (
  props
) => {
  return (
    <Portal>
      <div className="modal" onClick={props.onClose}>
        <ModalContainerDiv
          style={{
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          {props.children}
        </ModalContainerDiv>
      </div>
    </Portal>
  );
};

export default ModalContainer;
