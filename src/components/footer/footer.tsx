import { Avatar, Button, Flex, Image, Text } from '@chakra-ui/react';

import Main from '~/assets/footer/Main.svg';
import Search from '~/assets/footer/Search.svg';
import Write from '~/assets/footer/Write.svg';
import mockAvatar from '~/assets/header/Breakfast.png';

const Footer = () => (
    <Flex
        width='100%'
        height='84px'
        bg='#FFFFD3'
        position='fixed'
        bottom={0}
        left={0}
        right={0}
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
    >
        <Button
            variant='ghost'
            height='84px'
            width='calc(100% / 4)'
            display='flex'
            flexDir='column'
            alignItems='center'
        >
            <Image src={Main} alt='' width='40px' height='40px' margin='4px' />
            <Text fontWeight={500} fontSize='12px' lineHeight='16px'>
                Главная
            </Text>
        </Button>
        <Button
            variant='ghost'
            height='84px'
            width='calc(100% / 4)'
            display='flex'
            flexDir='column'
            alignItems='center'
        >
            <Image src={Search} alt='' />
            <Text fontWeight={400} fontSize='12px' lineHeight='16px'>
                Поиск
            </Text>
        </Button>
        <Button
            variant='ghost'
            height='84px'
            width='calc(100% / 4)'
            display='flex'
            flexDir='column'
            alignItems='center'
        >
            <Image src={Write} alt='' />
            <Text fontWeight={400} fontSize='12px' lineHeight='16px'>
                Записать
            </Text>
        </Button>
        <Button
            variant='ghost'
            height='84px'
            width='calc(100% / 4)'
            display='flex'
            flexDir='column'
            alignItems='center'
        >
            <Avatar src={mockAvatar} width='40px' height='40px' margin='4px' />
            <Text fontWeight={400} fontSize='12px' lineHeight='16px'>
                Мой профиль
            </Text>
        </Button>
    </Flex>
);

export default Footer;
