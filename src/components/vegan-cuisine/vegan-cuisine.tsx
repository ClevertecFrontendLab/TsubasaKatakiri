import { Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';

import second from '~/assets/frying-pan.svg';
import first from '~/assets/pot.svg';

import VeganCard from '../vegan-card/vegan-card';

const VeganCuisine = () => (
    <Flex
        flexDirection='column'
        alignItems='flex-start'
        gap='24px'
        width='100%'
        mb='40px'
        px='24px'
    >
        <Flex flexDirection='row' alignItems='center' justifyContent='space-between' width='100%'>
            <Heading as='h1' my={0} fontWeight={500} fontSize='48px' lineHeight='48px'>
                Веганская кухня
            </Heading>
            <Text width='100%' maxWidth='668px' color='#000000A3'>
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Flex>
        <Flex flexDirection='row' alignItems='flex-start' gap='24px' width='100%'>
            <Flex width='calc((100% - 24px) / 2)' flexDirection='row' gap='24px'>
                <VeganCard
                    name='Картошка, тушенная с болгарским перцем и фасолью в томатном соусе'
                    description='Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.'
                    categoryIcon={second}
                    category='Вторые блюда'
                    likes={1}
                    bookmarks={1}
                />
                <VeganCard
                    name='Капустные котлеты'
                    description='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
                    categoryIcon={second}
                    category='Вторые блюда'
                    likes={1}
                    bookmarks={2}
                />
            </Flex>
            <Flex
                width='calc((100% - 24px) / 2)'
                flexDirection='column'
                alignItems='center'
                gap='12px'
            >
                <Card
                    direction='row'
                    justifyContent='space-between'
                    width='100%'
                    padding='14px 24px'
                >
                    <Flex flex={1} gap='12px'>
                        <Image src={second} alt='' />
                        <Heading
                            noOfLines={1}
                            as='h3'
                            fontSize='20px'
                            lineHeight='28px'
                            fontWeight={500}
                        >
                            Стейк для вегетарианцев
                        </Heading>
                    </Flex>
                    <Button variant='outline' color='#2DB100' borderColor='#2DB100' size='sm'>
                        Готовить
                    </Button>
                </Card>
                <Card
                    direction='row'
                    justifyContent='space-between'
                    width='100%'
                    padding='14px 24px'
                >
                    <Flex flex={1} gap='12px'>
                        <Image src={second} alt='' />
                        <Heading
                            noOfLines={1}
                            as='h3'
                            fontSize='20px'
                            lineHeight='28px'
                            fontWeight={500}
                        >
                            Котлеты из гречки и фасоли
                        </Heading>
                    </Flex>
                    <Button variant='outline' color='#2DB100' borderColor='#2DB100' size='sm'>
                        Готовить
                    </Button>
                </Card>
                <Card
                    direction='row'
                    justifyContent='space-between'
                    width='100%'
                    padding='14px 24px'
                >
                    <Flex flex={1} gap='12px'>
                        <Image src={first} alt='' />
                        <Heading
                            noOfLines={1}
                            as='h3'
                            fontSize='20px'
                            lineHeight='28px'
                            fontWeight={500}
                        >
                            Сырный суп с лапшой и брокколи
                        </Heading>
                    </Flex>
                    <Button variant='outline' color='#2DB100' borderColor='#2DB100' size='sm'>
                        Готовить
                    </Button>
                </Card>
            </Flex>
        </Flex>
    </Flex>
);

export default VeganCuisine;
