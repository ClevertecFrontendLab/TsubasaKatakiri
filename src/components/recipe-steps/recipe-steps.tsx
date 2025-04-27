import { Flex, Heading, Image, Tag, TagLabel, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import { Recipe } from '~/types/recipe';

interface Props {
    recipe: Recipe;
}

const RecipeSteps = ({ recipe }: Props) => {
    const steps: ReactElement[] = [];

    recipe.steps.forEach((item) => {
        steps.push(
            <Flex
                direction='row'
                alignItems='flex-start'
                justifyContent='space-between'
                border='1px solid #00000014'
                borderRadius='8px'
            >
                {item.image && (
                    <Image
                        src={item.image}
                        alt=''
                        height='100%'
                        maxHeight='346px'
                        width='100%'
                        maxWidth='244px'
                        objectFit='cover'
                        borderTopLeftRadius='8px'
                        borderBottomLeftRadius='8px'
                    />
                )}
                <Flex
                    flexDirection='column'
                    alignItems='flex-start'
                    px='24px'
                    py='20px'
                    gap='16px'
                    width='100%'
                >
                    <Tag bgColor='#0000000F' color='#000000' fontWeight={400} key={item.stepNumber}>
                        <TagLabel>{`Шаг ${item.stepNumber}`}</TagLabel>
                    </Tag>
                    <Text>{item.description}</Text>
                </Flex>
            </Flex>,
        );
    });

    return (
        <Flex direction='column' alignItems='flex-start' gap='20px' width='100%' maxWidth='668px'>
            <Heading as='h3' fontWeight={500} fontSize='48px' lineHeight='48px'>
                Шаги приготовления
            </Heading>
            <Flex direction='column' gap='20px' width='100%'>
                {steps}
            </Flex>
        </Flex>
    );
};

export default RecipeSteps;
