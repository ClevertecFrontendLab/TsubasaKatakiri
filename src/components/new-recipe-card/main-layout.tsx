import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Aside from '../aside/aside';
import Footer from '../footer/footer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

type Props = {
    children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
    const [isDesktop] = useMediaQuery('(min-width: 992px)');

    return (
        <Flex direction='column' minHeight='100vh' position='relative' width='100%'>
            <Header />
            <Flex>
                {isDesktop && <Aside />}
                <Box>{children}</Box>
                {isDesktop && <Sidebar />}
            </Flex>
            {!isDesktop && <Footer />}
        </Flex>
    );
};

export default MainLayout;
