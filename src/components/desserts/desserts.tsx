import { Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';

import vegan from '~/assets/bay-leaf.svg';
import kids from '~/assets/child.svg';
import national from '~/assets/international.svg';

import VeganCard from '../vegan-card/vegan-card';

const Desserts = () => (
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
                    name='Бананово-молочное желе'
                    description='Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.'
                    categoryIcon={kids}
                    category='Детские блюда'
                    likes={1}
                    bookmarks={1}
                />
                <VeganCard
                    name='Нежный сливочно-сырный крем для кексов'
                    description='Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.'
                    categoryIcon={kids}
                    category='Детские блюда'
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
                        <Image src={kids} alt='' />
                        <Heading
                            noOfLines={1}
                            as='h3'
                            fontSize='20px'
                            lineHeight='28px'
                            fontWeight={500}
                        >
                            Домашние сырные палочки
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
                        <Image src={national} alt='' />
                        <Heading
                            noOfLines={1}
                            as='h3'
                            fontSize='20px'
                            lineHeight='28px'
                            fontWeight={500}
                        >
                            Панкейки
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
                        <Image src={vegan} alt='' />
                        <Heading
                            noOfLines={1}
                            as='h3'
                            fontSize='20px'
                            lineHeight='28px'
                            fontWeight={500}
                        >
                            Воздушное банановое печенье на сковороде
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

export default Desserts;
