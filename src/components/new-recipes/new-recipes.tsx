import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, useMediaQuery } from '@chakra-ui/react';

import second from '~/assets/bay-leaf.svg';
import third from '~/assets/bread.svg';
import fourth from '~/assets/eggplant.svg';
import img1 from '~/assets/newRecipes/image.png';
import img2 from '~/assets/newRecipes/image1.png';
import img3 from '~/assets/newRecipes/image2.png';
import img4 from '~/assets/newRecipes/image3.png';
import first from '~/assets/pot.svg';

import NewRecipeCard from '../new-recipe-card/new-recipe-card';

const NewRecipes = () => {
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isMobile] = useMediaQuery('(max-width: 767px)');

    return (
        <Flex
            flexDirection='column'
            alignItems='flex-start'
            gap='24px'
            mb='40px'
            width={isPortable ? '100vw' : '100%'}
        >
            <Heading
                as='h1'
                my={0}
                fontWeight={500}
                fontSize={`${isWideDesktop ? '48px' : isPortable ? '24px' : '36px'}`}
                lineHeight={`${isWideDesktop ? '48px' : isPortable ? '32px' : '40px'}`}
                px={isMobile ? '16px' : isPortable ? '20px' : '24px'}
            >
                Новые рецепты
            </Heading>
            <Flex
                flexDirection='row'
                alignItems='flex-start'
                gap={isPortable ? '12px' : '24px'}
                overflowX='hidden'
                width='100%'
                pl={isMobile ? '16px' : isPortable ? '20px' : '24px'}
                pr={isWideDesktop ? '24px' : 0}
                position='relative'
            >
                {!isPortable && (
                    <IconButton
                        position='absolute'
                        left='16px'
                        top='50%'
                        transform='translateY(-50%)'
                        zIndex={3}
                        icon={<ArrowBackIcon />}
                        variant='solid'
                        backgroundColor='#000000'
                        color='#FFFFD3'
                        size='lg'
                        aria-label=''
                    />
                )}
                {!isPortable && (
                    <IconButton
                        position='absolute'
                        right='16px'
                        top='50%'
                        transform='translateY(-50%)'
                        zIndex={3}
                        icon={<ArrowForwardIcon />}
                        variant='solid'
                        backgroundColor='#000000'
                        color='#FFFFD3'
                        size='lg'
                        aria-label=''
                    />
                )}
                <Flex
                    flexDirection='row'
                    alignItems='flex-start'
                    gap={isPortable ? '12px' : '24px'}
                >
                    <NewRecipeCard
                        cardImage={img1}
                        name='Солянка с грибами'
                        description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                        categoryIcon={first}
                        category='Первые блюда'
                        bookmarks={1}
                    />
                    <NewRecipeCard
                        cardImage={img2}
                        name='Капустные котлеты'
                        description='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
                        categoryIcon={second}
                        category='Веганские блюда'
                        likes={1}
                        bookmarks={2}
                    />
                    <NewRecipeCard
                        cardImage={img3}
                        name='Оладьи на кефире "Пышные"'
                        description='Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.'
                        categoryIcon={third}
                        category='Десерты, выпечка'
                        likes={1}
                    />
                    <NewRecipeCard
                        cardImage={img4}
                        name='Салат "Здоровье"'
                        description='Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.'
                        categoryIcon={fourth}
                        category='Салаты'
                    />
                    <NewRecipeCard
                        cardImage={img4}
                        name='Салат "Здоровье"'
                        description='Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.'
                        categoryIcon={fourth}
                        category='Салаты'
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default NewRecipes;
