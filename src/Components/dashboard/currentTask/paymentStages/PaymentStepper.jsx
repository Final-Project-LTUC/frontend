import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  Button,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DetailsModale from "../DetailsModale";
import { faBuildingCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import RatingModal from "../RatingModal";
const steps = [
  { title: "First", description: "Payment1" },
  { title: "Second", description: "Payment2" },
  { title: "Third", description: "Payment3" },
];



function PaymentStepper({
  indexs,
  arrivedOnTime,
  doneWorking,
  task,
  socket,
  setIndex,
}) {
  const [arrivedClicked, setArrivedClicked] = useState(false);
  const [arrivedClicked2, setArrivedClicked2] = useState(false);

  let { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  useEffect(() => {
    if (indexs > 0) {
      setActiveStep(indexs);
    }
  }, [indexs,arrivedClicked,arrivedClicked2]);

  return (
    <>
      <Stepper size="lg" colorScheme="teal" index={activeStep }>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
                <lottie-player
                  src="https://lottie.host/b750c125-577b-4df4-814f-c96a2657ff5f/VOW4uOU8h8.json"
                  background="transparent"
                  speed="1"
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "300px" }}
                  loop
                  autoPlay
                />           
            </StepIndicator>


            <>
              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
            </>

            <StepSeparator />

            {index === 0 && (
              <Button
                className="task-button"
                bg="teal"
                color="#fff"
                border="2px"
                borderColor="teal"
                onClick={() => {
                  arrivedOnTime();
                  setIndex(1);
                  setArrivedClicked(true);

                }}
              >
                Arrived
              </Button>
            )}

            {index === 1 && arrivedClicked && (
              <>
                <DetailsModale socket={socket} task={task} />

                <Button
                  className="task-button"
                  bg="teal"
                  color="#fff"
                  border="2px"
                  borderColor="teal"
                  onClick={() => {
                    doneWorking();
                    setArrivedClicked2(true)
                    setIndex(2);
                  }}
                >
                  Done
                </Button>
              </>
            )}
            {index === 2 && arrivedClicked2&& <RatingModal task={task} socket={socket} />}
          </Step>
        ))}
      </Stepper>
    </>
  );
}

export default PaymentStepper;
