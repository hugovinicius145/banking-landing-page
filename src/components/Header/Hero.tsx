import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import NextImage from "next/image";

import { GetStartedButton } from "../Buttons/GetStartedButton";

export function Hero() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  function BulkComponent() {
    return (
      <Stack
        position="absolute"
        top={isWideVersion ? "261px" : "741px"}
        right={{ base: "24px", md: "65px", lg: "65px", xl: "65px", '2xl': "275px" }}
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
      direction={isWideVersion ? "row" : "column"}
      align="center"
      justify="space-between"
      spacing={isWideVersion ? "36" : "8"}
    >
      <Stack align="left" spacing="5">
        <Text fontWeight="bold" fontSize="55px" color="#000000">
          Every transaction <br />is special for us.
        </Text>
        <Text fontSize="16px">
          Aiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudan.
        </Text>
        <GetStartedButton />
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