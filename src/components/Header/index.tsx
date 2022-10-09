import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import { Brands } from "./Brand";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      width="full"
      px={isWideVersion ? "95px" : "8"}
      py={isWideVersion ? "60px" : "8"}
    >
      <Stack
        maxWidth="1250px"
        spacing={isWideVersion ? "24" : "8"}
        mx="auto"
        borderRadius="10px"
      >
        <Navbar />
        <Hero />
        <Brands />
      </Stack>
    </Box>
  );
}