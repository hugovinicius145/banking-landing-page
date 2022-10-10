import { Box, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

import { Feature } from "./Feature";

export function Features() {
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
      <Stack spacing={isWideVersion ? "20" : "8"} align="center" justify="center" textAlign="center">
        <Stack spacing="5" align="center" justify="center">
          <Text fontWeight="bold" fontSize="36px" color="black">
            For Your Business
          </Text>
          <Text maxWidth="540px" textAlign="center">
            Weiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqu
          </Text>
        </Stack>

        <SimpleGrid
          columns={isWideVersion ? 3 : 1}
          columnGap="22"
          spacing={isWideVersion ? "60px" : "6"}
          w="full"
          textAlign="left"
        >
          <Feature
            imageSrc="/features/briefcase.svg"
            title="Share your Insights"
            subtitle="Unde omnis iste natus error sit volu ptatem accusantium dolor."
          />

          <Feature
            imageSrc="/features/send.svg"
            title="Track your Leads"
            subtitle="Unde omnis iste natus error sit volu ptatem accusantium dolor."
          />

          <Feature
            imageSrc="/features/wifi-off.svg"
            title="Go Offline Mode"
            subtitle="Unde omnis iste natus error sit volu ptatem accusantium dolor."
          />

          <Feature
            imageSrc="/features/trello.svg"
            title="Know Kanban Mode"
            subtitle="Unde omnis iste natus error sit volu ptatem accusantium dolor."
          />

          <Feature
            imageSrc="/features/gift.svg"
            title="Reward System Available"
            subtitle="Unde omnis iste natus error sit volu ptatem accusantium dolor."
          />

          <Feature
            imageSrc="/features/globe.svg"
            title="Over 120 Country"
            subtitle="Unde omnis iste natus error sit volu ptatem accusantium dolor."
          />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}