import React, { useState } from 'react';
import {
  Box,
  ChakraProvider,
  Flex,
  theme,
  IconButton,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function App() {
  const [sun, setSun] = useState(true);
  const colorSwitch = () => {
    setSun(!sun);
  };
  console.log(sun);
  return (
    <ChakraProvider theme={theme}>
      <Box w={'100vw'} h={'100vh'} bgColor={sun ? 'white' : 'black'}>
        <Flex justifyContent={'end'}>
          <IconButton
            margin={3}
            icon={sun ? <SunIcon /> : <MoonIcon />}
            onClick={colorSwitch}
          />
        </Flex>
        <Heading color={sun ? 'black' : 'white'} textAlign={'center'}>
          {sun ? 'SUN' : 'NIGHT'}
        </Heading>
      </Box>
    </ChakraProvider>
  );
}

export default App;
