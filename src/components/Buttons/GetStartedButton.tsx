import { Button } from "@chakra-ui/react";

export function GetStartedButton() {
  return (
    <Button
      bgColor="#1F7CFF"
      color="#FFFFFF"
      fontSize="16px"
      fontWeight="normal"
      w="180px"
      h="48px"
      _hover={{ bgColor: "#0062EB" }}
    >
      Get Started
    </Button>
  );
}