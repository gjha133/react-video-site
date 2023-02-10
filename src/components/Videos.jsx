import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

import { videosArr } from "../assets/videosSource";


const Videos = () => {

    const [videoSrc, setVideoSrc] = useState([videosArr[0].link])

    return (
        <Stack direction={['column', 'row']} h='100vh'>
            <VStack w='full'>
                <video 
                    autoPlay
                    controls
                    controlsList="nodownload"
                    src={videoSrc}
                    style={{
                        width: '100%',
                }}
                ></video>
                <VStack alignItems={'flex-start'} p='8' w='full' overflowY='auto'>
                    <Heading>Sample Video</Heading>
                    <Text>This is a sample video for testing and demo. This is the description area</Text>
                </VStack>
            </VStack>
            <VStack 
                w={['full', 'xl']} 
                alignItems='stretch' 
                p='8' 
                spacing={'8'} 
                overflowY='auto'
            >
                {
                    videosArr.map(({id, link}, index) => (
                        <Button 
                            key={id}
                            variant={'ghost'} colorScheme='messenger'
                            onClick={() => setVideoSrc(link)}
                        >
                            {`Video ${index + 1}`}
                        </Button>
                    ))
                }
            </VStack>
        </Stack>
    );
};

export default Videos;