import React, { Dispatch, SetStateAction } from "react";
import {
  addWidgetEntry,
  getWidgets,
  removeWidgetEntry,
  removeWidgets,
} from "./screenUtils";

export type ScreenContextType = {
  widgets: Array<any>;
  setWidgets: Dispatch<SetStateAction<any>>;
  addWidget: (widget: any) => void;
  removeWidget: (widget: any) => void;
  removeAllWidgets: () => void;
  closeModal: boolean;
  setCloseModal: Dispatch<SetStateAction<boolean>>;
};
export const defaultScreenContextValues = {
  widgets: [],
  setWidgets: () => {},
  addWidget: () => {},
  removeWidget: () => {},
  removeAllWidgets: () => {},
  closeModal: false,
  setCloseModal: () => {},
};
export const ScreenContext = React.createContext<ScreenContextType>(
  defaultScreenContextValues
);

export type ScreenProviderType = {
  children: React.ReactNode;
};

const ScreenProvider: React.FC<ScreenProviderType> = ({ children }) => {
  const [widgets, setWidgets] = React.useState<any>(getWidgets());
  const [closeModal, setCloseModal] = React.useState<boolean>(true);
  const addWidget = (widget: any) => {
    const newWidgets = addWidgetEntry(widget, widgets);
    setWidgets([...newWidgets]);
  };

  const removeWidget = (widget: any) => {
    const newWidgets = removeWidgetEntry(widget, widgets);
    setWidgets([...newWidgets]);
  };

  const removeAllWidgets = () => {
    const newWidgets = removeWidgets();
    setWidgets([...newWidgets]);
  };
  return (
    <ScreenContext.Provider
      value={{
        widgets,
        setWidgets,
        addWidget,
        removeWidget,
        removeAllWidgets,
        closeModal,
        setCloseModal,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;
