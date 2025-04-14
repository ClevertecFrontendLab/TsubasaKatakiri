import { Fragment } from 'react/jsx-runtime';

import Desserts from '~/components/desserts/desserts';
import MainLayout from '~/components/layout/main-layout';
import SearchBox from '~/components/search-box/search-box';
import VeganSelection from '~/components/vegan-selection/vegan-selection';

const VeganPage = () => (
    <Fragment>
        <MainLayout>
            <SearchBox
                heading='Веганская кухня'
                text='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
            <VeganSelection />
            <Desserts />
        </MainLayout>
    </Fragment>
);

export default VeganPage;
