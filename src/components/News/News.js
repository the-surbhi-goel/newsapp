import React, { Component } from "react";
import NewsItem from "./NewsItem";

import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loader: true,
      page: 1,
      totalPages: 0,
    };
  }

  onPrevClick = async () => {
    let jsonData = await this.handleAPIData(this.state.page - 1);

    this.setState({
      articles: jsonData.articles,
      page: this.state.page - 1,
    });
  };

  onNextClick = async () => {
    let jsonData = await this.handleAPIData(this.state.page + 1);

    this.setState({
      articles: jsonData.articles,
      page: this.state.page + 1,
    });
  };

  handleAPIData = async (pageNo) => {
    this.setState({ loader: true });
    let url = `https://newsapi.org/v2/top-headlines?apiKey=31613b98c9864e3ba1a217e357eea17d&` + 
    `country=${this.props.country}&category=${this.props.category}&page=${pageNo}&` + 
    `pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let jsonData = await data.json();

    jsonData?.articles.forEach((el) => {
      if (el.title) {
        el.title = el.title.length > 40 ? el.title.slice(0, 40) + "..." : el.title;
      } else {
        el.title = "";
      }

      if (el.description) {
        el.description =
          el.description.length > 100 ? el.description.slice(0, 100) + "..." : el.description;
      } else {
        el.description = "";
      }
    });

    if (pageNo === 1) {
      this.setState({
        totalPages: jsonData.totalResults / this.props.pageSize,
        loader: false,
      });
    }

    return jsonData;
  };

  // It'll run after render() method
  async componentDidMount() {
    let jsonData = await this.handleAPIData(this.state.page);
    this.setState({
      articles: jsonData.articles,
      loader: false,
    });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2> New: Top Headlines</h2>

          {/* START - Spinner */}
          {this.state.loader && <Spinner />}
          {/* END - Spinner */}

          <div className="row">
            {!this.state.loader &&
              this.state.articles.map((el) => {
                return (
                  <div className="col-md-4">
                    <NewsItem
                      key={el.id}
                      title={el.title}
                      description={el.description}
                      imageUrl={el.urlToImage}
                      newsUrl={el.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        {!this.state.loader && (
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page === 1}
              className="btn btn-success"
              onClick={this.onPrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={!(this.state.page < this.state.totalPages)}
              className="btn btn-success"
              onClick={this.onNextClick}
            >
              Next &rarr;
            </button>
          </div>
        )}
      </>
    );
  }
}
