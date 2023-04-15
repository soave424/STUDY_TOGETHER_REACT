import {
  Box,
  Center,
  ChakraProvider,
  Flex,
  Highlight,
  Spacer,
  Text,
  theme,
} from '@chakra-ui/react';

import Movie from './components/Movie';
import About from './components/About';
import Slideup from './components/Slideup';

function App() {
  const videoSrc = '/assets/v_for_vendetta.mp4';
  return (
    <ChakraProvider theme={theme}>
      <Box position={'relative'} overflow={'hidden'} minH={'100vh'}>
        <video
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <Box zIndex={1} position={'relative'}>
          <Flex mt={3}>
            <Text color={'white'} fontSize={'2xl'} fontWeight={'bold'}>
              MovieList
            </Text>
            <Spacer />
            <About />
          </Flex>
          <Center>
            <Text color={'white'} fontSize={'8xl'} fontWeight={'extrabold'}>
              A Premium Movie Introducing
            </Text>
          </Center>
          <Center>
            <Text color={'white'} fontSize={'8xl'} fontWeight={'extrabold'}>
              <Highlight
                query={'YTS'}
                styles={{ px: '2', py: '1', rounded: '10', bg: 'red.100' }}
              >
                from YTS Movie
              </Highlight>
            </Text>
          </Center>
          <Slideup />
        </Box>
        <Movie />
      </Box>
    </ChakraProvider>
  );
}

export default App;
