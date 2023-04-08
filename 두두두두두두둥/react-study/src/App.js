import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import Prop from './components/Prop';

import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const student = [
    { id: 1, name: 'Kang' },
    { id: 3, name: 'Ko' },
    { id: 4, name: 'Koo' },
    { id: 5, name: 'Kim' },
  ];
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent={'end'} m={'3'}>
        <ColorModeSwitcher />
      </Flex>
      <Flex m={'3'}>
        {student.map(i => (
          <Prop id={i.id} name={i.name} />
        ))}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
