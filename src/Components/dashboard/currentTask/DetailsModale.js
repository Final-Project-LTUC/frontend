
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
  } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function DetailsModale({task,socket}) {

  const [productCostt, setproductCost] = useState("");
console.log(productCostt , 'yyyyyyyyyyyyyyyyyyyyy')
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(task, 'rrrrrrrrrrrrr')
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  
  function  productCost(){
    let payload = task
    payload.details = productCostt
    socket.emit('details', payload )
    onClose()  
  }
  
  useEffect(() => {
    if (isOpen) {
      setproductCost("");
      initialRef.current?.focus();
    }
  }, [isOpen]);
  return (
    <>
      <Button onClick={onOpen}>Details</Button>
    
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Insert the product cost</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Product Cost</FormLabel>
              <Input ref={initialRef} placeholder='Expenses'
              onChange={(e)=> setproductCost({price: JSON.parse(e.target.value) })}
              />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=> productCost()}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DetailsModale;