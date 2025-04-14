import { Button, Flex, TabPanel, useMediaQuery } from '@chakra-ui/react';

import kids from '~/assets/child.svg';
import grill from '~/assets/dishwasher.svg';
import second from '~/assets/frying-pan.svg';
import national from '~/assets/international.svg';
import img1 from '~/assets/vegan/image.png';
import img2 from '~/assets/vegan/image1.png';
import img3 from '~/assets/vegan/image2.png';
import img4 from '~/assets/vegan/image3.png';
import img5 from '~/assets/vegan/image4.png';
import img6 from '~/assets/vegan/image5.png';

import JuiciestRecipeCard from '../juiciest-recipe-card/juiciest-recipe-card';

const VeganTab = () => {
    const [isPortable] = useMediaQuery('(max-width: 991px)');

    return (
        <TabPanel px={0}>
            <Flex flexDirection='column' alignItems='flex-start' gap='24px' width='100%'>
                <Flex
                    flexFlow='row wrap'
                    alignItems='flex-start'
                    rowGap='16px'
                    columnGap={isPortable ? '16px' : '24px'}
                    width='100%'
                >
                    <JuiciestRecipeCard
                        cardImage={img1}
                        name='Картошка, тушенная с болгарским перцем и фасолью в томатном соусе'
                        description='Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.'
                        categoryIcon={second}
                        category='Вторые блюда'
                        likes={180}
                        bookmarks={120}
                    />
                    <JuiciestRecipeCard
                        cardImage={img2}
                        name='Картофельные рулетики с грибами'
                        description='Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!'
                        categoryIcon={kids}
                        category='Детские блюда'
                        likes={180}
                        bookmarks={85}
                    />
                    <JuiciestRecipeCard
                        cardImage={img4}
                        name='Том-ям с капустой кимчи'
                        description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                        categoryIcon={national}
                        category='Национальные'
                        likes={324}
                        bookmarks={124}
                    />
                    <JuiciestRecipeCard
                        cardImage={img3}
                        name='Овощная лазанья из лаваша'
                        description='Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.'
                        categoryIcon={grill}
                        category='Блюда на гриле'
                        likes={152}
                        bookmarks={85}
                    />
                    <JuiciestRecipeCard
                        cardImage={img4}
                        name='Тефтели из булгура и чечевицы, запечённые в томатном соусе'
                        description='Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.'
                        categoryIcon={national}
                        category='Национальные'
                        likes={150}
                        bookmarks={85}
                    />
                    <JuiciestRecipeCard
                        cardImage={img4}
                        name='Тефтели из булгура и чечевицы, запечённые в томатном соусе'
                        description='Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.'
                        categoryIcon={national}
                        category='Национальные'
                        likes={150}
                        bookmarks={85}
                    />
                    <JuiciestRecipeCard
                        cardImage={img5}
                        name='Чесночная картошка'
                        description='Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!'
                        categoryIcon={second}
                        category='Вторые блюда'
                        likes={257}
                        bookmarks={159}
                    />
                    <JuiciestRecipeCard
                        cardImage={img6}
                        name='Пури'
                        description='Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.'
                        categoryIcon={second}
                        category='Вторые блюда'
                        likes={152}
                        bookmarks={85}
                    />
                </Flex>
            </Flex>
            <Button bgColor='#B1FF2E' mt='16px'>
                Загрузить еще
            </Button>
        </TabPanel>
    );
};

export default VeganTab;
