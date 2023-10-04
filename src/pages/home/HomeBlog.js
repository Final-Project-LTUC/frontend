import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function HomeBlog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/search?q=example&apikey=5f126d07f131edeaa21afe56b883a280"
      // https://gnews.io/api/v4/search?q=example&apikey=0df2ab0a9a8721edb671e7ec5af0058d //new one
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        const fetchedArticles = data.articles;
        console.log(fetchedArticles);
        setArticles(fetchedArticles);
      });
  }, []);

  return (
    <>
      <Heading as="h2" size="3xl" noOfLines={1} padding={10}>
        Blog
      </Heading>

      {/* <Stack spacing="4">
        {articles.map((article, index) => (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={article.image} alt={article.title} />

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
      </Stack> */}
    </>
  );
}

export default HomeBlog;
