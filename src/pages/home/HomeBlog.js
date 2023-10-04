import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function HomeBlog() {
//   const apikey = "a1c745d846403ec77b6d51ba53f85775";
  const url =
    "https://gnews.io/api/v4/search?q=example&apikey=a1c745d846403ec77b6d51ba53f85775"

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data); // Log the entire data object
        const articles = data.articles;
        console.log(articles);
     

      for (let i = 0; i < articles.length; i++) {
        // articles[i].title
        console.log("Title: " + articles[i]["title"]);
        // articles[i].description
        console.log("Description: " + articles[i]["description"]);
        // You can replace {property} below with any of the article properties returned by the API.
        // articles[i].{property}
        // console.log(articles[i]['{property}']);

        // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
        break;
      }
    });
  return (
    <div>
      <Heading as="h2" size="3xl" noOfLines={1} padding={10}>
        Blog
      </Heading>
      <HStack spacing="4">
        <Card
          direction="row"
          overflow="hidden"
          variant="outline"
          h="300px"
          flex="1"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src="https://th.bing.com/th/id/R.834bf54e383e9009a1b9b795434a65de?rik=B65iq4%2fkPrzEJQ&riu=http%3a%2f%2fimages.cdn2.stockunlimited.net%2fclipart%2fribbon-rosette_1562836.jpg&ehk=veOrMLBgMfPDEiYDxA3H2P%2fOjdHbt3fy2ctYUvDrwfU%3d&risl=&pid=ImgRaw&r=0"
            alt="Experience"
          />

          <Stack>
            <CardBody>
              <Heading size="md">Experienced</Heading>

              <Text py="2"></Text>
            </CardBody>
          </Stack>
        </Card>
      </HStack>
    </div>
  );
}

export default HomeBlog;
