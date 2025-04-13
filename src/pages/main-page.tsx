import { Fragment } from 'react/jsx-runtime';

import avatar1 from '~/assets/avatars/image1.png';
import avatar2 from '~/assets/avatars/image2.png';
import second from '~/assets/frying-pan.svg';
import national from '~/assets/international.svg';
import img1 from '~/assets/juiciestRecipes/image.png';
import img2 from '~/assets/juiciestRecipes/image1.png';
import img3 from '~/assets/juiciestRecipes/image2.png';
import img4 from '~/assets/juiciestRecipes/image3.png';
import CulinaryBlogs from '~/components/culinary-blogs/culinary-blogs';
import JuiciestRecipeCard from '~/components/juiciest-recipe-card/juiciest-recipe-card';
import JuiciestRecipes from '~/components/juiciest-recipes/juiciest-recipes';
import MainLayout from '~/components/layout/main-layout';
import NewRecipes from '~/components/new-recipes/new-recipes';
import SearchBox from '~/components/search-box/search-box';
import VeganCuisine from '~/components/vegan-cuisine/vegan-cuisine';

const MainPage = () => (
    <Fragment>
        <MainLayout>
            <SearchBox heading='Приятного аппетита!' />
            <NewRecipes />
            <JuiciestRecipes isOnPage={false}>
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
            </JuiciestRecipes>
            <CulinaryBlogs />
            <VeganCuisine />
        </MainLayout>
    </Fragment>
);

export default MainPage;
