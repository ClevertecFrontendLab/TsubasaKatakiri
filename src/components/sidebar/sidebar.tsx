import { Button, Flex, Image, Text } from '@chakra-ui/react';

import Bookmark from '~/assets/sidebar/BsBookmarkHeart.svg';
import Smile from '~/assets/sidebar/BsEmojiHeartEyes.svg';
import People from '~/assets/sidebar/BsPeopleFill.svg';
import WriteDark from '~/assets/sidebar/IconButton.svg';

const Sidebar = () => (
    <Flex
        width='208px'
        direction='column'
        alignItems='center'
        position='fixed'
        top='80px'
        height='calc(100vh - 80px)'
        right={0}
        zIndex={10}
        bgColor='#FFFFFF'
    >
        <Flex direction='column' alignItems='center' py='16px' gap='16px'>
            <Flex gap='10px' py='8px' height='40px' alignItems='center'>
                <Image src={Bookmark} alt='Bookmarks' />
                <Text my={0} color='#2DB100' fontWeight={600}>
                    185
                </Text>
            </Flex>
            <Flex gap='10px' py='8px' height='40px' alignItems='center'>
                <Image src={People} alt='Shares' />
                <Text my={0} color='#2DB100' fontWeight={600}>
                    589
                </Text>
            </Flex>
            <Flex gap='10px' py='8px' height='40px' alignItems='center'>
                <Image src={Smile} alt='Likes' />
                <Text my={0} color='#2DB100' fontWeight={600}>
                    587
                </Text>
            </Flex>
        </Flex>
        <Button
            position='absolute'
            bottom={0}
            right={0}
            zIndex={3}
            variant='ghost'
            height='208px'
            width='208px'
            display='flex'
            flexDir='column'
            alignItems='center'
            gap='12px'
        >
            <Image src={WriteDark} alt='' boxShadow='0 0 48px #7ac000' borderRadius='50%' />
            <Text fontWeight={400} fontSize='12px' lineHeight='16px'>
                Записать рецепт
            </Text>
        </Button>
    </Flex>
);

export default Sidebar;
