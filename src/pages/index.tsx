import type { NextPage } from 'next'
import Head from 'next/head'
import { Stack, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Features } from '../components/Features';
import { ServicesSection } from '../components/ServicesSection';

const Home: NextPage = () => {
  return (
    <Stack
      spacing="45"
    >
      <Header />
      <Features />
      <ServicesSection />
    </Stack>
  )
}

export default Home
