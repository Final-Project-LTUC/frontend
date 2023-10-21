
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
import React, { useEffect, useState ,useContext} from "react";
import { LoginContext } from "../../../hooks/Context/LoginProvider";
import Rating from "../../Rating/Rating";
import { useNavigate } from "react-router-dom";
function RatingModal({task,socket}) {
  const { loginData } = useContext(LoginContext);
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(task, 'reveiw')
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  
  function handymantWillRate(){
    if (Number.isInteger(Number(loginData.user.id))) {
        let payload = task
        payload.hReview = rating
        socket.emit('reviewOfHandyman', payload )
        onClose()  
        navigate("/thanksPage");

      } else {
        let payload = task
        payload.cReview = rating
        socket.emit('reviewOfclient', payload )
        onClose() 
        navigate("/thanksPage");
 
      }
      
  
  }


  useEffect(() => {
    if (isOpen) {
        setRating(0);
      initialRef.current?.focus();
    }
  }, [isOpen]);
  return (
    <>
      <Button onClick={onOpen}>Rate them</Button>
    
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rate the interaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <Rating  rating={rating} setRating={setRating}/>
            {/* <FormControl>
              <FormLabel>Product Cost</FormLabel>
              <Input ref={initialRef} placeholder='Expenses'
              onChange={(e)=> setproductCost({price: JSON.parse(e.target.value) })}
              />
            </FormControl> */}

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=> handymantWillRate()}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RatingModal;