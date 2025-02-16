import styled from 'styled-components';

export const Container = styled.div<{ maxWidth?: string }>`
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth || '1200px'};
    padding: 0 ${({ theme }) => theme.spacing.md};
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 0 ${({ theme }) => theme.spacing.sm};
    }
`;
