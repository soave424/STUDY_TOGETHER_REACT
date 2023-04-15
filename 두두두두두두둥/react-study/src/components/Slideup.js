import { Box, Text, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';

function Slideup() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <VStack w={'100%'} position={'relative'}>
      <Box w={'100%'}>
        <Slider {...settings}>
          <Box>
            <Text
              fontSize={'8xl'}
              fontWeight={'extrabold'}
              color={'#b578ff'}
              textAlign={'center'}
            >
              For MovieLover
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={'8xl'}
              fontWeight={'extrabold'}
              color={'#b578ff'}
              textAlign={'center'}
            >
              For You
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={'8xl'}
              fontWeight={'extrabold'}
              color={'#b578ff'}
              textAlign={'center'}
            >
              For Others
            </Text>
          </Box>
        </Slider>
      </Box>
    </VStack>
  );
}

export default Slideup;
