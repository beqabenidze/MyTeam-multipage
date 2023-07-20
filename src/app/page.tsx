"use client";
import { useState, useEffect, createContext } from "react";
import GlobalStyles from "./Styled-components/GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/header";

export const Context = createContext<any>(null);

function App() {
  const [size, setSize] = useState<string>(() =>
    window?.innerWidth > 500
      ? window?.innerWidth > 900
        ? "desktop"
        : "tablet"
      : "mobile"
  );

  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 900) {
          setSize("desktop");
        } else if (window.innerWidth > 500) {
          setSize("tablet");
        } else {
          setSize("mobile");
        }
      }
    };

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [size]);

  return (
    <Context.Provider value={{ size, setSize }}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
    </Context.Provider>
  );
}

export default App;
