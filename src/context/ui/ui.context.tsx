// Vendors
import { FC, createContext, useReducer } from "react";
import { UiActionType, UiAlert, UiTypesContext } from "./types/ui.context.type";

interface UiContextProps extends UiTypesContext {
  handleAlertMessage: (alert: UiAlert) => void;
}

export const UiContext = createContext({} as UiContextProps);

const UI_INITIAL_STATE: UiTypesContext = {
  alert: {
    display: false,
    message: '',
    severity: 'success'
  }
}

export const uiReducer = ( state: UiTypesContext, action: UiActionType ): UiTypesContext => {

  switch (action.type) {
  case '[UI] - Display Alert':
    return {
      ...state,
      alert: action.payload
    };

  default:
    return state;
  }

};

export const UiProvider:FC<React.PropsWithChildren> = ({children}) => {

  const [state, dispatch] = useReducer( uiReducer , UI_INITIAL_STATE );

  const handleAlertMessage = (alert: UiAlert) => {
    dispatch({ type: '[UI] - Display Alert', payload: alert });
  };

  return (
    <UiContext.Provider value={{
      ...state,
      handleAlertMessage
    }}>
      { children }
    </UiContext.Provider>
  )
}