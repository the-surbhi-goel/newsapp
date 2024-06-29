import "./App.css";

import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
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
              changePageSize={this.changePageSize}
              changeTheme={this.changeTheme}
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
                    country={"in"}
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
                    country={"in"}
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
                    country={"in"}
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
                    country={"in"}
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
                    country={"in"}
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
                    country={"in"}
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
                    country={"in"}
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
