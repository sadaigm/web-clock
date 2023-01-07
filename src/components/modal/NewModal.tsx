import React from "react";
import { ScreenContext } from "../screenlayout/ScreenProvider";
import ModalContainer from "./portal/ModalContainer";
import { CardAction, ContainerDiv, SizedBox } from "./styledComponents";
import Timezone from "./Timezone";

export const NewDialog: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState("Asia/Kolkata");
  const { closeModal, setCloseModal, addWidget } =
    React.useContext(ScreenContext);
  const closeModalDialog = React.useCallback(() => {
    setCloseModal(true);
  }, [setCloseModal]);

  const renderDialog = React.useMemo(
    () =>
      closeModal ? null : (
        <ModalContainer>
          <ContainerDiv
            border="none"
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              borderBottom: "1px solid brown",
            }}
            compType="column"
          >
            <h2>Add Clock</h2>
          </ContainerDiv>
          <SizedBox height="10px" />

          <Timezone
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />

          <SizedBox height="10px" />
          <CardAction
            height="60px"
            style={{
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => {
                closeModalDialog();
              }}
              className="btn btn-danger"
            >
              Cancel
            </button>
            <SizedBox width="10px" />
            <button
              onClick={() => {
                addWidget({ id: Date.now(), timezone: selectedValue });
                closeModalDialog();
              }}
              className="btn btn-success"
            >
              Confirm
            </button>
          </CardAction>
        </ModalContainer>
      ),
    [addWidget, closeModal, closeModalDialog, selectedValue]
  );
  return renderDialog;
};

const NewModal = () => {
  return <div>NewModal</div>;
};

export default NewModal;
