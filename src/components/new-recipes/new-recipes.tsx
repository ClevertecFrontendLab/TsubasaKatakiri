import { Flex, Heading } from '@chakra-ui/react';

import img1 from '~/assets/newRecipes/image.png';
import first from '~/assets/pot.svg';

import NewRecipeCard from '../new-recipe-card/new-recipe-card';

const NewRecipes = () => (
    <Flex flexDirection='column' alignItems='flex-start' gap='24px'>
        <Heading as='h1' mt={0} mb='32px' fontWeight={500}>
            Новые рецепты
        </Heading>
        <Flex flexDirection='row' alignItems='flex-start' gap='24px'>
            <NewRecipeCard
                cardImage={img1}
                name='Солянка с грибами'
                description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                categoryIcon={first}
                category='Первые блюда'
            />
        </Flex>
    </Flex>
);

export default NewRecipes;
