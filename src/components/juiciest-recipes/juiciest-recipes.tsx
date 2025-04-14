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
    const [isMobileTurned] = useMediaQuery('(max-height: 751px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isMobile] = useMediaQuery('(max-width: 767px)');

    const navigate = useNavigate();

    const handleAllClick = () => {
        navigate('/juiciest');
    };

    return (
        <Flex
            flexDirection='column'
            alignItems='flex-start'
            gap={isPortable ? '12px' : '24px'}
            width='100%'
            mb='40px'
            px={isMobile ? '16px' : isPortable ? '20px' : '24px'}
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
                        fontSize={`${isWideDesktop ? '48px' : isPortable ? '24px' : '36px'}`}
                        lineHeight={`${isWideDesktop ? '48px' : isPortable ? '32px' : '40px'}`}
                    >
                        Самое сочное
                    </Heading>
                    {!isPortable && (
                        <Button
                            bgColor='#B1FF2E'
                            rightIcon={<ArrowForwardIcon />}
                            onClick={() => handleAllClick()}
                            data-test-id='juiciest-link'
                        >
                            Вся подборка
                        </Button>
                    )}
                </Flex>
            )}
            <Flex
                flexFlow='row wrap'
                alignItems='flex-start'
                gap={isPortable ? '16px' : '24px'}
                width='100%'
            >
                {children}
            </Flex>
            {(isPortable || isMobileTurned) && !isOnPage && (
                <Button
                    visibility={isPortable ? 'visible' : 'hidden'}
                    bgColor='#B1FF2E'
                    rightIcon={<ArrowForwardIcon />}
                    onClick={() => handleAllClick()}
                    data-test-id='juiciest-link-mobile'
                    margin='0 auto'
                >
                    Вся подборка
                </Button>
            )}
            {isOnPage && (
                <Button bgColor='#B1FF2E' mt='16px' mx='auto'>
                    Загрузить еще
                </Button>
            )}
        </Flex>
    );
};

export default JuiciestRecipes;
