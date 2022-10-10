import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function Testimonial() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  function Card() {
    return (
      <Box
        maxW="424px"
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
      px={isWideVersion ? "95px" : "8"}
      pt={isWideVersion ? "60px" : "8"}
      pb="260px"
    >
      <Box
        bgImage={isWideVersion ? "/Testimonial.png" : "none"}
        bgRepeat="no-repeat"
        maxW="1189px"
        maxH="583px"
        mx="auto"
      >
        <Stack
          spacing={isWideVersion ? "75px" : "6"}
          align="center"
          justify="center"
          textAlign="center"
        >
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