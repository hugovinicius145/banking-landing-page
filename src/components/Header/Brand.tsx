import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import NextImage from "next/image";

export function Brands() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Stack
      direction={isWideVersion ? "row" : "column"}
      align="center"
      justify="center"
      spacing={isWideVersion ? "20" : "8"}
    >
      <Box>
        <NextImage
          src="/brands/apple.png"
          width="134px"
          height="46px"
        />
      </Box>

      <Box>
        <NextImage
          src="/brands/adobe.png"
          width="192px"
          height="46px"
        />
      </Box>

      <Box>
        <NextImage
          src="/brands/slack.png"
          width="181px"
          height="46px"
        />
      </Box>

      <Box>
        <NextImage
          src="/brands/spotify.png"
          width="153px"
          height="46px"
        />
      </Box>

      <Box>
        <NextImage
          src="/brands/google-2015.png"
          width="140px"
          height="46px"
        />
      </Box>
    </Stack>
  );
}