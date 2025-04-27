import { EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Spacer, Text } from '@chakra-ui/react';

import AccordionMenu from './accordion';

const Aside = () => {
    console.log('');

    return (
        <Flex
            direction='column'
            alignItems='flex-start'
            justifyContent='space-between'
            width='256px'
            minWidth='256px'
            maxWidth='256px'
            height='calc(100vh - 80px)'
            borderRight='1px solid #AAAAAA'
            position='fixed'
            left={0}
            top='80px'
            backgroundColor='#FFFFFF'
        >
            <AccordionMenu />
            <Spacer />
            <Flex direction='column' alignItems='flex-start' padding='24px 16px 32px' width='100%'>
                <Text color='#0000003D' fontSize='12px' lineHeight='16px' my={0}>
                    Версия программы 03.25
                </Text>
                <Text color='#000000A3' fontSize='12px' lineHeight='16px' align='left' my='16px'>
                    Все права защищены,
                    <br />
                    ученический файл,
                    <br />
                    ©Клевер Технолоджи, 2025
                </Text>
                <Button variant='ghost' leftIcon={<EditIcon />} p={0} fontSize='xs'>
                    Выйти
                </Button>
            </Flex>
        </Flex>
    );
};

export default Aside;
