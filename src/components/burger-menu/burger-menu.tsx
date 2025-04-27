import { EditIcon } from '@chakra-ui/icons';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Text,
} from '@chakra-ui/react';

import AccordionMenu from '../aside/accordion';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const BurgerMenu = ({ isOpen, setIsOpen }: Props) => {
    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
            <DrawerOverlay height='calc(100vh - 64px)' mt='64px' />
            <DrawerContent
                width='344px'
                minWidth='344px'
                height='calc(100vh - 64px - 84px)'
                mt='64px'
                mr='8px'
                borderBottomLeftRadius='12px'
                borderBottomRightRadius='12px'
            >
                <DrawerBody padding={0}>
                    <Flex px='20px' py='16px' width='344px' flexWrap='wrap'>
                        <Breadcrumbs />
                    </Flex>
                    <AccordionMenu />
                    <Flex
                        direction='column'
                        alignItems='flex-start'
                        padding='16px 24px 32px'
                        width='100%'
                    >
                        <Text color='#0000003D' fontSize='12px' lineHeight='16px' my={0}>
                            Версия программы 03.25
                        </Text>
                        <Text
                            color='#000000A3'
                            fontSize='12px'
                            lineHeight='16px'
                            align='left'
                            my='16px'
                        >
                            Все права защищены, ученический файл,
                            <br />
                            ©Клевер Технолоджи, 2025
                        </Text>
                        <Button
                            variant='ghost'
                            leftIcon={<EditIcon />}
                            p={0}
                            fontSize='xs'
                            size='xs'
                        >
                            Выйти
                        </Button>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default BurgerMenu;
