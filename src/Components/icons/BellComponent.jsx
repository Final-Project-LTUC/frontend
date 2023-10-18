import React, { useRef, useEffect, useState, useContext } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import gsap from "gsap";
import Notifications from "../notifications/Notifications";
import { LoginContext } from "../../hooks/Context/LoginProvider";

const BellComponent = () => {
  const { socket } = useContext(LoginContext);

  const [notificationCount, setNotificationCount] = useState(0);
  const [payload, setPayload] = useState("");

  const [showNotification, setNotification] = useState(false);
  const [inquiryDatePayload, setInquiryDatePayload] = useState([]);

  // useEffect(() => {
  //   if ( payload) {
  //     setInquiryDatePayload((prevPayloads) => {
  //       if (!prevPayloads) {
  //         return payload;
  //       } else {
  //         const updatedPayloads = [...prevPayloads, payload];
  //         return updatedPayloads;
  //       }
  //     });
  //   }
  // }, [payload]);

  // useEffect(() => {
    const handleInquiryDate = (payload) => {
      setInquiryDatePayload([...inquiryDatePayload,payload])

      console.log("Notification:", payload);
      setPayload(payload);
      setNotificationCount((prevCount) => {
        console.log("Previous count:", prevCount);
        return prevCount + 1;
      });
    };

    const handleTransaction = (payload) => {
      console.log("handleTransaction", payload);
      setInquiryDatePayload((prevPayloads) => {
        console.log(payload, "first if statement");
        if (!prevPayloads) {
          return payload;
        } else {
          const updatedPayloads = [...prevPayloads, payload];
          // console.log(updatedPayloads, "hahahahahahaahah");
          return updatedPayloads;
        }
      });
      setPayload(payload);
      setNotificationCount((prevCount) => {
        console.log("Previous count:", prevCount);
        return prevCount + 1;
      });
    };

    socket.on("inquiryDate", handleInquiryDate);
    socket.on("transaction", handleTransaction);

    // return () => {
    //   socket.off("inquiryDate", handleInquiryDate);
    // };
  // }, [socket]);

  const bellRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const bellElement = bellRef.current;
    const circleElement = circleRef.current;

    gsap.set(bellElement, { transformOrigin: "center top" });

    gsap.to(bellElement, {
      rotation: -50,
      duration: 3,
      ease: "wiggle",
      repeat: 5,
      yoyo: true,
    });

    gsap.to(circleElement, {
      x: -50,
      duration: 4.5,
      ease: "bell-circle",
      repeat: 5,
      yoyo: true,
    });
  }, [showNotification]);

  const toggleNotification = () => {
    setNotification(!showNotification);
    setNotificationCount(0);
  };

  return (
    <>

      <Flex direction="column">
        <Box
          className="container"
          height={10}
          width={10}
          p={4}
          borderRadius="md"
          cursor="pointer"
          _hover={{
            backgroundColor: "lightgray",
          }}
          onClick={toggleNotification}
          position="relative"
        >
          <Flex
            className="container__content"
            direction="column"
            align="center"
          >
            <Box className="bell" mb={4} ref={bellRef}>
              <Box className="notification">{notificationCount}</Box>
              <Icon as={FaBell} className="bell-icon" boxSize={6} />
              <Box className="bell-icon__circle" ref={circleRef}></Box>
            </Box>
          </Flex>
          {showNotification && (
            <Box position="absolute" top="100%" right={0} zIndex={1}>
              <Notifications
                showNotification={showNotification}
                payload={payload}
                socket={socket}
                inquiryDatePayload={inquiryDatePayload}
              />
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default BellComponent;
