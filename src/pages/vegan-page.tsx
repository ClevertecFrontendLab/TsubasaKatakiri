import { Fragment } from 'react/jsx-runtime';

import MainLayout from '~/components/layout/main-layout';
import SearchBox from '~/components/search-box/search-box';

const VeganPage = () => (
    <Fragment>
        <MainLayout>
            <SearchBox
                heading='Веганская кухня'
                text='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
        </MainLayout>
    </Fragment>
);

export default VeganPage;
