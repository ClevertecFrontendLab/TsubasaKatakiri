import { Flex, Text } from '@chakra-ui/react';

import { Recipe } from '~/types/recipe';

interface Props {
    recipe: Recipe;
}

const RecipeValue = ({ recipe }: Props) => {
    console.log(recipe);

    return (
        <Flex direction='column' alignItems='flex-start' gap='20px' width='100%' maxWidth='668px'>
            <Text fontSize='14px' gap='20px' color='#000000CC'>
                * Калорийность на 1 порцию
            </Text>
            <Flex
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                gap='24px'
                width='100%'
            >
                <Flex
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    p='16px'
                    gap='12px'
                    border='1px solid #00000014'
                    borderRadius='16px'
                    flex={1}
                >
                    <Text fontSize='14px' lineHeight='20px' color='#0000007A'>
                        калорийность
                    </Text>
                    <Text fontSize='36px' lineHeight='40px' fontWeight={500} color='#134B00'>
                        {recipe.nutritionValue.calories}
                    </Text>
                    <Text
                        textTransform='uppercase'
                        fontSize='14px'
                        lineHeight='20px'
                        color='#000000EB'
                        fontWeight={600}
                    >
                        ккал
                    </Text>
                </Flex>
                <Flex
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    p='16px'
                    gap='12px'
                    border='1px solid #00000014'
                    borderRadius='16px'
                    flex={1}
                >
                    <Text fontSize='14px' lineHeight='20px' color='#0000007A'>
                        белки
                    </Text>
                    <Text fontSize='36px' lineHeight='40px' fontWeight={500} color='#134B00'>
                        {recipe.nutritionValue.proteins}
                    </Text>
                    <Text
                        textTransform='uppercase'
                        fontSize='14px'
                        lineHeight='20px'
                        color='#000000EB'
                        fontWeight={600}
                    >
                        грамм
                    </Text>
                </Flex>
                <Flex
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    p='16px'
                    gap='12px'
                    border='1px solid #00000014'
                    borderRadius='16px'
                    flex={1}
                >
                    <Text fontSize='14px' lineHeight='20px' color='#0000007A'>
                        жиры
                    </Text>
                    <Text fontSize='36px' lineHeight='40px' fontWeight={500} color='#134B00'>
                        {recipe.nutritionValue.fats}
                    </Text>
                    <Text
                        textTransform='uppercase'
                        fontSize='14px'
                        lineHeight='20px'
                        color='#000000EB'
                        fontWeight={600}
                    >
                        грамм
                    </Text>
                </Flex>
                <Flex
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    p='16px'
                    gap='12px'
                    border='1px solid #00000014'
                    borderRadius='16px'
                    flex={1}
                >
                    <Text fontSize='14px' lineHeight='20px' color='#0000007A'>
                        углеводы
                    </Text>
                    <Text fontSize='36px' lineHeight='40px' fontWeight={500} color='#134B00'>
                        {recipe.nutritionValue.carbohydrates}
                    </Text>
                    <Text
                        textTransform='uppercase'
                        fontSize='14px'
                        lineHeight='20px'
                        color='#000000EB'
                        fontWeight={600}
                    >
                        грамм
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default RecipeValue;
