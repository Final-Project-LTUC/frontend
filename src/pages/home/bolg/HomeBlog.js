import "./Blog.scss";

import { Heading, Text } from "@chakra-ui/react";

function HomeBlog() {


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

      </section>
    </>
  );
}

export default HomeBlog;
