import "./Blog.scss";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function HomeBlog() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://gnews.io/api/v4/search?q=example&apikey=0df2ab0a9a8721edb671e7ec5af0058d"
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //       const fetchedArticles = data.articles.slice(0, 3);
  //       console.log(fetchedArticles);
  //       setArticles(fetchedArticles);
  //     });
  // }, []);

  return (
    <>
      <Text color={"blue.300"} paddingTop={8}>
        {" "}
        Latest News{" "}
      </Text>
      <Heading as="h2" size="2xl" noOfLines={1} padding={5}>
        Most Popular Articles
      </Heading>

      <section className="cards-wrapper">
  {/* {articles.map((article, index) => (
    <div key={index} className="card-grid-space">
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
      </a>
    </div>
  ))} */}
</section>





      {/* <HStack spacing="4" padding={10} maxW="auto"             justifyContent={"space-evenly"}
>
        {articles.map((article, index) => (
          <Box
            padding={2}
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            direction="row"
            variant="outline"
            h="350px"
            flex="1"
            alignItems={"center"}
            speed="1"
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
          >
            <Image h="200px" src={article.image} alt={article.title} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="yellow">
                  New
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={3}
              >
                {article.title}
              </Box>
            </Box>
          </Box>
        ))}
      </HStack> */}
    </>
  );
}

export default HomeBlog;
