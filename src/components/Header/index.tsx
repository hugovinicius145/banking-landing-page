import { Box, Stack } from "@chakra-ui/react";
import { Brands } from "./Brand";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <Box
      width="full"
      px="95px"
      py="60px"
    >
      <Stack
        maxWidth="1250px"
        spacing="24"
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