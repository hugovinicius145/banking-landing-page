import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import NextImage from "next/image";

import { GetStartedButton } from "../Buttons/GetStartedButton";

interface ServiceProps {
  imageSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export function Service({ imageSrc, title, description, reverse }: ServiceProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Stack
      direction={isWideVersion ? (reverse ? "row-reverse" : "row") : "column"}
      spacing={isWideVersion ? "88px" : "6"}
    >
      <Box>
        <NextImage
          src={imageSrc}
          width="635px"
          height="450px"
        />
      </Box>
      <Stack spacing={isWideVersion ? "30px" : "4"}>
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