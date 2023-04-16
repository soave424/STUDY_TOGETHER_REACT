import { Box, Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg={'gray.200'} w={'100%'}>
      <Flex py={'4'} justify={'center'}>
        <Box>
          <Text>Made by doodoong</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
