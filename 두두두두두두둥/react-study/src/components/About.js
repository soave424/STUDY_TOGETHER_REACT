import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} color={'white'}>
        About
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Movie blah</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>How to use</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="whiteAlpha"
              mr={3}
              onClick={onClose}
              color={'white'}
            >
              I understand
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default About;
