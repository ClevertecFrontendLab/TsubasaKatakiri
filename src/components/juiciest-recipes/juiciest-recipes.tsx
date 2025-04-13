import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    isOnPage: boolean;
    children: ReactNode;
}

const JuiciestRecipes = ({ isOnPage, children }: Props) => (
    <Flex
        flexDirection='column'
        alignItems='flex-start'
        gap='24px'
        width='100%'
        mb='40px'
        px='24px'
    >
        {!isOnPage && (
            <Flex
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
                width='100%'
            >
                <Heading as='h1' my={0} fontWeight={500} fontSize='48px' lineHeight='48px'>
                    Самое сочное
                </Heading>
                <Button bgColor='#B1FF2E' rightIcon={<ArrowForwardIcon />}>
                    Вся подборка
                </Button>
            </Flex>
        )}
        <Flex flexFlow='row wrap' alignItems='flex-start' gap='24px' width='100%'>
            {children}
        </Flex>
    </Flex>
);

export default JuiciestRecipes;
