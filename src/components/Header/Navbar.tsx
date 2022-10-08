import { Box, Button, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

export function Navbar() {
  return (
    <Stack
      direction="row"
      align="center"
      justify="space-between"
    >
      <NextLink href="/" passHref>
        <Box as="a">
          <NextImage
            width="60px"
            height="22px"
            src="/logo.png"
            alt="Logo"
          />
        </Box>
      </NextLink>

      <Stack direction="row" fontSize="16px" spacing="14" cursor="pointer">
        <Text fontWeight="semibold">Home</Text>
        <Text>Features</Text>
        <Text>Showcase</Text>
        <Text>Pricing</Text>
      </Stack>

      <Button
        bgColor="#F5F6FB"
        color="#070F18"
        fontSize="16px"
        fontWeight="normal"
      >
        Sign In
      </Button>
    </Stack>
  );
}