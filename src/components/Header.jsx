import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        pos={'fixed'}
        top={4}
        left={4}
        zIndex='overlay'
        colorScheme="messenger"
        p={0}
        w={10}
        h={10}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO SITE</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'messenger'}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'messenger'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'messenger'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'messenger'}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack pos={'absolute'} bottom={10} left={0} w={'full'} justifyContent={'space-evenly'}>
              <Button onClick={onClose} colorScheme={'messenger'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'messenger'} variant={'outline'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;