export const getThemeClass = (key: string, themeColor: string) => {
  return `checkbox-${key}-${themeColor} `;
};

export const getSizeClass = (size: string) => {
  if (size === 'small') {
    return 'input-small';
  }
  if (size === 'large') {
    return 'input-large';
  }
  return 'input-medium';
};
