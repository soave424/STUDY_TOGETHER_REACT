import { Box, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';

function Prop({ id, name }) {
  const [point, setPoint] = useState(0);
  const plusPoint = () => {
    setPoint(point + 1);
  };

  console.log(`${name} is rendered`);
  return (
    <Box
      bgColor={'#FCD37E'}
      w={'162px'}
      h={'72px'}
      borderRadius={'lg'}
      display={'flex'}
      m={'5px'}
      onClick={plusPoint}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Heading m={'3'}>{id}</Heading>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        <Text as={'b'}>{name}</Text>
        <Text as={'b'}>{point}</Text>
      </Box>
    </Box>
  );
}

export default Prop;
