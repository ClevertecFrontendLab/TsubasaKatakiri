import { Flex, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { useParams } from 'react-router';

import mockAvatar from '~/assets/recipes/mockAvatar.jpg';
import MainLayout from '~/components/layout/main-layout';
import NewRecipes from '~/components/new-recipes/new-recipes';
import RecipeAuthor from '~/components/recipe-author/recipe-author';
import RecipeHeader from '~/components/recipe-header/recipe-header';
import RecipeIngredients from '~/components/recipe-ingredients/recipe-ingredients';
import RecipeSteps from '~/components/recipe-steps/recipe-steps';
import RecipeValue from '~/components/recipe-value/recipe-value';
import { Recipe } from '~/types/recipe';

import { recipeMockData } from './recipe-mock-data';

const RecipePage = () => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');

    const params = useParams();
    const recipeId = params.id;
    const [recipe, setRecipe] = useState<Recipe | undefined>();

    useEffect(() => {
        const mockRecipe: Recipe | undefined = recipeMockData.find(
            (item: Recipe) => item.id === recipeId,
        );
        setRecipe(mockRecipe);
    }, [recipeId]);

    return (
        <Fragment>
            <MainLayout>
                {recipe && (
                    <Flex
                        width='100%'
                        max-width='1360px'
                        px={isMobile ? '16px' : isPortable ? '20px' : '24px'}
                        py={isPortable ? '0' : '24px'}
                        direction='column'
                        alignItems='center'
                        gap='40px'
                    >
                        <RecipeHeader recipe={recipe} />
                        <RecipeValue recipe={recipe} />
                        <RecipeIngredients recipe={recipe} />
                        <RecipeSteps recipe={recipe} />
                        <RecipeAuthor
                            name='Сергей Разумов'
                            id='@serge25'
                            subscribers={125}
                            avatar={mockAvatar}
                        />
                    </Flex>
                )}
                <NewRecipes />
            </MainLayout>
        </Fragment>
    );
};

export default RecipePage;
