import { Flex, Image, Text } from '@chakra-ui/react';

import Bookmark from '~/assets/sidebar/BsBookmarkHeart.svg';
import Smile from '~/assets/sidebar/BsEmojiHeartEyes.svg';
import People from '~/assets/sidebar/BsPeopleFill.svg';

const Sidebar = () => (
    <Flex
        width='208px'
        direction='column'
        alignItems='center'
        position='fixed'
        top='80px'
        right={0}
        py='16px'
        gap='16px'
    >
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
);

export default Sidebar;
