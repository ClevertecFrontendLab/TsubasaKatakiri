import { Flex, Heading, Image, Tag, TagLabel, Text, useMediaQuery } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import { Recipe } from '~/types/recipe';

interface Props {
    recipe: Recipe;
}

const RecipeSteps = ({ recipe }: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');

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
                        minHeight={isPortable ? '128px' : '244px'}
                        height='100%'
                        maxHeight={isPortable ? '128px' : '244px'}
                        minWidth={isPortable ? '158px' : '346px'}
                        width='100%'
                        maxWidth={isPortable ? '158px' : '346px'}
                        objectFit='cover'
                        borderTopLeftRadius='8px'
                        borderBottomLeftRadius='8px'
                    />
                )}
                <Flex
                    flexDirection='column'
                    alignItems='flex-start'
                    px={isPortable ? '8px' : '24px'}
                    py={isPortable ? '8px' : '20px'}
                    gap={isPortable ? '12px' : '16px'}
                    width='100%'
                >
                    <Tag bgColor='#0000000F' color='#000000' fontWeight={400} key={item.stepNumber}>
                        <TagLabel>{`Шаг ${item.stepNumber}`}</TagLabel>
                    </Tag>
                    <Text fontSize='14px' lineHeight='20px'>
                        {item.description}
                    </Text>
                </Flex>
            </Flex>,
        );
    });

    return (
        <Flex
            direction='column'
            alignItems='flex-start'
            gap='20px'
            width='100%'
            maxWidth={isWideDesktop ? '668px' : isMobile ? '100%' : isPortable ? '604px' : '578px'}
        >
            <Heading
                as='h3'
                fontWeight={500}
                fontSize={isPortable ? '24px' : '48px'}
                lineHeight={isPortable ? '32px' : '48px'}
            >
                Шаги приготовления
            </Heading>
            <Flex direction='column' gap='20px' width='100%'>
                {steps}
            </Flex>
        </Flex>
    );
};

export default RecipeSteps;
