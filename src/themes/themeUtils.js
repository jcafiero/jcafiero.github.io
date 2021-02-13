export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';
export const DEFAULT_THEME = LIGHT_THEME;
export const THEME_CHANGE_EVENT = 'THEME_CHANGED';

export function currentTheme() {
  if (localStorage && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
}

export function setTheme(theme) {
  const themeChangeEvent = new CustomEvent(THEME_CHANGE_EVENT, { detail: { theme } });

  localStorage.setItem('theme', theme);

  document.dispatchEvent(themeChangeEvent);
}