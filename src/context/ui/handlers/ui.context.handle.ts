// Types
import { UiThemeType } from "../types/ui.context.type";

function setLocalDataTheme(theme: UiThemeType) {
  localStorage.setItem('data-theme', theme);
}

function setAttributeDataTheme(theme: UiThemeType) {
  const htmlElement = document.documentElement;
  htmlElement.setAttribute('data-theme', theme);
}

function getLocalDataTheme(): UiThemeType {
  const systemTheme = (window && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  const localData = localStorage.getItem('data-theme');
  
  if(!localData) {
    return systemTheme;
  }

  const theme: UiThemeType = (localData && localData !== 'dark') ? 'light' : 'dark';
  return theme;
}


export {
  setLocalDataTheme,
  setAttributeDataTheme,
  getLocalDataTheme,
}