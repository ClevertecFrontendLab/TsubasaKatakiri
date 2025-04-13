import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, useMediaQuery } from '@chakra-ui/react';

import avatar1 from '~/assets/avatars/image1.png';
import avatar2 from '~/assets/avatars/image1.png';
import avatar3 from '~/assets/avatars/image1.png';

import CulinaryBlogCard from '../culinary-blog-card/culinary-blog-card';

const CulinaryBlogs = () => {
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isMobile] = useMediaQuery('(max-width: 767px)');

    return (
        <Flex
            flexDirection='column'
            alignItems='flex-start'
            gap='24px'
            width='100%'
            mb='40px'
            p={isPortable ? '12px' : '24px'}
            backgroundColor='#C4FF61'
        >
            <Flex
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
                width='100%'
            >
                <Heading
                    as='h1'
                    my={0}
                    fontWeight={400}
                    fontSize={`${isWideDesktop ? '36px' : '30px'}`}
                    lineHeight={`${isWideDesktop ? '40px' : '36px'}`}
                >
                    Кулинарные блоги
                </Heading>
                {!isPortable && (
                    <Button bgColor='#B1FF2E' rightIcon={<ArrowForwardIcon />}>
                        Все авторы
                    </Button>
                )}
            </Flex>
            <Flex
                flexDirection={isMobile ? 'column' : 'row'}
                alignItems='flex-start'
                gap={isPortable ? '12px' : '24px'}
                width='100%'
            >
                <CulinaryBlogCard
                    cardImage={avatar1}
                    name='Елена Высоцкая'
                    id='@elenapovar'
                    post='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                />
                <CulinaryBlogCard
                    cardImage={avatar2}
                    name='Alex Cook'
                    id='@funtasticooking'
                    post='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                />
                <CulinaryBlogCard
                    cardImage={avatar3}
                    name='Екатерина Константинопольская'
                    id='@bake_and_pie'
                    post='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                />
            </Flex>
            {isPortable && (
                <Button bgColor='#B1FF2E' rightIcon={<ArrowForwardIcon />} margin='0 auto'>
                    Все авторы
                </Button>
            )}
        </Flex>
    );
};

export default CulinaryBlogs;
