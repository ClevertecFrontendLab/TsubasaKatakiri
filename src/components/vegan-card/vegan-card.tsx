import {
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Tag,
    TagLabel,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';

import Bookmark from '~/assets/sidebar/BsBookmarkHeart.svg';
import Smile from '~/assets/sidebar/BsEmojiHeartEyes.svg';

interface Props {
    name: string;
    description: string;
    categoryIcon: string;
    category: string;
    likes?: number;
    bookmarks?: number;
}

const VeganCard = ({ name, description, categoryIcon, category, likes, bookmarks }: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');

    return (
        <Card width={isMobile ? '100%' : 'calc((100% - 24px) / 2)'} flex={1}>
            <CardBody
                padding={isPortable ? '12px 12px 24px' : '16px 24px 20px'}
                display='flex'
                flexDir='column'
                gap='8px'
            >
                <Heading
                    noOfLines={1}
                    as='h4'
                    fontSize={isPortable ? '16px' : '20px'}
                    lineHeight={isPortable ? '24px' : '28px'}
                    fontWeight={500}
                >
                    {name}
                </Heading>
                <Text noOfLines={3} fontWeight={400} fontSize='14px' lineHeight='20px' pb='4px'>
                    {description}
                </Text>
            </CardBody>
            <CardFooter
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                padding={isPortable ? '0 12px 12px' : '20px 24px 24px'}
            >
                <Tag bgColor='#FFFFD3' color='#000000' fontWeight={400}>
                    <Image src={categoryIcon} alt='' mr='8px' />
                    <TagLabel>{category}</TagLabel>
                </Tag>
                <Flex>
                    {likes && (
                        <Flex gap='10px' px='8px' py='4px' height='24px' alignItems='center'>
                            <Image width='12px' src={Smile} alt='Bookmarks' />
                            <Text
                                fontSize='12px'
                                lineHeight='16px'
                                my={0}
                                color='#2DB100'
                                fontWeight={600}
                            >
                                {likes}
                            </Text>
                        </Flex>
                    )}
                    {bookmarks && (
                        <Flex gap='10px' px='8px' py='4px' height='24px' alignItems='center'>
                            <Image width='12px' src={Bookmark} alt='Bookmarks' />
                            <Text
                                fontSize='12px'
                                lineHeight='16px'
                                my={0}
                                color='#2DB100'
                                fontWeight={600}
                            >
                                {bookmarks}
                            </Text>
                        </Flex>
                    )}
                </Flex>
            </CardFooter>
        </Card>
    );
};

export default VeganCard;
