import { Box, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Feature } from "./Feature";

export function Features() {


  return (
    <Box
      width="full"
      px="95px"
      py="60px"
    >
      <Stack spacing="20">
        <Stack spacing="5" align="center" justify="center">
          <Text fontWeight="bold" fontSize="36px" color="black">
            For Your Business
          </Text>
          <Text maxWidth="540px" textAlign="center">
            Weiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqu
          </Text>
        </Stack>

        <SimpleGrid columns={3} columnGap="22" spacing="60px">
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