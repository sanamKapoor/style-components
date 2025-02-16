import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Container } from './styles/Container';
import { GlobalStyles } from './styles/Global';
import { AnimatedLogo } from './styles/Button';
import { theme } from './styles/theme';
import { FormDemo } from './components/Form';
import { ButtonDemo } from './components/ButtonDemo';
import { BadgeDemo } from './components/BadgeDemo';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Container>
                <h1>Modern Styled Components</h1>
                <p>A starter template for 2025 and beyond!</p>
                <ButtonDemo />
                <FormDemo />
                <BadgeDemo />
                <AnimatedLogo src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" />
            </Container>
        </ThemeProvider>
    );
}

export default App;
