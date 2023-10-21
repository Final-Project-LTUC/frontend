import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import categories from "../../pages/services/ServicesTest/constant";
import { motion } from "framer-motion";

function ExpertiesButtons({ dispatch, currentPage, formData, setPageNum }) {
    const MotionFlex = motion(Flex);

    // You can specify the number of buttons per row
    const buttonsPerRow = 5;

    // Divide the categories array into smaller arrays
    const dividedCategories = [];
    for (let i = 0; i < categories.length; i += buttonsPerRow) {
        dividedCategories.push(categories.slice(i, i + buttonsPerRow));
    }

    return (
        <Flex
            justifyContent={"space-between"}
            flexDirection={"column"}
            alignItems={"center"}
            position={`${
                currentPage === "experties" ? "relative" : "absolute"
            }`}
            transform={`translateX(${
                currentPage === "experties" ? "0" : "-200%"
            })`}
            h={`${currentPage === "experties" ? "calc(100vh - 80px)" : "0"}`}
            transition={"all .7s ease-in-out"}
        >
            <MotionFlex
                position={`${
                    currentPage === "experties" ? "relative" : "absolute"
                }`}
                initial={
                    currentPage === "experties" ? { x: "0" } : { x: "-200%" }
                }
                h={"90%"}
                justifyContent={"space-around"}
                flexDirection={"column"}
                transition={{
                    damping: 5,
                    duration: 0.7,
                    type: "spring",
                }}
            >
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    fontFamily="heading"
                    color="teal"
                >
                    What Services Can You Offer ?
                </Text>

                <Flex
                    w={"100%"}
                    h={"75%"}
                    wrap={"wrap"}
                    justifyContent={"center"}
                    gap={"50px"}
                >
                    {dividedCategories.map((group, index) => (
                        <Flex key={index} gap="60px">
                            {" "}
                            {group.map((experty) => (
                                <Button
                                    w={"180px"}
                                    colorScheme={
                                        formData.experties.includes(experty.id)
                                            ? "teal"
                                            : "black"
                                    }
                                    variant={
                                        formData.experties.includes(experty.id)
                                            ? "solid"
                                            : "outline"
                                    }
                                    h={"40px"}
                                    key={experty.id}
                                    onClick={() =>
                                        dispatch({
                                            type: "CHANGE_EXPERTIES",
                                            payload: experty.id,
                                        })
                                    }
                                    _hover={{
                                        backgroundColor: "teal.400",
                                        color: "white",
                                    }}
                                >
                                    {experty.name}
                                </Button>
                            ))}
                        </Flex>
                    ))}
                </Flex>
            </MotionFlex>
            <Button
                borderRadius={"28px"}
                w={"14%"}
                onClick={() => setPageNum((prev) => ++prev)}
                colorScheme="teal"
            >
                Next
            </Button>
        </Flex>
    );
}

export default ExpertiesButtons;
