import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import "./profile.css"
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    StackDivider,
    Stack,
    Heading,
    Center,
    Icon,
  } from "@chakra-ui/react";
  

function Profile() {
  return (
    <Card className="profileanime">
        <Flex >

      <CardHeader>
        <Heading size="md">Your Profile</Heading>
      </CardHeader>
        </Flex>

      <CardBody>
        <Flex>
          {/* Left side with a 4:8 ratio */}
          <Box style= {{ textAlign: 'left', borderRadius: '4%' }}
            flex="fill"
            bg="dark.900" // Yellowish background color
            p="4" // Add padding to the left side
          >
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  name
                </Heading>
                <Text pt="2" fontSize="sm">
                  name from cookies
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  experties
                </Heading>
                <Text pt="2" fontSize="sm">
                  experties from the back end can be updated
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  hourly rate
                </Heading>
                <Text pt="2" fontSize="sm">
                  hourly rate from back end
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  biography
                </Heading>
                <Text pt="2" fontSize="sm">
                  i am laith a great carpenter and electrican(updated and extracted from backend )
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                 last projects <Icon name="star" />, <Icon name="calendar" />,<Icon name="briefcase" />
                </Heading>
                <Text pt="2" fontSize="sm">,
                
                </Text>
              </Box>
            </Stack>
          </Box>

          {/* Right side */}
          <Box flex="8">
            {/* Content for the right side */}
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Profile;
