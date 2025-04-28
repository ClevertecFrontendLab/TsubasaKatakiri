import { Flex, useMediaQuery } from '@chakra-ui/react';
import { ReactElement, useEffect, useState } from 'react';

import { useAppSelector } from '~/store/hooks';

import { AccordionData } from '../aside/accordion-data';
import JuiciestRecipeCard from '../juiciest-recipe-card/juiciest-recipe-card';

const SearchResults = () => {
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const filteredData = useAppSelector((state) => state.search.filteredData);
    const [cards, setCards] = useState<ReactElement[]>([]);

    useEffect(() => {
        const cardCollection: ReactElement[] = [];
        filteredData.forEach((item, index) => {
            const category = AccordionData.find((i) => i.href.slice(1) === item.category[0]);
            console.log(category);
            if (category) {
                cardCollection.push(
                    <JuiciestRecipeCard
                        key={index}
                        cardImage={item.image}
                        name={item.title}
                        description={item.description}
                        categoryIcon={category.icon}
                        category={category.category}
                        likes={item.likes}
                        bookmarks={item.bookmarks}
                    />,
                );
            }
        });
        setCards(cardCollection);
    }, [filteredData]);
    // const handleAllClick = () => {
    //     navigate('/juiciest');
    // };
    console.log(cards);

    return (
        <Flex
            flexDirection='column'
            alignItems='flex-start'
            gap={isPortable ? '12px' : '24px'}
            width='100%'
            mb='40px'
            px={isMobile ? '16px' : isPortable ? '20px' : '24px'}
        >
            <Flex
                flexFlow='row wrap'
                alignItems='flex-start'
                gap={isPortable ? '16px' : '24px'}
                width='100%'
            >
                {cards}
            </Flex>
        </Flex>
    );
};

export default SearchResults;
