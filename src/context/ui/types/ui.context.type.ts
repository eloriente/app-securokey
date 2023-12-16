export type UiThemeType =
  | 'dark'
  | 'light'

export type UiAlert = {
  display?: boolean,
  message?: string,
  severity?: 'warning' | 'success' | 'error' | 'info'
}

export type UiTypesContext = {
  alert?: UiAlert,
  theme?: UiThemeType,
}

export type UiTypeAction = 
  | '[UI] - Display Alert'
  | '[UI] - Set Theme'
  | '[UI] - Swwith Theme'

export type UiActionType = { 
  type: UiTypeAction, 
  payload: UiTypesContext
}