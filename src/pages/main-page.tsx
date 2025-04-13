import { Fragment } from 'react/jsx-runtime';

import CulinaryBlogs from '~/components/culinary-blogs/culinary-blogs';
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
            <JuiciestRecipes />
            <CulinaryBlogs />
            <VeganCuisine />
        </MainLayout>
    </Fragment>
);

export default MainPage;
