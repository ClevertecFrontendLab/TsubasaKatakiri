import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, useMediaQuery } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router';

import { breadcrumbsPageData } from './breadcrumbs-data';

const Breadcrumbs = () => {
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const location = useLocation();
    const items: ReactElement[] = [];

    const pathName = decodeURI(location.pathname);
    const pathElements: string[] = pathName.split('/').filter((item) => item !== '');
    pathElements.forEach((item, index) => {
        const fullPath = `/${pathElements.slice(0, index + 1).join('/')}`;
        let pathItem;
        const pageDataItem = breadcrumbsPageData.find((item) => item.route === fullPath);
        if (pageDataItem) pathItem = pageDataItem.name;
        else pathItem = item;
        items.push(
            <BreadcrumbItem key={pathItem}>
                <BreadcrumbLink as={Link} to={fullPath}>
                    <Text whiteSpace='nowrap' overflowWrap='break-word'>
                        {pathItem}
                    </Text>
                </BreadcrumbLink>
            </BreadcrumbItem>,
        );
    });

    return (
        <Breadcrumb
            display='flex'
            width={isPortable ? '344px' : '100%'}
            flex='1'
            spacing='8px'
            separator={<ChevronRightIcon />}
            flexWrap='wrap'
            data-test-id='breadcrumbs'
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            {items}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
