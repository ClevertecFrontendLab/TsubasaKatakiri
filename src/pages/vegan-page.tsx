import { Flex } from '@chakra-ui/react';
import { Fragment } from 'react/jsx-runtime';

import MainLayout from '~/components/layout/main-layout';
import SearchBox from '~/components/search-box/search-box';

const VeganPage = () => (
    <Fragment>
        <MainLayout>
            <Flex
                width='100%'
                marginTop='80px'
                height='100vh'
                minHeight='calc(100vh - 80px)'
                flexDirection='column'
                alignItems='center'
                justifyContent='flex-start'
            >
                <SearchBox heading='Веганская кухня' />
            </Flex>
        </MainLayout>
    </Fragment>
);

export default VeganPage;
