import styled, { css } from 'styled-components';
import { flexCenter } from './mixins';

export const Grid = styled.div<{
  columns?: number;
  gap?: string;
  responsive?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
  gap: ${({ gap = '1rem' }) => gap};

  ${({ responsive }) =>
    responsive &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const Flex = styled.div<{
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between';
  gap?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: ${({ align = 'start' }) => align};
  justify-content: ${({ justify = 'start' }) =>
    justify === 'between' ? 'space-between' : justify};
  gap: ${({ gap = '0' }) => gap};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
`;

export const Card = styled.div<{ padding?: string; hoverable?: boolean }>`
  background: ${({ theme }) => theme.colors.body};
  border-radius: 8px;
  padding: ${({ padding = '1rem' }) => padding};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.default};

  ${({ hoverable }) =>
    hoverable &&
    css`
      cursor: pointer;
      &:hover {
        transform: translateY(-4px);
        box-shadow: ${({ theme }) => theme.shadows.md};
      }
    `}
`;

export const Badge = styled.span<{
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}>`
  ${flexCenter};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  
  ${({ variant = 'primary', theme }) => css`
    background: ${theme.colors[variant]}20;
    color: ${theme.colors[variant]};
  `}
`;

export const Overlay = styled.div<{ blur?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  ${({ blur }) => blur && 'backdrop-filter: blur(4px);'}
  z-index: 100;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.body};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 101;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
`; 