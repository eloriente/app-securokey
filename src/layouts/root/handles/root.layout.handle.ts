// Hooks
import { useSetTheme } from '../../../hooks/theme/theme.hook';

function handleSetLayoutTheme() {
  const systemThemePreference = (window && window.matchMedia('media(prefers-color-sheme: dark)').matches) ? 'dark' : 'light';
  const localThemeStored = localStorage.getItem('data-theme');

  if(!localThemeStored) {
    useSetTheme(systemThemePreference);
  }else {
    useSetTheme((localThemeStored === 'dark') ? 'dark' : 'light');
  }
}

export {
  handleSetLayoutTheme
}