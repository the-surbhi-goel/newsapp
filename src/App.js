import "./App.css";

import React, { Component } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import CATEGORY from "./constants/category";

import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "in",
      pageSize: 10,
      theme: {
        mode: "light",
        text: "dark",
        button: "primary",
      },
    };
  }

  changePageSize = (pageSize) => {
    this.setState({ pageSize: pageSize });
  };

  changeCountry = (country) => {
    this.setState({ country: country });
  };

  changeTheme = () => {
    if (this.state.theme.mode === "light") {
      document.body.style.backgroundColor = "grey";
      this.setState({
        theme: {
          mode: "dark",
          text: "white",
          button: "success",
        },
      });
    } else {
      document.body.style.backgroundColor = "white";
      this.setState({
        theme: {
          mode: "light",
          text: "dark",
          button: "primary",
        },
      });
    }
  };

  render() {
    return (
      <>
        <HashRouter>
          <div>
            <Navbar
              pageSize={this.state.pageSize}
              theme={this.state.theme}
              country={this.state.country}
              changePageSize={this.changePageSize}
              changeTheme={this.changeTheme}
              changeCountry={this.changeCountry}
            />
            <Routes>
              {/* Default Route */}
            <Route
                    exact
                    path="/"
                    element={
                      <News
                        key={CATEGORY[0] + this.state.country + this.state.pageSize}
                        theme={this.state.theme}
                        pageSize={this.state.pageSize}
                        country={this.state.country}
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
                        key={cate + this.state.country + this.state.pageSize}
                        theme={this.state.theme}
                        pageSize={this.state.pageSize}
                        country={this.state.country}
                        category={cate}
                      />
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </HashRouter>
      </>
    );
  }
}
