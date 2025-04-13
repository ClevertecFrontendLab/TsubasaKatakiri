import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, useMediaQuery } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';

interface Props {
    isOnPage: boolean;
    children: ReactNode;
}

const JuiciestRecipes = ({ isOnPage, children }: Props) => {
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');
    const navigate = useNavigate();

    const handleAllClick = () => {
        navigate('/juiciest');
    };

    return (
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
                    <Heading
                        as='h1'
                        my={0}
                        fontWeight={500}
                        fontSize={`${isWideDesktop ? '48px' : '36px'}`}
                        lineHeight={`${isWideDesktop ? '48px' : '40px'}`}
                    >
                        Самое сочное
                    </Heading>
                    <Button
                        bgColor='#B1FF2E'
                        rightIcon={<ArrowForwardIcon />}
                        onClick={() => handleAllClick()}
                        data-test-id='juiciest-link'
                    >
                        Вся подборка
                    </Button>
                </Flex>
            )}
            <Flex flexFlow='row wrap' alignItems='flex-start' gap='24px' width='100%'>
                {children}
            </Flex>
        </Flex>
    );
};

export default JuiciestRecipes;
