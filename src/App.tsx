import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header"
import { Contianter } from "./styles/Container"
import { GlobalStyles } from "./styles/Global";
import { AnimatedLogo, NewStyledButton, StyledButton, SubmitStypedButton } from "./styles/Button";
import { StyledLink } from "./styles/Link";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Contianter width="1000px">
        <h1>Hello</h1>
        <p>Here is the Gold!</p>
        <StyledButton type="submit">Start</StyledButton>
        <NewStyledButton as="a">New</NewStyledButton>
        <SubmitStypedButton>Send</SubmitStypedButton>
        <StyledLink>Apply</StyledLink>
        <br />
        <AnimatedLogo src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" />
      </Contianter>
    </ThemeProvider>
  );
}

export default App
