import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'
import React from 'react'
 const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ]
function PaymentStepper() {
 
  
 
    const { activeStep } = useSteps({
      index: 0,
      count: steps.length,
    })
  
    return (
      <Stepper size='lg' colorScheme='yellow' index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={`✅`} incomplete={`😅`} active={`📍`} />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
  

      
export default PaymentStepper