import styled, { css } from 'styled-components';

const inputBase = css`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.text.light};
  border-radius: 4px;
  font-size: 1rem;
  transition: all ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.text.light}20;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

export const Input = styled.input`
  ${inputBase}
`;

export const TextArea = styled.textarea`
  ${inputBase}
  resize: vertical;
  min-height: 100px;
`;

export const Select = styled.select`
  ${inputBase}
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin-right: ${({ theme }) => theme.spacing.xs};
`; 