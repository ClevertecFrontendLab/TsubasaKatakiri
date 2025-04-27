import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

import { Recipe } from '~/types/recipe';

interface Props {
    recipe: Recipe;
}

const RecipeValue = ({ recipe }: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');

    return (
        <Flex
            direction='column'
            alignItems='flex-start'
            gap='20px'
            width='100%'
            maxWidth={isWideDesktop ? '668px' : isPortable ? '100%' : '578px'}
        >
            <Text fontSize='14px' gap='20px' color='#000000CC'>
                * Калорийность на 1 порцию
            </Text>
            <Flex
                direction={isMobile ? 'column' : 'row'}
                alignItems='center'
                justifyContent='space-between'
                gap={isWideDesktop ? '24px' : '12px'}
                width='100%'
            >
                <Flex
                    direction={isMobile ? 'row' : 'column'}
                    width={isMobile ? '100%' : 'auto'}
                    alignItems='center'
                    justifyContent={isMobile ? 'space-between' : 'center'}
                    p='16px'
                    gap='12px'
                    border='1px solid #00000014'
                    borderRadius='16px'
                    flex={1}
                >
                    <Text fontSize='14px' lineHeight='20px' color='#0000007A' flex={1}>
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
                        minWidth='70px'
                    >
                        ккал
                    </Text>
                </Flex>
                <Flex
                    direction={isMobile ? 'row' : 'column'}
                    width={isMobile ? '100%' : 'auto'}
                    alignItems='center'
                    justifyContent={isMobile ? 'space-between' : 'center'}
                    p='16px'
                    gap='12px'
                    border='1px solid #00000014'
                    borderRadius='16px'
                    flex={1}
                >
                    <Text fontSize='14px' lineHeight='20px' color='#0000007A' flex={1}>
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
                        minWidth='70px'
                    >
                        грамм
                    </Text>
                </Flex>
                <Flex
                    direction={isMobile ? 'row' : 'column'}
                    width={isMobile ? '100%' : 'auto'}
                    alignItems='center'
                    justifyContent={isMobile ? 'space-between' : 'center'}
                    p='16px'
                    gap='12px'
                    border='1px solid #00000014'
                    borderRadius='16px'
                    flex={1}
                >
                    <Text fontSize='14px' lineHeight='20px' color='#0000007A' flex={1}>
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
                        minWidth='70px'
                    >
                        грамм
                    </Text>
                </Flex>
                <Flex
                    direction={isMobile ? 'row' : 'column'}
                    width={isMobile ? '100%' : 'auto'}
                    alignItems='center'
                    justifyContent={isMobile ? 'space-between' : 'center'}
                    p='16px'
                    gap='12px'
                    border='1px solid #00000014'
                    borderRadius='16px'
                    flex={1}
                >
                    <Text fontSize='14px' lineHeight='20px' color='#0000007A' flex={1}>
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
                        minWidth='70px'
                    >
                        грамм
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default RecipeValue;
