import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { author, date, title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className="card h-100">
        <img
          src={imageUrl}
          className="card-img-top"
          alt="not available"
          style={{ minHeight: "160px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <footer className="blockquote-footer">
            By {author ? author : "Unknown"} on <cite title="Source Title">{date}</cite>
          </footer>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
