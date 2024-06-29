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
    };
  }

  changePageSize = (pageSize) => {
    this.setState({ pageSize: pageSize });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar pageSize={this.state.pageSize} changePageSize={this.changePageSize} />
            <Routes>
              <Route
                exact
                path="/business"
                element={
                  <News
                    key="business"
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
                    pageSize={this.state.pageSize}
                    country={"in"}
                    category={"entertainment"}
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={<News key="general" pageSize={this.state.pageSize} country={"in"} category={"general"} />}
              />
              <Route
                exact
                path="/health"
                element={<News key="health" pageSize={this.state.pageSize} country={"in"} category={"health"} />}
              />
              <Route
                exact
                path="/science"
                element={<News key="science" pageSize={this.state.pageSize} country={"in"} category={"science"} />}
              />
              <Route
                exact
                path="/sports"
                element={<News key="sports" pageSize={this.state.pageSize} country={"in"} category={"sports"} />}
              />
              <Route
                exact
                path="/technology"
                element={
                  <News key="technology" pageSize={this.state.pageSize} country={"in"} category={"technology"} />
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
