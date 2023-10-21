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
import React, { useEffect } from "react";
import DetailsModale from "../DetailsModale";
import { faBuildingCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import RatingModal from "../RatingModal";
const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];
function PaymentStepper({ indexs, arrivedOnTime, doneWorking, task, socket,setIndex }) {

  let { activeStep,setActiveStep} = useSteps({
    index: 0, 
    count: steps.length,
  });

  useEffect(() => {
    if (indexs > 0) {
    
      setActiveStep(indexs);
    }
  }, [indexs]);

  return (
    <>
    <Stepper size="lg" colorScheme="yellow" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={`✅`} incomplete={`😅`} active={`📍`} />
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
              bg="#007bff"
              color="#fff"
              border="2px"
              borderColor="#007bff"
              onClick={() => {
                arrivedOnTime();
                setIndex(1);
              }}
            >
              Arrived
            </Button>
          )}
    
          {index === 1 && (
            <>
              <DetailsModale socket={socket} task={task} />
    
              <Button
                className="task-button"
                bg="#007bff"
                color="#fff"
                border="2px"
                borderColor="#007bff"
                onClick={() => {
                  doneWorking();
                  setIndex(2);
                }}
              >
                Done
              </Button>
            </>
          )}
          {index===2 &&
         <RatingModal task={task}  socket={socket}/>
        
          }
        </Step>
      ))}
    </Stepper>
    </>
  );
}

export default PaymentStepper;
