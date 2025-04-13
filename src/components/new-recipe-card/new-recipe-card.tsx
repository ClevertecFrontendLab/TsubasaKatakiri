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
}: Props) => (
    <Card width='calc((100% - 24px * 3) / 4)'>
        <CardHeader padding={0}>
            <Image src={cardImage} alt={name} width='100%' />
        </CardHeader>
        <CardBody padding='16px 24px 20px' display='flex' flexDir='column' gap='8px'>
            <Heading as='h4' fontSize='20px' lineHeight='28px' fontWeight={500}>
                {name}
            </Heading>
            <Text noOfLines={3} fontWeight={400} fontSize='14px' lineHeight='20px'>
                {description}
            </Text>
        </CardBody>
        <CardFooter display='flex' alignItems='center' justifyContent='space-between'>
            <Tag bgColor='#D7FF94' color='#000000' fontWeight={400}>
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

export default NewRecipeCard;
