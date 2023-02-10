import { Box, Button, Heading, HStack, Input, Stack, VStack, Text } from "@chakra-ui/react";
import { AiOutlineSend, AiOutlineYoutube, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w='full' px='4'>
                    <Heading size='md' textTransform={'uppercase'} textAlign={['center', 'left']}>
                        Subscribe to get updates
                    </Heading>
                    <HStack
                        py='2'
                    >
                        <Input 
                            placeholder="Enter Email here..." 
                            border='none' 
                            borderRadius='20px'
                            // w='half'
                        />
                        <Button p='0' 
                            colorScheme='messenger'
                            variant='ghost'
                            borderRadius='0 20px 20px 0' 
                        >
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>

                <VStack 
                    w='full' 
                    borderLeft={['none', '1px solid white']} 
                    borderRight={['none', '1px solid white']} 
                >
                    <Heading textTransform='uppercase' textAlign={'center'}>
                        VIDEO SITE
                    </Heading>
                    <Text>All rights reserved</Text>
                </VStack>

                <VStack 
                    w='full'  
                >
                    <Heading size={'md'} textTransform='uppercase'>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme='white'>
                        <a target='blank' href="http://youtube.com">
                            <AiOutlineYoutube size='30'/>
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme='white'>
                        <a target='blank' href="http://instagram.com">
                            <AiOutlineInstagram size='30'/>
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme='white'>
                        <a target='blank' href="http://github.com/gjha133">
                            <AiOutlineGithub size='30'/>
                        </a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;