import { EditIcon } from '@chakra-ui/icons';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    Image,
    List,
    ListItem,
    Spacer,
    Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router';

import { AccordionData } from './accordion-data';

const Aside = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    const paramSubcategoryDefinition = searchParams.get('subcategory');
    const [itemIndex, setItemIndex] = useState<number | number[]>(-1);
    const [subitemIndex, setSubitemIndex] = useState<number | number[]>(-1);

    useEffect(() => {
        const index = AccordionData.findIndex((item) => item.href === pathname);
        itemIndex === -1 ? setItemIndex(index) : setItemIndex(-1);
    }, [pathname]);

    useEffect(() => {
        if (!Array.isArray(itemIndex) && itemIndex !== -1) {
            const subcategoryIndex = AccordionData[itemIndex].menu.findIndex(
                (item) => item === paramSubcategoryDefinition,
            );
            subcategoryIndex !== -1 ? setSubitemIndex(subcategoryIndex) : setSubitemIndex(-1);
        }
    }, [itemIndex, paramSubcategoryDefinition]);

    const handleNavigate = (href: string, subcategory?: string): void => {
        const url = `${href}${subcategory ? `?subcategory=${subcategory}` : ''}`;
        navigate(url);
    };

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
            <Accordion
                padding='10px'
                variant='ghost'
                width='100%'
                allowToggle
                overflowY='auto'
                onChange={(i) => setItemIndex(i)}
                index={itemIndex}
            >
                {AccordionData.map((item) => (
                    <AccordionItem key={item.category} border='none' width='100%'>
                        <AccordionButton
                            _expanded={{ backgroundColor: '#EAFFC7', fontWeight: 700 }}
                            _hover={{ backgroundColor: '#FFFFD3' }}
                            padding='12px 8px'
                            border={0}
                            _focus={{ outline: 0 }}
                            borderRadius={0}
                            data-test-id={`${item.href.slice(1)}-cuisine`}
                            onClick={() => handleNavigate(item.href)}
                        >
                            <Flex flex={1} gap='12px' alignItems='center'>
                                <Image src={item.icon} alt='' />
                                <Text my={0}>{item.category}</Text>
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <List display='flex' flexDirection='column' alignItems='flex-start'>
                                {item.menu.map((subitem, index) => (
                                    <ListItem
                                        key={subitem}
                                        cursor='pointer'
                                        _hover={{ backgroundColor: '#FFFFD3' }}
                                        onClick={() => handleNavigate('/vegan', subitem)}
                                        width='100%'
                                    >
                                        <Flex
                                            flexDirection='row'
                                            alignItems='center'
                                            padding={`4px 8px 4px ${index === subitemIndex ? '33px' : '40px'}`}
                                            gap='11px'
                                        >
                                            <Box
                                                width={`${index === subitemIndex ? '8px' : '1px'}`}
                                                height='24px'
                                                backgroundColor='#C4FF61'
                                            />
                                            <Text
                                                fontWeight={`${index === subitemIndex ? 700 : 500}`}
                                            >
                                                {subitem}
                                            </Text>
                                        </Flex>
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
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
