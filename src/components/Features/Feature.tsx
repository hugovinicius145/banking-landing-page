import { Box, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";

interface FeatureProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export function Feature({ imageSrc, title, subtitle }: FeatureProps) {
  return (
    <Stack
      direction="row"
      maxWidth="350px"
      spacing="6"
      mx="auto"
    >
      <Box>
        <NextImage
          src={imageSrc}
          width="60px"
          height="60px"
        />
      </Box>
      <Stack spacing="0">
        <Text
          color="#070F18"
          fontWeight="semibold"
          fontSize="20px"
        >
          {title}
        </Text>
        <Text>{subtitle}</Text>
      </Stack>
    </Stack>
  );
}