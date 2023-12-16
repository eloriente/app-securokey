// Vendors
import { FC, createContext, useEffect, useReducer } from "react";
// Types 
import { UiActionType, UiAlert, UiThemeType, UiTypesContext } from "./types/ui.context.type";
// Handle
import { getLocalDataTheme, setAttributeDataTheme, setLocalDataTheme } from "./handlers/ui.context.handle";

interface UiContextProps extends UiTypesContext {
  theme?: 'dark' | 'light';
  handleAlertMessage: (alert: UiAlert) => void;
  handleSetTheme: (theme: UiThemeType) => void;
  handleSwitchTheme: () => void;
}

export const UiContext = createContext({} as UiContextProps);

const UI_INITIAL_STATE: UiTypesContext = {
  alert: {
    display: false,
    message: '',
    severity: 'success'
  },
  theme: 'dark'
}

export const uiReducer = ( state: UiTypesContext, action: UiActionType ): UiTypesContext => {

  switch (action.type) {
  case '[UI] - Display Alert':
    return {
      ...state,
      alert: action.payload.alert,
    };

  case '[UI] - Set Theme':
    return {
      ...state,
      theme: action.payload.theme,
    };

  case '[UI] - Swwith Theme':
    return {
      ...state,
      theme: action.payload.theme
    }

  default:
    return state;
  };
};

export const UiProvider:FC<React.PropsWithChildren> = ({children}) => {

  const [state, dispatch] = useReducer( uiReducer , UI_INITIAL_STATE );

  const handleAlertMessage = (alert: UiAlert) => {
    dispatch({ type: '[UI] - Display Alert', payload: {...{ alert }} });
  };

  const handleSetTheme = (theme: UiThemeType) => {
    dispatch({ type: '[UI] - Set Theme', payload: {...{ theme }}});
    setAttributeDataTheme(theme);
    setLocalDataTheme(theme);
  }

  const handleSwitchTheme = () => {
    const theme = (state.theme === 'dark' ? 'light' : 'dark');
    handleSetTheme(theme);
  }

  useEffect(() => {
    handleSetTheme(getLocalDataTheme());
  }, []);

  return (
    <UiContext.Provider value={{
      ...state,
      handleAlertMessage,
      handleSetTheme,
      handleSwitchTheme
    }}>
      { children }
    </UiContext.Provider>
  )
}