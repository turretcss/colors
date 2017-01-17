// export const DEFAULT_BASE_COLOR = `#${Math.random().toString(16).slice(2, 8)}`;
export const DEFAULT_BASE_COLOR = '#3455DB';

export const DEFAULT_BASE_COLORS = [
  {
    color: '#3455DB',
    name: 'primary',
  },
  {
    color: '#663399',
    name: 'secondary',
  },
  {
    color: '#8B008B',
    name: 'tertiary',
  },
  {
    color: '#CCCCCC',
    name: 'light',
  },
  {
    color: '#666666',
    name: 'grey',
  },
  {
    color: '#333333',
    name: 'dark',
  },
  {
    color: '#D91E18',
    name: 'error',
  },
  {
    color: '#FF4500',
    name: 'warning',
  },
  {
    color: '#00AA00',
    name: 'success',
  },
  {
    color: '#1E90FF',
    name: 'info',
  },
];

export const DEFAULT_ADJUSTERS = [
  {
    enabled: false,
    name: 'alpha',
    shortName: 'a',
    unit: '%'
  },
  {
    enabled: false,
    name: 'saturation',
    unit: '%',
    shortName: 's'
  },
  {
    enabled: false,
    name: 'hue',
    max: 360,
    shortName: 'h'
  },
  {
    enabled: false,
    name: 'lightness',
    unit: '%',
    shortName: 'l'
  },
  {
    enabled: false,
    name: 'tint',
    unit: '%',
    value: 0
  },
  {
    enabled: false,
    name: 'shade',
    unit: '%',
    value: 0
  },
  {
    enabled: false,
    name: 'red',
    max: 255
  },
  {
    enabled: false,
    name: 'green',
    max: 255
  },
  {
    enabled: false,
    name: 'blue',
    max: 255
  },
  {
    enabled: false,
    name: 'whiteness',
    unit: '%',
    shortName: 'w'
  },
  {
    enabled: false,
    name: 'blackness',
    unit: '%',
    shortName: 'b'
  },

  {
    enabled: false,
    name: 'contrast',
    unit: '%',
    value: 0
  }
];

export const SHORT_NAMES_KEY = 'useShortNames';
