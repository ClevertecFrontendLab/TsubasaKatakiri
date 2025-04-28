import 'swiper/css';
import 'swiper/css/navigation';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, useMediaQuery } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { recipeMockData } from '~/pages/recipe-mock-data';

import { AccordionData } from '../aside/accordion-data';
import NewRecipeCard from '../new-recipe-card/new-recipe-card';

const NewRecipes = () => {
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const swiperSlides: ReactElement[] = [];
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    recipeMockData.forEach((item, index) => {
        const tagContent = AccordionData.find((data) => data.href.slice(1) === item.category[0]);
        if (tagContent) {
            swiperSlides.push(
                <SwiperSlide key={item.id} data-test-id={`carousel-card-${index}`}>
                    <NewRecipeCard
                        id={item.id}
                        categoryName={item.category[0]}
                        subcategoryName={item.subcategory[0]}
                        cardImage={item.image}
                        name={item.title}
                        description={item.description}
                        categoryIcon={tagContent.icon}
                        category={tagContent.category}
                        bookmarks={item.bookmarks}
                        likes={item.likes}
                    />
                </SwiperSlide>,
            );
        }
    });

    return (
        <Flex
            flexDirection='column'
            alignItems='flex-start'
            gap='24px'
            mb='40px'
            width={isPortable ? '100vw' : '100%'}
        >
            <Heading
                as='h1'
                my={0}
                fontWeight={500}
                fontSize={`${isWideDesktop ? '48px' : isPortable ? '24px' : '36px'}`}
                lineHeight={`${isWideDesktop ? '48px' : isPortable ? '32px' : '40px'}`}
                px={isMobile ? '16px' : isPortable ? '20px' : '24px'}
            >
                Новые рецепты
            </Heading>
            <Flex
                flexDirection='row'
                alignItems='flex-start'
                gap={isPortable ? '12px' : '24px'}
                overflowX='hidden'
                width='100%'
                pl={isMobile ? '16px' : isPortable ? '20px' : '24px'}
                pr={isWideDesktop ? '24px' : 0}
                position='relative'
            >
                <IconButton
                    data-test-id='carousel-back'
                    position='absolute'
                    left='16px'
                    top='50%'
                    transform='translateY(-50%)'
                    zIndex={3}
                    icon={<ArrowBackIcon />}
                    variant='solid'
                    backgroundColor='#000000'
                    color='#FFFFD3'
                    size='lg'
                    aria-label=''
                    visibility={isPortable ? 'hidden' : 'visible'}
                    onClick={() => swiper?.slidePrev()}
                />
                <IconButton
                    data-test-id='carousel-forward'
                    position='absolute'
                    right='16px'
                    top='50%'
                    transform='translateY(-50%)'
                    zIndex={3}
                    icon={<ArrowForwardIcon />}
                    variant='solid'
                    backgroundColor='#000000'
                    color='#FFFFD3'
                    size='lg'
                    aria-label=''
                    visibility={isPortable ? 'hidden' : 'visible'}
                    onClick={() => swiper?.slideNext()}
                />
                <Flex width='calc(100% - 16px)' maxWidth='1336px' position='relative'>
                    <Swiper
                        data-test-id='carousel'
                        modules={[Navigation]}
                        loop={true}
                        navigation
                        spaceBetween={isPortable ? 16 : 24}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 12,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1441: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                            1920: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        // slidesPerView={'auto'}
                        // slidesPerView={isWideDesktop ? 4 : isMobile ? 2 : isPortable ? 4 : 3}
                        onSwiper={(swiper) => setSwiper(swiper)}
                    >
                        {swiperSlides}
                    </Swiper>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default NewRecipes;
