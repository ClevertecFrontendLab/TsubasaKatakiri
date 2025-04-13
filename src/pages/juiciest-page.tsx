import { Fragment } from 'react/jsx-runtime';

import avatar1 from '~/assets/avatars/image1.png';
import avatar2 from '~/assets/avatars/image2.png';
import kids from '~/assets/child.svg';
import grill from '~/assets/dishwasher.svg';
import second from '~/assets/frying-pan.svg';
import national from '~/assets/international.svg';
import img1 from '~/assets/juiciestRecipes/image.png';
import img2 from '~/assets/juiciestRecipes/image1.png';
import img3 from '~/assets/juiciestRecipes/image2.png';
import img4 from '~/assets/juiciestRecipes/image3.png';
import JuiciestRecipeCard from '~/components/juiciest-recipe-card/juiciest-recipe-card';
import JuiciestRecipes from '~/components/juiciest-recipes/juiciest-recipes';
import MainLayout from '~/components/layout/main-layout';
import SearchBox from '~/components/search-box/search-box';
import VeganCuisine from '~/components/vegan-cuisine/vegan-cuisine';

const JuiciestPage = () => (
    <Fragment>
        <MainLayout>
            <SearchBox heading='Самое сочное' />
            <JuiciestRecipes isOnPage={true}>
                <JuiciestRecipeCard
                    cardImage={img3}
                    name='Лапша с курицей и шафраном'
                    description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                    categoryIcon={second}
                    category='Вторые блюда'
                    likes={342}
                    bookmarks={258}
                    recommended='Alex Cook'
                    recommendedAvatar={avatar2}
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
                    cardImage={img2}
                    name='Пряная ветчина по итальянски'
                    description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                    categoryIcon={second}
                    category='Вторые блюда'
                    likes={257}
                    bookmarks={159}
                    recommended='Елена Высоцкая'
                    recommendedAvatar={avatar1}
                />
                <JuiciestRecipeCard
                    cardImage={img1}
                    name='Кнели со спагетти'
                    description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                    categoryIcon={second}
                    category='Вторые блюда'
                    likes={152}
                    bookmarks={85}
                />
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
            </JuiciestRecipes>
            <VeganCuisine />
        </MainLayout>
    </Fragment>
);

export default JuiciestPage;
