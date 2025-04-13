import { Flex, Image, Text } from '@chakra-ui/react';

import Bookmark from '~/assets/sidebar/BsBookmarkHeart.svg';
import Smile from '~/assets/sidebar/BsEmojiHeartEyes.svg';
import People from '~/assets/sidebar/BsPeopleFill.svg';

const LikesData = () => (
    <Flex>
        <Flex gap='10px' px='8px' py='4px' height='24px' alignItems='center'>
            <Image width='12px' src={Bookmark} alt='Bookmarks' />
            <Text fontSize='12px' lineHeight='16px' my={0} color='#2DB100' fontWeight={600}>
                185
            </Text>
        </Flex>
        <Flex gap='10px' px='8px' py='4px' height='24px' alignItems='center'>
            <Image width='12px' src={People} alt='Shares' />
            <Text fontSize='12px' lineHeight='16px' my={0} color='#2DB100' fontWeight={600}>
                589
            </Text>
        </Flex>
        <Flex gap='10px' px='8px' py='4px' height='24px' alignItems='center'>
            <Image width='12px' src={Smile} alt='Likes' />
            <Text fontSize='12px' lineHeight='16px' my={0} color='#2DB100' fontWeight={600}>
                587
            </Text>
        </Flex>
    </Flex>
);

export default LikesData;
