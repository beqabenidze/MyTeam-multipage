"use client";
import GlobalStyles from "./Styled-components/GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/header";
import { ThemeProvider } from "styled-components";

const defaultTheme = {};

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
      </ThemeProvider>
    </>
  );
};

export default Home;
