import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { AccordionData } from './accordion-data';

const AccordionMenu = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const pathCategory = decodeURI(pathname)
        .split('/')
        .filter((item) => item !== '')[0];
    const pathSubcategory = decodeURI(pathname)
        .split('/')
        .filter((item) => item !== '')[1];
    const [itemIndex, setItemIndex] = useState<number | number[]>(-1);
    const [subitemIndex, setSubitemIndex] = useState<number | number[]>(-1);

    useEffect(() => {
        const index = AccordionData.findIndex((item) => item.href === `/${pathCategory}`);
        itemIndex === -1 ? setItemIndex(index) : setItemIndex(-1);
    }, [pathCategory]);

    useEffect(() => {
        if (pathSubcategory) {
            if (!Array.isArray(itemIndex) && itemIndex !== -1) {
                const subcategoryIndex = AccordionData[itemIndex].menu.findIndex(
                    (item) => item === pathSubcategory,
                );
                subcategoryIndex !== -1 ? setSubitemIndex(subcategoryIndex) : setSubitemIndex(-1);
            }
        }
    }, [itemIndex, pathSubcategory]);

    const handleNavigate = (href: string, subcategory?: string): void => {
        const url = `${href}${subcategory ? `/${subcategory}` : ''}`;
        navigate(url);
    };

    return (
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
                                        <Text fontWeight={`${index === subitemIndex ? 700 : 500}`}>
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
    );
};

export default AccordionMenu;
