import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';

import avatar1 from '~/assets/avatars/image1.png';
import avatar2 from '~/assets/avatars/image2.png';
import second from '~/assets/frying-pan.svg';
import national from '~/assets/international.svg';
import img1 from '~/assets/juiciestRecipes/image.png';
import img2 from '~/assets/juiciestRecipes/image1.png';
import img3 from '~/assets/juiciestRecipes/image2.png';
import img4 from '~/assets/juiciestRecipes/image3.png';

import JuiciestRecipeCard from '../juiciest-recipe-card/juiciest-recipe-card';

const JuiciestRecipes = () => (
    <Flex
        flexDirection='column'
        alignItems='flex-start'
        gap='24px'
        width='100%'
        mb='40px'
        px='24px'
    >
        <Flex flexDirection='row' alignItems='center' justifyContent='space-between' width='100%'>
            <Heading as='h1' my={0} fontWeight={500} fontSize='48px' lineHeight='48px'>
                Самое сочное
            </Heading>
            <Button bgColor='#B1FF2E' rightIcon={<ArrowForwardIcon />}>
                Вся подборка
            </Button>
        </Flex>
        <Flex flexFlow='row wrap' alignItems='flex-start' gap='24px' width='100%'>
            <JuiciestRecipeCard
                cardImage={img1}
                name='Кнели со спагетти'
                description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                categoryIcon={second}
                category='Вторые блюда'
                likes={152}
                bookmarks={85}
            />
            <JuiciestRecipeCard
                cardImage={img2}
                name='Пряная ветчина по итальянски'
                description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                categoryIcon={second}
                category='Вторые блюда'
                likes={257}
                bookmarks={159}
                recommended='Елена Высоцкая'
                recommendedAvatar={avatar1}
            />
            <JuiciestRecipeCard
                cardImage={img3}
                name='Лапша с курицей и шафраном'
                description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                categoryIcon={second}
                category='Вторые блюда'
                likes={342}
                bookmarks={258}
                recommended='Alex Cook'
                recommendedAvatar={avatar2}
            />
            <JuiciestRecipeCard
                cardImage={img4}
                name='Том-ям с капустой кимчи'
                description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                categoryIcon={national}
                category='Национальные'
                likes={324}
                bookmarks={124}
            />
        </Flex>
    </Flex>
);

export default JuiciestRecipes;
