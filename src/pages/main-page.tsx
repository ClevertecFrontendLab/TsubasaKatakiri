import { Flex } from '@chakra-ui/react';
import { Fragment } from 'react/jsx-runtime';

import MainLayout from '~/components/new-recipe-card/main-layout';
import NewRecipes from '~/components/new-recipes/new-recipes';
import SearchBox from '~/components/search-box/search-box';

const MainPage = () => (
    <Fragment>
        <MainLayout>
            Main page
            <Flex
                width='100%'
                marginTop='80px'
                height='100vh'
                minHeight='calc(100vh - 80px)'
                flexDirection='column'
                alignItems='center'
                justifyContent='flex-start'
            >
                <SearchBox heading='Приятного аппетита!' />
                <NewRecipes />
            </Flex>
        </MainLayout>
    </Fragment>
);

export default MainPage;
