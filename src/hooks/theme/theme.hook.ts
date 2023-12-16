// Vendors
import { useContext } from "react";
// Context
import { UiContext } from "../../context";
// Type
import { UiThemeType } from "../../context/ui/types/ui.context.type";

function useGetTheme() {
  const { theme } = useContext(UiContext);
  return theme;
}

function useSetTheme(theme: UiThemeType) {
  const { handleSetTheme } = useContext(UiContext);
  handleSetTheme(theme);
}

function useSwitchTheme() {
  const { handleSwitchTheme } = useContext(UiContext);
  handleSwitchTheme;
}

export {
  useGetTheme,
  useSetTheme,
  useSwitchTheme
}