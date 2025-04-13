import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';

import avatar1 from '~/assets/avatars/image1.png';
import avatar2 from '~/assets/avatars/image1.png';
import avatar3 from '~/assets/avatars/image1.png';

import CulinaryBlogCard from '../culinary-blog-card/culinary-blog-card';

const CulinaryBlogs = () => (
    <Flex
        flexDirection='column'
        alignItems='flex-start'
        gap='24px'
        width='100%'
        mb='40px'
        p='24px'
        backgroundColor='#C4FF61'
    >
        <Flex flexDirection='row' alignItems='center' justifyContent='space-between' width='100%'>
            <Heading as='h1' my={0} fontWeight={400} fontSize='36px' lineHeight='40px'>
                Кулинарные блоги
            </Heading>
            <Button bgColor='#B1FF2E' rightIcon={<ArrowForwardIcon />}>
                Все авторы
            </Button>
        </Flex>
        <Flex flexDirection='row' alignItems='flex-start' gap='24px' width='100%'>
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
    </Flex>
);

export default CulinaryBlogs;
