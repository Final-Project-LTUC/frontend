import {
    AspectRatio,
    Box,
    Button,
    Container,
    Heading,
    Input,
    Stack,
    Text
  } from "@chakra-ui/react";
  import { motion, useAnimation } from "framer-motion";
  
  const first = {
    rest: {
      rotate: "-15deg",
      scale: 0.95,
      x: "-50%",
      filter: "grayscale(80%)",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      x: "-70%",
      scale: 1.1,
      rotate: "-20deg",
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const second = {
    rest: {
      rotate: "15deg",
      scale: 0.95,
      x: "50%",
      filter: "grayscale(80%)",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      x: "70%",
      scale: 1.1,
      rotate: "20deg",
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const third = {
    rest: {
      scale: 1.1,
      filter: "grayscale(80%)",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      scale: 1.3,
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const PreviewImage = ((props, ref) => {
    return (
      <Box
        bg="white"
        top="0"
        height="100%"
        width="100%"
        position="absolute"
        borderWidth="1px"
        borderStyle="solid"
        rounded="sm"
        borderColor="gray.400"
        as={motion.div}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
        {...props}
        ref={ref}
      />
    );
  });
  
  
  export default function ImageUpload({setSelectedImg,handleSubmit,currentPage}) {
    const controls = useAnimation();
    const startAnimation = () => {
      controls.start("hover");
  }

    const stopAnimation = () =>{
      controls.stop();
    } 
    const handleDrop = (e) => {
      e.preventDefault();
      const droppedImage = e.dataTransfer.files[0];
      if (droppedImage) {
        setSelectedImg(droppedImage)
      };

    };
    const handleClick=(e)=>{
      const image = e.target.files[0];
      setSelectedImg(image);
    }
    return (
      <Container
      position={`${currentPage==='profilePic'?'relative':'absolute'}`}
      transform={`translateY(${currentPage==='profilePic'?'0':'200%'})`}
       h={`${currentPage==='profilePic'?'calc(100vh - 80px)':'0'}`}
      my="3">
        <Text fontSize={'4xl'}>High Earning Handymen Have Great Profile Pictures</Text>
        <AspectRatio width="100%" ratio={1}>
          <Box
            borderColor="gray.300"
            borderStyle="dashed"
            borderWidth="2px"
            rounded="md"
            shadow="sm"
            role="group"
            transition="all 150ms ease-in-out"
            _hover={{
              shadow: "md"
            }}
            as={motion.div}
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <Box position="relative" height="100%" width="100%">
              <Box
                position="absolute"
                top="0"
                left="0"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
              >
                <Stack
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justify="center"
                  spacing="4"
                >
                  <Box height="150px" width="150px" position="relative">
                    <PreviewImage
                      variants={first}
                      backgroundImage="url('https://images.unsplash.com/photo-1601058268499-e52658b8bb88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')"
                    />
                    <PreviewImage
                      variants={second}
                      backgroundImage="url('https://plus.unsplash.com/premium_photo-1663013675008-bd5a7898ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                    />
                    <PreviewImage
                      variants={third}
                      backgroundImage={`url("https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`}
                    />
                  </Box>
                  <Stack p="8" textAlign="center" spacing="1">
                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                      Drop images here
                    </Heading>
                    <Text fontWeight="light">or click to upload</Text>
                  </Stack>
                </Stack>
              </Box>
              <Input
          type="file"
          height="100%"
          width="100%"
          position="absolute"
          top="0"
          left="0"
          opacity="0"
          aria-hidden="true"
          accept="image/*"
          onDragEnter={startAnimation}
          onDragLeave={stopAnimation}
          onDrop={handleDrop}
          onChange={handleClick}
          name="image"
        />
            </Box>
          </Box>
        </AspectRatio>
        <Button
        w={"100%"}
        height={"45px"}
        onClick={(e) => handleSubmit(e)}
        mt={4}
        colorScheme="teal"
      >
        Finish
      </Button>
      </Container>
    );
  }
  