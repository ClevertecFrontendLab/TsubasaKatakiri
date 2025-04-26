import { Box, Tab, TabList, TabPanels, Tabs, Text, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { veganSelectionData } from './selection-data';
import VeganTab from './vegan-tab';

const VeganSelection = () => {
    const navigate = useNavigate();
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const params = useParams();
    const subcategory = params.subcategory;
    const [subitemIndex, setSubitemIndex] = useState<number>(0);

    useEffect(() => {
        const index = veganSelectionData.findIndex((item) => item === subcategory);
        if (index !== -1) setSubitemIndex(index);
        else {
            setSubitemIndex(0);
            navigate('/vegan/Закуски');
        }
    }, [veganSelectionData, subcategory]);

    const handleNavigate = (number: number): void => {
        const subcategory = veganSelectionData[number];
        const url = `/vegan${subcategory ? `/${subcategory}` : ''}`;
        navigate(url);
    };

    return (
        <Box width={isPortable ? '100vw' : '100%'} overflowX='hidden'>
            <Tabs
                variant='line'
                align='center'
                index={subitemIndex}
                onChange={(e) => handleNavigate(e)}
                padding={isMobile ? '16px' : isPortable ? '20px' : '24px'}
            >
                <TabList>
                    {veganSelectionData.map((item) => (
                        <Tab
                            key={item}
                            border={0}
                            color='#134B00'
                            _focus={{
                                border: 0,
                                borderBottom: '2px solid #2DB100',
                                color: '#2DB100',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: 500,
                                borderRadius: 0,
                                outline: 0,
                            }}
                            _selected={{
                                border: 0,
                                borderBottom: '2px solid #2DB100',
                                color: '#2DB100',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: 500,
                                borderRadius: 0,
                                outline: 0,
                            }}
                            _focusVisible={{
                                border: 0,
                                outline: 0,
                            }}
                        >
                            <Text whiteSpace='nowrap'>{item}</Text>
                        </Tab>
                    ))}
                </TabList>

                <TabPanels>
                    <VeganTab />
                    <VeganTab />
                    <VeganTab />
                    <VeganTab />
                    <VeganTab />
                    <VeganTab />
                    <VeganTab />
                    <VeganTab />
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default VeganSelection;
