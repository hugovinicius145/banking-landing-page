import { extendTheme } from '@chakra-ui/react';


export const theme = extendTheme({
  initialColorMode: 'system',
  useSystemColorMode: true,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#FFFFFF',
        color: '#575455'
      }
    }
  },
})