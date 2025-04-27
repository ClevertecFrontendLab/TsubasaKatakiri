import { Box, Button, Flex, Image, Spacer, useMediaQuery } from '@chakra-ui/react';
import { Fragment, useState } from 'react';

import Logo from '/logo.svg';
import MobileLogo from '/mobile-logo.svg';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import BurgerMenu from '../burger-menu/burger-menu';
import UserBox from '../user-box/user-box';
import LikesData from './likes-data';

const Header = () => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isDesktop] = useMediaQuery('(min-width: 992px)');

    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

    const handleControlBurger = () => {
        if (isBurgerOpen) setIsBurgerOpen(false);
        else setIsBurgerOpen(true);
    };

    console.log(isBurgerOpen);

    return (
        <Fragment>
            <Flex
                width='100%'
                height={`${isDesktop ? '80px' : '64px'}`}
                alignItems='center'
                px='16px'
                py='16px'
                bg={isBurgerOpen ? '#FFFFFF' : '#FFFFD3'}
                position='fixed'
                justifyContent={`${isDesktop ? 'flex-start' : 'space-between'}`}
                top={0}
                left={0}
                right={0}
                zIndex={10}
                data-test-id='header'
            >
                {isMobile ? (
                    <Image src={MobileLogo} alt='yee-daa' height='32px' />
                ) : (
                    <Image src={Logo} alt='yee-daa' height='32px' />
                )}
                {isDesktop && <Spacer width='100%' maxWidth='128px' />}
                {isDesktop && <Breadcrumbs />}
                {!isDesktop ? (
                    <Flex direction='row' alignItems='center' gap='16px'>
                        {!isBurgerOpen && <LikesData />}
                        <Button
                            variant='ghost'
                            width='48px'
                            height='48px'
                            px={0}
                            onClick={handleControlBurger}
                        >
                            <Flex direction='column' gap='3px'>
                                <Box
                                    width='16px'
                                    height='2px'
                                    bgColor='#000000'
                                    transform={
                                        isBurgerOpen ? 'rotateZ(-45deg) translateY(3.5px)' : 'unset'
                                    }
                                    transition='all 0.25s ease'
                                />
                                {!isBurgerOpen && (
                                    <Box
                                        width='16px'
                                        height='2px'
                                        bgColor='#000000'
                                        transition='all 0.25s ease'
                                    />
                                )}
                                <Box
                                    width='16px'
                                    height='2px'
                                    bgColor='#000000'
                                    transform={
                                        isBurgerOpen ? 'rotateZ(45deg) translateY(-3.5px)' : 'unset'
                                    }
                                    transition='all 0.25s ease'
                                />
                            </Flex>
                        </Button>
                    </Flex>
                ) : (
                    <UserBox />
                )}
            </Flex>
            <BurgerMenu isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />
        </Fragment>
    );
};

export default Header;
