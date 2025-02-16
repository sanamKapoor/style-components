import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Container } from './styles/Container';
import { GlobalStyles } from './styles/Global';
import { AnimatedLogo } from './styles/Button';
import { theme } from './styles/theme';
import { FormDemo } from './components/Form';
import { ButtonDemo } from './components/ButtonDemo';
import { BadgeDemo } from './components/BadgeDemo';
import Link from './components/Link';
import { StyledLink } from './styles/Link';
import { Flex, Grid } from './styles/Layout';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Container>
                <Flex direction="column" gap="1rem">
                    <h1>Modern Styled Components</h1>
                    <p>A starter template for 2025 and beyond!</p>
                    <Grid columns={2} gap="1rem">
                        <Link className="link">Hello</Link>
                        <StyledLink className="link">Hello</StyledLink>
                        <AnimatedLogo src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" />
                    </Grid>
                </Flex>
                <ButtonDemo />
                <FormDemo />
                <BadgeDemo />
            </Container>
        </ThemeProvider>
    );
}

export default App;
