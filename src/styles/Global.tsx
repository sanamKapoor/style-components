import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
    color: ${({ theme }) => theme.colors.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
    line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
