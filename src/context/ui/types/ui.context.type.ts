export type UiAlert = {
  display: boolean,
  message: string,
  severity: 'warning' | 'success' | 'error' | 'info'
}

export type UiTypesContext = {
  alert: UiAlert
}

export type UiActionType = { type: '[UI] - Display Alert', payload: UiAlert }