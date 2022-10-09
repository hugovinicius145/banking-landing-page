import type { NextPage } from 'next'
import Head from 'next/head'
import { Stack } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Features } from '../components/Features';
import { ServicesSection } from '../components/ServicesSection';
// import { Testimonial } from '../components/Testimonial';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <Stack
      spacing="45"
    >
      <Header />
      <Features />
      <ServicesSection />
      {/* <Testimonial /> */}
      <Footer />
    </Stack>
  )
}

export default Home
