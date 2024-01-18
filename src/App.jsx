import {
  Typography,
  createTheme,
  ThemeProvider,
  Box,
  Container,
} from "@mui/material";
import bgImageDesktop from "./assets/images/background-pattern-desktop.svg";

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
        {/* <img src={bgImageDesktop} alt="" width={"100%"} height={"25%"} /> */}
        <Box
          sx={{
            height: "30%",
            backgroundImage: `url(${bgImageDesktop})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
