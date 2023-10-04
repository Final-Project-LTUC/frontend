import { Card, CardBody, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function TrustUs() {
  return (
    <>
        <Heading as="h2" size="3xl" noOfLines={1} padding={10}>
          Why trust us?
        </Heading>
  
      <HStack spacing="4">
        <Card
          direction="row"
          overflow="hidden"
          variant="outline"
          h="300px"
          flex="1"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src="https://th.bing.com/th/id/R.834bf54e383e9009a1b9b795434a65de?rik=B65iq4%2fkPrzEJQ&riu=http%3a%2f%2fimages.cdn2.stockunlimited.net%2fclipart%2fribbon-rosette_1562836.jpg&ehk=veOrMLBgMfPDEiYDxA3H2P%2fOjdHbt3fy2ctYUvDrwfU%3d&risl=&pid=ImgRaw&r=0"
            alt="Experience"
          />

          <Stack>
            <CardBody>
              <Heading size="md">Experienced</Heading>

              <Text py="2">
                We are a team of highly professional technicians with an average
                of 15 years of experience in the field.
              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Card
          direction="row"
          overflow="hidden"
          variant="outline"
          h="300px"
          flex="1"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src="https://cdn3.iconfinder.com/data/icons/seo-glyph-2/24/deal-1024.png"
            alt="Trust"
          />

          <Stack>
            <CardBody>
              <Heading size="md">Trustworthy</Heading>

              <Text py="2">
                Our technicians are experienced with a variety of skills in
                different fields and get work done...
              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Card
          direction="row"
          overflow="hidden"
          variant="outline"
          h="300px"
          flex="1"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src="https://th.bing.com/th/id/OIP.F4LoldycI7AxP14JadJ5lAAAAA?pid=ImgDet&w=168&h=177&c=7&dpr=1.3"
            alt="Reliable"
          />

          <Stack>
            <CardBody>
              <Heading size="md">Reliable</Heading>

              <Text py="2">
                At FixIt Handyman we offer an exceptional service and
                high-quality workmanship which is...
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </HStack>
   
    </>
  )
}

export default TrustUs
