import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export function Testimonial() {
  function Card() {
    return (
      <Box
        width="424px"
        px="62px"
        py="80px"
        borderRadius="15px"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        boxShadow="xl"
        bgColor="white"
        bgImage="/bg-aspas.svg"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <Text>
          Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
        </Text>
      </Box>
    );
  }

  return (
    <Box
      width="full"
      px="95px"
      pt="60px"
      pb="260px"
    >
      <Box
        bgImage="/Testimonial.png"
        bgRepeat="no-repeat"
        w="1189px"
        h="583px"
        mx="auto"
      >
        <Stack spacing="75px" align="center" justify="center" textAlign="center">
          <Text
            maxWidth="377px"
            fontWeight="bold"
            fontSize="36px"
            color="black"
          >
            Trusted by Agencies
            & Store Owners

          </Text>
          <Card />
        </Stack>
      </Box>
    </Box>
  );
}