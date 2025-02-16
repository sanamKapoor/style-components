export const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
    primary: '#2C3E50',
    secondary: '#E74C3C',
    success: '#27AE60',
    warning: '#F1C40F',
    error: '#E74C3C',
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
      light: '#BDC3C7'
    }
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    }
  },
  transitions: {
    default: '0.3s ease-in-out'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)'
  }
} as const;

export type Theme = typeof theme; 