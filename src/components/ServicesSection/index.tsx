import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";

import { Service } from "./Service";

export function ServicesSection() {
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
        spacing={isWideVersion ? "180px" : "16"}
        px={isWideVersion ? "95" : "0"}
        align="center"
        justify="center"
      >
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