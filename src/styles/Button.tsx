import styled, { css, keyframes } from 'styled-components';

const buttonBase = css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    border-radius: 8px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.default};
    font-size: 1rem;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const Button = styled.button<{
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
}>`
    ${buttonBase}

    ${({ variant = 'primary', theme }) =>
        variant === 'primary' &&
        css`
            background: ${theme.colors.primary};
            color: white;

            &:hover:not(:disabled) {
                background: ${theme.colors.secondary};
                transform: translateY(-2px);
            }
        `}
    
  ${({ variant = 'primary', theme }) =>
        variant === 'secondary' &&
        css`
            background: ${theme.colors.secondary};
            color: white;

            &:hover:not(:disabled) {
                background: ${theme.colors.primary};
                transform: translateY(-2px);
            }
        `}
    
  ${({ variant = 'primary', theme }) =>
        variant === 'outline' &&
        css`
            background: transparent;
            border: 2px solid ${theme.colors.primary};
            color: ${theme.colors.primary};

            &:hover:not(:disabled) {
                background: ${theme.colors.primary};
                color: white;
            }
        `}
    
  ${({ size = 'medium', theme }) =>
        size === 'small' &&
        css`
            padding: ${theme.spacing.xs} ${theme.spacing.sm};
            font-size: 0.875rem;
        `}
    
  ${({ size = 'medium', theme }) =>
        size === 'large' &&
        css`
            padding: ${theme.spacing.md} ${theme.spacing.xl};
            font-size: 1.125rem;
        `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
    height: 200px;
    border-radius: 50%;
    animation: ${rotate} infinite 3s linear;
    box-shadow: ${({ theme }) => theme.shadows.md};

    &:hover {
        animation-duration: 1.5s;
    }
`;
