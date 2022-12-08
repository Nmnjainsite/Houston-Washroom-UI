import "./App.css";
import Landing from "./Pages/Landing";
import HeaderNav from "./Components/Nav/HeaderNav";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Components/ThemeProvider";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HeaderNav />
        <Landing />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
