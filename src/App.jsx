import {
  Typography,
  createTheme,
  ThemeProvider,
  Box,
  Container,
} from "@mui/material";
import bgImageDesktop from "./assets/images/background-pattern-desktop.svg";
import FaqAccordion from "./components/faqAccordion.jsx";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Work Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    spacing: 0,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "hsl(275, 100%, 97%)",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            height: "30%",
            backgroundImage: `url(${bgImageDesktop})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <Box sx={{
          position: "absolute",
          top: "400px",
        }}>
          <FaqAccordion/>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
