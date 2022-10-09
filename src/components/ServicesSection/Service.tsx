import { Box, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import { GetStartedButton } from "../Buttons/GetStartedButton";

interface ServiceProps {
  imageSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export function Service({ imageSrc, title, description, reverse }: ServiceProps) {
  return (
    <Stack
      direction={reverse ? "row-reverse" : "row"}
      spacing="88px"
    >
      <Box>
        <NextImage
          src={imageSrc}
          width="635px"
          height="450px"
        />
      </Box>
      <Stack spacing="30px">
        <Text
          fontWeight="bold"
          fontSize="36px"
          color="black"
        >
          {title}
        </Text>
        <Text maxW="426px">
          {description}
        </Text>
        <GetStartedButton />
      </Stack>
    </Stack>
  );
}