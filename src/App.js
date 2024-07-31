import "./App.css";

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import CATEGORY from "./constants/category";

import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";

 const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState("in");
  const [pageSize, setPageSize] = useState(10);
  const [theme, setTheme] = useState({
    mode: "light",
    text: "dark",
    button: "primary",
  });

  const changePageSize = (pageSize) => {
    setPageSize(pageSize);
  };

  const changeCountry = (country) => {
    setCountry(country);
  };

  const changeTheme = () => {
    if (theme.mode === "light") {
      document.body.style.backgroundColor = "grey";
      setTheme({
        theme: {
          mode: "dark",
          text: "white",
          button: "success",
        },
      });
    } else {
      document.body.style.backgroundColor = "white";
      setTheme({
        theme: {
          mode: "light",
          text: "dark",
          button: "primary",
        },
      });
    }
  };

    return (
      <>
        <BrowserRouter>
          <div>
            <LoadingBar color="#f11946" progress={progress} />
            <Navbar
              pageSize={pageSize}
              theme={theme}
              country={country}
              changePageSize={changePageSize}
              changeTheme={changeTheme}
              changeCountry={changeCountry}
            />
            <Routes>
              {/* Default Route */}
              <Route
                exact
                path="/"
                element={
                  <News
                    apiKey={apiKey}
                    setProgress={setProgress}
                    key={CATEGORY[0] + country + pageSize}
                    theme={theme}
                    pageSize={pageSize}
                    country={country}
                    category={CATEGORY[0]}
                  />
                }
              />

              {CATEGORY.map((cate) => {
                return (
                  <Route
                    key={cate}
                    exact
                    path={`/${cate}`}
                    element={
                      <News
                        apiKey={apiKey}
                        setProgress={setProgress}
                        key={cate + country + pageSize}
                        theme={theme}
                        pageSize={pageSize}
                        country={country}
                        category={cate}
                      />
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
}

export default App;
