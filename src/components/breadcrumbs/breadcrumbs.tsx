import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router';

import { breadcrumbsPageData } from './breadcrumbs-data';

const Breadcrumbs = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const items: ReactElement[] = [];

    const pathName = location.pathname;
    const pathNameDefinition = breadcrumbsPageData.find((item) => item.route === pathName);
    if (pathNameDefinition) {
        items.push(
            <BreadcrumbItem key={pathNameDefinition.route}>
                <Text>{pathNameDefinition.name}</Text>
            </BreadcrumbItem>,
        );
    }
    const paramSubcategoryDefinition = searchParams.get('subcategory');
    if (paramSubcategoryDefinition) {
        items.push(
            <BreadcrumbItem key={paramSubcategoryDefinition}>
                <Text>{paramSubcategoryDefinition}</Text>
            </BreadcrumbItem>,
        );
    }

    return (
        <Breadcrumb flex={1} spacing='8px' separator={<ChevronRightIcon />}>
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
