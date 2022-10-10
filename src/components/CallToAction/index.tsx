import { Box, Button, Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function CallToAction() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex minWidth='max-content' alignItems='center' justify="center">
      <Flex
        maxW={isWideVersion ? "980px" : "353px"}
        maxHeight={isWideVersion ? "331px" : "331px"}
        position="absolute"
        bottom={isWideVersion ? "457px" : "1010px"}
        bgColor="#1F7CFF"
        borderRadius="10px"
        align="center"
        justify="center"
        color="white"
        p={isWideVersion ? "8" : "4"}
      >
        <Stack
          textAlign="center"
          spacing="49px"
        >
          <Text
            maxWidth="568px"
            fontWeight="bold"
            fontSize={isWideVersion ? "36px" : "24px"}
          >
            Move even faster with Your guide in the digital age.
          </Text>
          <Stack direction={isWideVersion ? "row" : "column"} justify="center" spacing="13px">
            <Button
              bgColor="white"
              color="#1F7CFF"
              py="3"
              px="36px"
              fontWeight="bold"
            >
              Let's Talk
            </Button>
            <Button
              bgColor="#1F7CFF"
              borderColor="white"
              _hover={{ bgColor: "#0062EB", borderColor: "#0062EB" }}
              border="1px"
              py="3"
              px="36px"
              fontWeight="bold"
            >
              Book Your Consultation
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>

  );
}