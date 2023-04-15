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
      <Button onClick={onOpen} color={'black'} mr={'5'}>
        About
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent colorScheme={'black'}>
          <ModalHeader>Movie blah</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>How to use</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              I understand
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default About;
