import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Image,
    Tag,
    TagLabel,
    Text,
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
}: Props) => (
    <Card width='calc((100% - 24px) / 2)' direction='row'>
        <CardHeader padding={0} height='244px' width='344px'>
            <Image
                src={cardImage}
                alt={name}
                min-width='100%'
                width='100%'
                height='244px'
                max-width='344px'
                objectFit='cover'
                position='relative'
            />
            {recommended && (
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
        <CardBody padding='16px 24px 20px' display='flex' flexDir='column' gap='24px'>
            <Flex width='100%' justifyContent='space-between'>
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
            </Flex>
            <Flex flexDir='column' alignItems='flex-start' gap='8px'>
                <Heading noOfLines={1} as='h4' fontSize='20px' lineHeight='28px' fontWeight={500}>
                    {name}
                </Heading>
                <Text noOfLines={3} fontWeight={400} fontSize='14px' lineHeight='20px'>
                    {description}
                </Text>
            </Flex>
            <Flex flexDirection='row' justifyContent='flex-end' gap='8px' width='100%'>
                <Button
                    leftIcon={<Image src={Bookmark} alt='' />}
                    variant='outline'
                    borderColor='#0000007A'
                >
                    Сохранить
                </Button>
                <Button variant='solid' bgColor='#000000' color='#FFFFFF'>
                    Готовить
                </Button>
            </Flex>
        </CardBody>
    </Card>
);

export default JuiciestRecipeCard;
