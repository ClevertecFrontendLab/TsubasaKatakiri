import { Button, Flex, Image, Tag, TagLabel, Text, useMediaQuery } from '@chakra-ui/react';
import { ReactElement } from 'react';

import Bookmark from '~/assets/sidebar/BsBookmarkHeart.svg';
import Smile from '~/assets/sidebar/BsEmojiHeartEyes.svg';
import { Recipe } from '~/types/recipe';

import clock from '../../assets/recipes/BsAlarm.svg';
import { AccordionData } from '../aside/accordion-data';

interface Props {
    recipe: Recipe;
}

const RecipeHeader = ({ recipe }: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');

    const tags: ReactElement[] = [];

    recipe.category.forEach((item) => {
        const tagContent = AccordionData.find((data) => data.href.slice(1) === item);
        if (tagContent) {
            tags.push(
                <Tag bgColor='#FFFFD3' color='#000000' fontWeight={400} key={item}>
                    <Image src={tagContent.icon} alt='' mr='8px' />
                    <TagLabel>{tagContent.category}</TagLabel>
                </Tag>,
            );
        }
    });

    return (
        <Flex
            width='100%'
            height={isMobile ? '100%' : isPortable ? '224px' : '410px'}
            flexDir={isMobile ? 'column' : 'row'}
            alignItems='flex-start'
            justifyContent='space-between'
            gap='24px'
        >
            <Flex
                width='100%'
                height='100%'
                maxWidth={
                    isWideDesktop ? '553px' : isMobile ? '100%' : isPortable ? '232px' : '353px'
                }
            >
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    width='100%'
                    minHeight='100%'
                    objectFit='cover'
                    borderRadius='8px'
                />
            </Flex>
            <Flex
                width='100%'
                height='100%'
                flexDir='column'
                alignItems='flex-start'
                justifyContent='flex-start'
            >
                <Flex
                    width='100%'
                    flexDir='row'
                    alignItems='flex-start'
                    justifyContent='space-between'
                    mb='32px'
                >
                    <Flex
                        width='auto'
                        flexFlow='row wrap'
                        alignItems='flex-start'
                        justifyContent='flex-start'
                        columnGap='16px'
                        rowGap='8px'
                    >
                        {tags}
                    </Flex>
                    <Flex gap='8px'>
                        {recipe.bookmarks && (
                            <Flex gap='8px' px='12px' py='6px' height='32px' alignItems='center'>
                                <Image width='14px' src={Bookmark} alt='Bookmarks' />
                                <Text
                                    fontSize='14px'
                                    lineHeight='20px'
                                    my={0}
                                    color='#2DB100'
                                    fontWeight={600}
                                >
                                    {recipe.bookmarks}
                                </Text>
                            </Flex>
                        )}
                        {recipe.likes && (
                            <Flex gap='8px' px='12px' py='6px' height='32px' alignItems='center'>
                                <Image width='14px' src={Smile} alt='Likes' />
                                <Text
                                    fontSize='14px'
                                    lineHeight='20px'
                                    my={0}
                                    color='#2DB100'
                                    fontWeight={600}
                                >
                                    {recipe.likes}
                                </Text>
                            </Flex>
                        )}
                    </Flex>
                </Flex>
                <Flex
                    direction='column'
                    alignItems='flex-start'
                    justifyContent='space-between'
                    gap={isPortable ? '16px' : '24px'}
                    pb={isMobile ? '24px' : 0}
                >
                    <Text
                        fontWeight={700}
                        fontSize={isPortable ? '24px' : '48px'}
                        lineHeight={isPortable ? '32px' : '48px'}
                    >
                        {recipe.title}
                    </Text>
                    <Text fontSize='14px' lineHeight='20px'>
                        {recipe.description}
                    </Text>
                </Flex>
                <Flex
                    direction={isMobile ? 'column' : 'row'}
                    alignItems={isMobile ? 'flex-start' : 'flex-end'}
                    justifyContent='space-between'
                    mt='auto'
                    width='100%'
                    gap='12px'
                >
                    <Tag bgColor='#0000000F' color='#000000' fontWeight={400}>
                        <Image src={clock} alt='' mr='8px' />
                        <TagLabel>{recipe.time}</TagLabel>
                    </Tag>
                    <Flex direction='row' alignItems='center' justifyContent='flex-end' gap='16px'>
                        <Button
                            leftIcon={<Image src={Smile} alt='' />}
                            variant='outline'
                            borderColor='#0000007A'
                            size={isWideDesktop ? 'lg' : isPortable ? 'xs' : 'sm'}
                        >
                            Оценить рецепт
                        </Button>
                        <Button
                            leftIcon={<Image src={Bookmark} alt='' />}
                            variant='solid'
                            bgColor='#B1FF2E'
                            color='#000000'
                            size={isWideDesktop ? 'lg' : isPortable ? 'xs' : 'sm'}
                        >
                            Сохранить в закладки
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default RecipeHeader;
