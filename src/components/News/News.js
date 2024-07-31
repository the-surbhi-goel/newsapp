import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

import API from "../../constants/api";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  // const onPrevClick = async () => {
  //   let jsonData = await handleAPIData(page - 1);

  //   setArticles(jsonData.articles);
  //   setPage(page - 1);
  // };

  // const onNextClick = async () => {
  //   let jsonData = await handleAPIData(page + 1);

  //   setArticles(jsonData.articles);
  //   setPage(page + 1);
  // };

  const fetchMoreData = async () => {
    let jsonData = await handleAPIData(page + 1);

    setArticles(articles.concat(Array.from(jsonData.articles)));
    setPage(page + 1);
  };

  const handleAPIData = async (pageNo = 1) => {
    props.setProgress(10);
    setLoader(true);
    let url =
      `${API.topHeadlines}?apiKey=${props.apiKey}&` +
      `country=${props.country}&category=${props.category}&page=${pageNo}&` +
      `pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let jsonData = await data.json();
    props.setProgress(60);

    jsonData?.articles.forEach((el, index) => {
      el.id = index + "" + pageNo;

      if (el.publishedAt) {
        let d = new Date(el.publishedAt);
        el.publishedAt = d.toGMTString();
      }

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
      setArticles(jsonData.articles);
      setTotalResults(jsonData.totalResults);
      setTotalPages(jsonData.totalResults / props.pageSize);
      setLoader(false);
    } else {
      setLoader(false);
    }

    props.setProgress(100);
    return jsonData;
  };

  useEffect(() => {
    handleAPIData();
  }, []);

  return (
    <>
      <div className="container my-3">
        <h2 className={`text-${props.theme.text}`}
        style={{marginTop: "70px"}}> New: Top Headlines</h2>

        {/* START - Spinner */}
        {loader && <Spinner />}
        {/* END - Spinner */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {articles.map((el) => {
              return (
                <div key={el.id} className="col-md-4 py-3">
                  <NewsItem
                    theme={props.theme}
                    author={el.author}
                    date={el.publishedAt}
                    title={el.title}
                    description={el.description}
                    imageUrl={el.urlToImage}
                    newsUrl={el.url}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>

      {/* Commented code for Prev and Next button */}
      {/* {!loader && (
          <div className="container d-flex justify-content-between">
            <button
              disabled={page === 1}
              className={`btn btn-${props.theme.button}`}
              onClick={onPrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={!(page < totalPages)}
              className={`btn btn-${props.theme.button}`}
              onClick={onNextClick}
            >
              Next &rarr;
            </button>
          </div>
        )} */}
    </>
  );
};

// News.defaultProps = {
//   country: "in",
//   pageSize: 10,
//   category: "general",
//   theme: {
//     mode: "light",
//     text: "dark",
//     button: "primary",
//   },
// };

News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  theme: PropTypes.object,
};

export default News;
