import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
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
    cardImage: string;
    name: string;
    description: string;
    categoryIcon: string;
    category: string;
    likes?: number;
    bookmarks?: number;
}

const NewRecipeCard = ({
    cardImage,
    name,
    description,
    categoryIcon,
    category,
    likes,
    bookmarks,
}: Props) => {
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');

    return (
        <Card
            width={`${isWideDesktop ? '322px' : isPortable ? '158px' : '279px'}`}
            minWidth={`${isWideDesktop ? 'unset' : isPortable ? '158px' : '279px'}`}
            maxWidth={`${isWideDesktop ? 'unset' : isPortable ? '158px' : '279px'}`}
            height={isPortable ? '220px' : '100%'}
            flex={1}
        >
            <CardHeader padding={0}>
                <Image
                    src={cardImage}
                    alt={name}
                    width='100%'
                    height={isPortable ? '128px' : '100%'}
                    objectFit='cover'
                    position='relative'
                    borderTopRightRadius='8px'
                    borderTopLeftRadius='8px'
                />
                {isPortable && (
                    <Tag
                        bgColor='#D7FF94'
                        color='#000000'
                        fontWeight={400}
                        position='absolute'
                        top='8px'
                        left='8px'
                        right='8px'
                    >
                        <Image src={categoryIcon} alt='' mr='2px' />
                        <TagLabel>{category}</TagLabel>
                    </Tag>
                )}
            </CardHeader>
            <CardBody
                padding={isPortable ? '0px 8px 4px' : '16px 24px 20px'}
                display='flex'
                flexDir='column'
                gap='8px'
            >
                <Heading
                    noOfLines={isPortable ? 2 : 1}
                    as='h4'
                    fontSize={isPortable ? '16px' : '20px'}
                    lineHeight={isPortable ? '24px' : '28px'}
                    fontWeight={500}
                >
                    {name}
                </Heading>
                {!isPortable && (
                    <Text noOfLines={3} fontWeight={400} fontSize='14px' lineHeight='20px'>
                        {description}
                    </Text>
                )}
            </CardBody>
            <CardFooter
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                padding={isPortable ? '0px 8px 4px' : '0px 24px 20px'}
            >
                {!isPortable && (
                    <Tag bgColor='#D7FF94' color='#000000' fontWeight={400}>
                        <Image src={categoryIcon} alt='' mr='8px' />
                        <TagLabel>{category}</TagLabel>
                    </Tag>
                )}
                <Flex height={isPortable ? '24px' : 'unset'}>
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

export default NewRecipeCard;
