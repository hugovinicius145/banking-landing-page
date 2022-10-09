import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { CallToAction } from "../CallToAction";

interface ItemProps {
  imageSrc?: string;
  text: string;
}

export function Footer() {

  function Item({ imageSrc, text }: ItemProps) {
    return (
      <Stack
        direction="row"
        color="#C6C6C6"
        fontSize="12px"
      >
        {imageSrc && (
          <Box>
            <NextImage
              src={imageSrc}
              width="16px"
              height="16px"
            />
          </Box>
        )}
        <Text>{text}</Text>
      </Stack>
    );
  }

  return (
    <Box
      width="full"
      px="149px"
      py="60px"
      bgColor="#191046"
      color="#C6C6C6"
      fontSize="12px"
    >
      <Stack spacing="33px" mt="176px" align="center" justify="center">
        <SimpleGrid
          columns={4}
          maxWidth="1158px"
          columnGap={8}
          justifyItems="center"
        >
          {/* Company Info */}
          <Stack spacing="25px">
            <Stack spacing="15px">
              <Text textTransform="uppercase" color="white" fontWeight="semibold" fontSize="16px">
                Company Info
              </Text>
              <Text>
                Reach out to us anytime and lets create a better future for all technology users together, forever. We are open to all types of collab offers and tons more.
              </Text>
            </Stack>
            <Stack spacing="4">
              <Item text="Office Hours Monday-Friday 9 AM-5 PM PST" imageSrc="/footer/watch.svg" />
              <Item text="Support Hours 24/7 365" imageSrc="/footer/bx_support.svg" />
            </Stack>
          </Stack>
          {/* Contact Info */}
          <Stack spacing="25px">
            <Stack spacing="15px">
              <Text textTransform="uppercase" color="white" fontWeight="semibold" fontSize="16px">
                Contact Info
              </Text>
            </Stack>
            <Stack spacing="4">
              <Item text="info@techyessolutions.com" imageSrc="/footer/eva_email-fill.svg" />
              <Item text="858-227-4878" imageSrc="/footer/carbon_phone-filled.svg" />
            </Stack>
          </Stack>
          {/* Our Services */}
          <Stack spacing="25px">
            <Stack spacing="15px">
              <Text textTransform="uppercase" color="white" fontWeight="semibold" fontSize="16px">
                Our Services
              </Text>
              <Text>Information Systems Strategy</Text>
              <Text>Custom Software</Text>
              <Text>Integration Services</Text>
              <Text>Business Automation</Text>
              <Text>Web, Ecommerce & Mobiel Apps</Text>
              <Text>Creative</Text>
            </Stack>
          </Stack>
          {/* OUR LOCATIONS */}
          <Stack spacing="25px">
            <Stack spacing="15px">
              <Text textTransform="uppercase" color="white" fontWeight="semibold" fontSize="16px">
                OUR LOCATIONS
              </Text>
              <Box>
                <NextImage
                  src="/footer/techyes-map.png"
                  width="314px"
                  height="178px"
                />
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
        <Stack
          height="55px"
          align="center"
          justify="center"
          textAlign="center"
        >
          <Text>© 2022 UIDesign.to - All rights reserved.</Text>
        </Stack>
      </Stack>
      <CallToAction />
    </Box>
  );
}