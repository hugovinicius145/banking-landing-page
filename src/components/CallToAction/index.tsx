import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";

export function CallToAction() {
  return (
    <Flex minWidth='max-content' alignItems='center' justify="center">
      <Flex
        width="980px"
        height="331px"
        position="absolute"
        bottom="457px"
        bgColor="#1F7CFF"
        borderRadius="10px"
        align="center"
        justify="center"
        color="white"
      >
        <Stack
          textAlign="center"
          spacing="49px"
        >
          <Text
            maxWidth="568px"
            fontWeight="bold"
            fontSize="36px"
          >
            Move even faster with Your guide in the digital age.
          </Text>
          <Stack direction="row" justify="center" spacing="13px">
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