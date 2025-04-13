import { Flex, useMediaQuery } from '@chakra-ui/react';
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
        <Flex
            direction='column'
            height='100%'
            minHeight='100vh'
            position='relative'
            width='100%'
            py={0}
        >
            <Header />
            <Flex>
                {isDesktop && <Aside />}
                <Flex
                    margin='0 auto'
                    flexDirection='column'
                    marginTop='80px'
                    ml='256px'
                    mr='208px'
                    width='calc(100vw - 256px - 208px)'
                    height='100%'
                    minHeight='calc(100vh - 80px)'
                    pt='32px'
                >
                    {children}
                </Flex>
                {isDesktop && <Sidebar />}
            </Flex>
            {!isDesktop && <Footer />}
        </Flex>
    );
};

export default MainLayout;
