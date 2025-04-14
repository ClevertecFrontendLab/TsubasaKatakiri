import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    IconButton,
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
    recommended?: string;
    recommendedAvatar?: string;
}

const JuiciestRecipeCard = ({
    cardImage,
    name,
    description,
    categoryIcon,
    category,
    likes,
    bookmarks,
    recommended,
    recommendedAvatar,
}: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');

    return (
        <Card
            width={`${
                isWideDesktop
                    ? 'calc((100% - 24px) / 2)'
                    : isMobile
                      ? '100%'
                      : isPortable
                        ? 'calc((100% - 16px) / 2)'
                        : '100%'
            }`}
            direction='row'
        >
            <CardHeader
                padding={0}
                height={isPortable ? '128px' : '244px'}
                width={isPortable ? '158px' : '344px'}
            >
                <Image
                    src={cardImage}
                    alt={name}
                    min-width='100%'
                    width='100%'
                    height={isPortable ? '128px' : '244px'}
                    max-width='344px'
                    objectFit='cover'
                    position='relative'
                />
                {isPortable && (
                    <Tag
                        bgColor='#FFFFD3'
                        color='#000000'
                        fontWeight={400}
                        position='absolute'
                        top='8px'
                        left='8px'
                        p='2px 4px'
                        zIndex={1}
                    >
                        <Image src={categoryIcon} alt='' mr='2px' />
                        <TagLabel>{category}</TagLabel>
                    </Tag>
                )}
                {!isPortable && recommended && (
                    <Tag
                        bgColor='#D7FF94'
                        color='#000000'
                        fontWeight={400}
                        position='absolute'
                        bottom='20px'
                        left='24px'
                        zIndex={1}
                    >
                        <Image src={recommendedAvatar} alt='' mr='8px' width='16px' height='16px' />
                        <TagLabel>{recommended} рекомендует</TagLabel>
                    </Tag>
                )}
            </CardHeader>
            <CardBody
                padding={isPortable ? '8px 8px 4px' : '16px 24px 20px'}
                display='flex'
                flexDir='column'
                gap={isPortable ? 0 : '24px'}
            >
                <Flex width='100%' justifyContent='space-between'>
                    {!isPortable && (
                        <Tag bgColor='#FFFFD3' color='#000000' fontWeight={400}>
                            <Image src={categoryIcon} alt='' mr='8px' />
                            <TagLabel>{category}</TagLabel>
                        </Tag>
                    )}
                    <Flex>
                        {likes && (
                            <Flex gap='6px' px='4px' py='4px' height='24px' alignItems='center'>
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
                            <Flex gap='6px' px='4px' py='4px' height='24px' alignItems='center'>
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
                </Flex>
                <Flex flexDir='column' alignItems='flex-start' gap='8px'>
                    <Text
                        noOfLines={isPortable ? 2 : 1}
                        fontSize={isPortable ? '16px' : '20px'}
                        lineHeight={isPortable ? '24px' : '28px'}
                        fontWeight={500}
                        textAlign='left'
                    >
                        {name}
                    </Text>
                    {!isPortable && (
                        <Text
                            noOfLines={3}
                            fontWeight={400}
                            fontSize='14px'
                            lineHeight='20px'
                            align='left'
                        >
                            {description}
                        </Text>
                    )}
                </Flex>
                <Flex
                    flexDirection='row'
                    justifyContent='flex-end'
                    gap='8px'
                    width='100%'
                    mt='auto'
                >
                    {!isPortable && (
                        <Button
                            leftIcon={<Image src={Bookmark} alt='' />}
                            variant='outline'
                            borderColor='#0000007A'
                            size='sm'
                        >
                            Сохранить
                        </Button>
                    )}
                    {isPortable && (
                        <IconButton
                            icon={<Image src={Bookmark} alt='' />}
                            variant='outline'
                            borderColor='#0000007A'
                            size='xs'
                            aria-label=''
                        />
                    )}
                    <Button
                        variant='solid'
                        bgColor='#000000'
                        color='#FFFFFF'
                        size={isPortable ? 'xs' : 'sm'}
                    >
                        Готовить
                    </Button>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default JuiciestRecipeCard;
