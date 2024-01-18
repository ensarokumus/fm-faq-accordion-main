import {
  Typography,
  createTheme,
  ThemeProvider,
  Box,
  Container,
} from "@mui/material";
import bgImageDesktop from "./assets/images/background-pattern-desktop.svg";
import FaqAccordion from "./components/faqAccordion.jsx";
import starIcon from "./assets/images/icon-star.svg"

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
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: 700,
            margin: "0 auto",
            padding: "4rem",
            backgroundColor: "hsl(0, 0%, 100%)",
            borderRadius: 5,
            boxShadow: 'hsla(292, 42%, 14%, 15%) 0px 7px 29px 0px',
          }}
        >
          <Box sx={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            marginBottom: '2rem',
          }}>
            <img src={starIcon} alt="" />
            <Typography variant="h2"  component='h1' sx={{
              fontWeight: 700,
              color: 'hsl(292, 42%, 14%)',
            }}>FAQs</Typography>
          </Box>
          <FaqAccordion sx={{ spacing: 10 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
