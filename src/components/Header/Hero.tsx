import { Box, Button, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";

export function Hero() {
  function BulkComponent() {
    return (
      <Stack
        position="absolute"
        top="261px"
        right="272px"
        direction="row"
        width="213px"
        height="66px"
        borderRadius="16px"
        align="center"
        justify="center"
        bgColor="white"
      >
        <Box>
          <NextImage
            src="/Group-5.png"
            width="40px"
            height="40px"
          />
        </Box>
        <Stack textAlign="left" spacing="0">
          <Text fontWeight="medium" color="#070F18">Bulk Export</Text>
          <Text fontSize="sm">Work faster 200%</Text>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      direction="row"
      align="center"
      justify="space-between"
      spacing="36"
    >
      <Stack align="left" spacing="5">
        <Text fontWeight="bold" fontSize="55px" color="#000000">
          Every transaction <br />is special for us.
        </Text>
        <Text fontSize="16px">
          Aiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudan.
        </Text>
        <Button
          bgColor="#1F7CFF"
          color="#FFFFFF"
          fontSize="16px"
          fontWeight="normal"
          w="180px"
          h="48px"
          _hover={{ bgColor: "#0062EB" }}
        >
          Sign In
        </Button>
      </Stack>

      <Box >

        <NextImage
          src="/hero.png"
          width="542px"
          height="482px"
        />
        <BulkComponent />
      </Box>
    </Stack>
  );
}