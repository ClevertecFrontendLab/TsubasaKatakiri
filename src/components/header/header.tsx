// import { HamburgerIcon } from '@chakra-ui/icons';
// import { Button, Flex, Image, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import { Flex, useMediaQuery } from '@chakra-ui/react';

// import Logo from '/logo.svg';
// import MobileLogo from '/mobile-logo.svg';

// import Bookmark from '~/assets/sidebar/BsBookmarkHeart.svg';
// import Smile from '~/assets/sidebar/BsEmojiHeartEyes.svg';
// import People from '~/assets/sidebar/BsPeopleFill.svg';

// import Breadcrumbs from '../breadcrumbs/breadcrumbs';
// import UserBox from '../user-box/user-box';

const Header = () => {
    // const [isMobile] = useMediaQuery('(max-width: 767px)');
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
            {/* {isMobile ? (
                <Image src={MobileLogo} alt='yee-daa' height='32px' />
            ) : (
                <Image src={Logo} alt='yee-daa' height='32px' />
            )}
            <Spacer width='100%' maxWidth='128px' />
            {isDesktop && <Breadcrumbs />}
            {!isDesktop ? (
                <Flex direction='row' alignItems='center' gap='16px'>
                    <Flex>
                        <Flex gap='10px' px='8px' py='4px' height='24px' alignItems='center'>
                            <Image width='12px' src={Bookmark} alt='Bookmarks' />
                            <Text
                                fontSize='12px'
                                lineHeight='16px'
                                my={0}
                                color='#2DB100'
                                fontWeight={600}
                            >
                                185
                            </Text>
                        </Flex>
                        <Flex gap='10px' px='8px' py='4px' height='24px' alignItems='center'>
                            <Image width='12px' src={People} alt='Shares' />
                            <Text
                                fontSize='12px'
                                lineHeight='16px'
                                my={0}
                                color='#2DB100'
                                fontWeight={600}
                            >
                                589
                            </Text>
                        </Flex>
                        <Flex gap='10px' px='8px' py='4px' height='24px' alignItems='center'>
                            <Image width='12px' src={Smile} alt='Likes' />
                            <Text
                                fontSize='12px'
                                lineHeight='16px'
                                my={0}
                                color='#2DB100'
                                fontWeight={600}
                            >
                                587
                            </Text>
                        </Flex>
                    </Flex>
                    <Button variant='ghost' width='48px' height='48px' px={0}>
                        <HamburgerIcon width='24px' height='24px' />
                    </Button>
                </Flex>
            ) : (
                <UserBox />
            )} */}
        </Flex>
    );
};

export default Header;
