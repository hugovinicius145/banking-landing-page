import { Box, Stack } from "@chakra-ui/react";
import { Service } from "./Service";

export function ServicesSection() {
  return (
    <Box
      width="full"
      px="95px"
      py="60px"
    >
      <Stack spacing="180px" px="95" align="center" justify="center">
        <Service
          imageSrc="/services/service-1.png"
          title="Boost  Productivit"
          description="Ciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Ciatis unde omnis iste natus error sit."
        />

        <Service
          imageSrc="/services/service-2.png"
          title="Highest Output"
          description="Ciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Ciatis unde omnis iste natus error sit."
          reverse
        />
      </Stack>
    </Box>
  );
}