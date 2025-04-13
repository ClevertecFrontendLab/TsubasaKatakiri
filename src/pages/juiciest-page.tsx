import { Flex } from '@chakra-ui/react';
import { Fragment } from 'react/jsx-runtime';

import MainLayout from '~/components/layout/main-layout';
import SearchBox from '~/components/search-box/search-box';

const JuiciestPage = () => (
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
                <SearchBox heading='Самое сочное' />
            </Flex>
        </MainLayout>
    </Fragment>
);

export default JuiciestPage;
