import React, { useRef, useEffect, useState, useContext } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import gsap from "gsap";
import Notifications from "../notifications/Notifications";
import { LoginContext } from "../../hooks/Context/LoginProvider";
import RatingModal from "../dashboard/currentTask/RatingModal";

const BellComponent = () => {
  const { socket, loginData } = useContext(LoginContext);
  const [notificationCount, setNotificationCount] = useState(0);
  const [payload, setPayload] = useState();
  const [showNotification, setNotification] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const handleInquiryDate = (payload) => {
    setPayload(payload);
    setNotificationCount((prevCount) => {
      return 1;
    });
    return socket.off("inquiryDate", handleInquiryDate);
  };

  const handleTransaction = (payload) => {
    setPayload(payload);
    setNotificationCount((prevCount) => {
      return 1;
    });
    return socket.off("transaction", handleTransaction);
  };
  const handleReject = (payload) => {
    setPayload(payload);
    setNotificationCount((prevCount) => {
      return 1;
    });
    return socket.off("serviceRejected", handleReject);
  };

  const handleArrived = (payload) => {
    setPayload(payload);
    setNotificationCount((prevCount) => {
      console.log("Previous count:", prevCount);
      return 1;
    });
    return socket.off("arrived", handleReject);
  };

  const handleDetails = (payload) => {
    setPayload(payload);
    setNotificationCount((prevCount) => {
      console.log("Previous count:", prevCount);
      return 1;
    });
    return socket.off("details", handleDetails);
  };

  const handleLastPayment = (payload) => {
    console.log("lastPaymentttttttttttttttt", payload);
    setPayload(payload);
    setOpenReview(true);
    setNotificationCount((prevCount) => {
      console.log("Previous count:", prevCount);
      return 1;
    });
    return socket.off("lastPayment", handleLastPayment);
  };

  socket.on("inquiryDate", handleInquiryDate);
  socket.on("transaction", handleTransaction);
  socket.on("arrived", handleArrived);
  socket.on("details", handleDetails);
  socket.on("lastPayment", handleLastPayment);

  socket.on("serviceRejected", handleReject);
  // return () => {

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
      <Flex direction="column" justifyContent={"space-between"}>
        <Box
          className="container"
          height={50}
          width={15}
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
          <Box className="notification-cards-container" position="relative">
            {showNotification && (
              <Box position="absolute" top="100%" right={0} zIndex={1}>
                <Notifications
                  showNotification={showNotification}
                  payload={payload}
                  socket={socket}
                  setOpenReview={setOpenReview}
                />
              </Box>
            )}
          </Box>
        </Box>
        {openReview === true &&
          Number.isInteger(Number(loginData.user.id)) &&(
            <RatingModal

              task={payload}
              socket={socket}
              rateClose={setOpenReview}
            />
           )} 
      </Flex>
    </>
  );
};

export default BellComponent;
