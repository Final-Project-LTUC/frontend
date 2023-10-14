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
} from '@chakra-ui/react'

import React from 'react'

function TaskModal({ data, index,token }) {
  const { onClose ,isOpen,onOpen} = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  console.log(data,index,"data and index:::::::::::::::")

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder={"tell me what i can help you with..."} />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input ref={initialRef} placeholder={"olease explain the problem"} />
            </FormControl>

           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TaskModal
