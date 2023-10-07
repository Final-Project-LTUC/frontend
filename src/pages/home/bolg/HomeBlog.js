import "./Blog.scss";
import React, { useEffect, useState } from "react";
import { Heading, Text } from "@chakra-ui/react";

function HomeBlog() {
  // const [articles, setArticles] = useState([]);
  // const [hoveredArticle, setHoveredArticle] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "https://gnews.io/api/v4/search?q=example&apikey=0df2ab0a9a8721edb671e7ec5af0058d"
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //       const fetchedArticles = data.articles.slice(1, 4);
  //       console.log(fetchedArticles);
  //       setArticles(fetchedArticles);
  //     });
  // }, []);

  // const handleCardHover = (article) => {
  //   setHoveredArticle(article);
  // };

  return (
    <>
      <Text color={"teal.300"} paddingTop={8}>
        {" "}
        Latest News{" "}
      </Text>
      <Heading as="h2" size="2xl" noOfLines={1} padding={5}>
        Most Popular Articles
      </Heading>

      <section className="cards-wrapper">
        {/* {articles.map((article, index) => (
          <div
            key={index}
            className="card-grid-space"
            onMouseEnter={() => handleCardHover(article)}
            onMouseLeave={() => setHoveredArticle(null)}
          >
            <div className="num">{index + 1}</div>
            <a
              className="card"
              href={article.url}
              style={{
                backgroundImage: `url(${article.image})`,
              }}
            >
              <div>
                <p>{article.title}</p>
                <div className="date">{article.source.name}</div>
                <div className="tags">
                  <div className="tag">New</div>
                </div>
              </div>
              {hoveredArticle === article && (
                <div className="description">
                  <p>{article.description}</p>
                </div>
              )}
            </a>
          </div>
        ))} */}
      </section>
    </>
  );
}

export default HomeBlog;
