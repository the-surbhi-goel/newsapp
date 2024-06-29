import "./App.css";

import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <BrowserRouter>
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
              <Route
                exact
                path="/business"
                element={
                  <News
                    key="business"
                    theme={this.state.theme}
                    pageSize={this.state.pageSize}
                    country={this.state.country}
                    category={"business"}
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    key="entertainment"
                    theme={this.state.theme}
                    pageSize={this.state.pageSize}
                    country={this.state.country}
                    category={"entertainment"}
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <News
                    key="general"
                    theme={this.state.theme}
                    pageSize={this.state.pageSize}
                    country={this.state.country}
                    category={"general"}
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    key="health"
                    theme={this.state.theme}
                    pageSize={this.state.pageSize}
                    country={this.state.country}
                    category={"health"}
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    key="science"
                    theme={this.state.theme}
                    pageSize={this.state.pageSize}
                    country={this.state.country}
                    category={"science"}
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    key="sports"
                    theme={this.state.theme}
                    pageSize={this.state.pageSize}
                    country={this.state.country}
                    category={"sports"}
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    key="technology"
                    theme={this.state.theme}
                    pageSize={this.state.pageSize}
                    country={this.state.country}
                    category={"technology"}
                  />
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
