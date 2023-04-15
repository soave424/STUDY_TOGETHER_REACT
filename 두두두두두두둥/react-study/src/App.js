import {
  Box,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Highlight,
  Spacer,
  Text,
  theme,
} from '@chakra-ui/react';

import About from './components/About';

function App() {
  const videoId = 'CEDikKu-ojU';
  return (
    <ChakraProvider theme={theme}>
      <Box position={'relative'} overflow={'hidden'} minH={'100vh'}>
        <iframe
          title="background video"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
          }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playlist=${videoId}&modestbranding=1`}
          frameBorder={'0'}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Box zIndex={1} position={'relative'}>
          <Flex m={20}>
            <Heading color={'white'}>Introducing Movie</Heading>
            <Spacer />
            <About />
          </Flex>
          <Center>
            <Text fontSize={'8xl'} fontWeight={'extrabold'}>
              A Premium Movie Introducing
            </Text>
          </Center>
          <Center>
            <Text fontSize={'8xl'} fontWeight={'extrabold'}>
              <Highlight
                query={'YTS'}
                styles={{ px: '2', py: '1', rounded: '10', bg: 'red.100' }}
              >
                from YTS Movie
              </Highlight>
            </Text>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
