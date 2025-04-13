import { HamburgerIcon } from '@chakra-ui/icons';
import { Button, Flex, Image, Spacer, useMediaQuery } from '@chakra-ui/react';

import Logo from '/logo.svg';
import MobileLogo from '/mobile-logo.svg';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import UserBox from '../user-box/user-box';
import LikesData from './likes-data';

const Header = () => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isDesktop] = useMediaQuery('(min-width: 992px)');

    return (
        <Flex
            width='100%'
            height={`${isDesktop ? '80px' : '64px'}`}
            alignItems='center'
            px='16px'
            py='16px'
            bg='#FFFFD3'
            position='fixed'
            justifyContent={`${isDesktop ? 'flex-start' : 'space-between'}`}
            top={0}
            left={0}
            right={0}
            zIndex={3}
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
                    <LikesData />
                    <Button variant='ghost' width='48px' height='48px' px={0}>
                        <HamburgerIcon width='24px' height='24px' />
                    </Button>
                </Flex>
            ) : (
                <UserBox />
            )}
        </Flex>
    );
};

export default Header;
