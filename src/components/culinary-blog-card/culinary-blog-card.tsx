import { Avatar, Card, CardBody, CardHeader, Flex, Text, useMediaQuery } from '@chakra-ui/react';

interface Props {
    cardImage?: string;
    name: string;
    id: string;
    post: string;
}

const CulinaryBlogCard = ({ cardImage, name, id, post }: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');

    return (
        <Card width={isMobile ? '100%' : 'calc((100% - 16px) / 3)'}>
            <CardHeader width='100%' p={isPortable ? '16px 16px 8px' : '24px 24px 16px'}>
                <Flex gap='12px' alignItems='center'>
                    <Avatar
                        src={cardImage}
                        name={name}
                        width={isPortable ? '32px' : '48px'}
                        height={isPortable ? '32px' : '48px'}
                    />
                    <Flex direction='column' alignItems='flex-start'>
                        <Text
                            noOfLines={1}
                            fontSize={isPortable ? '16px' : '18px'}
                            lineHeight={isPortable ? '24px' : '28px'}
                            fontWeight={500}
                            margin={0}
                        >
                            {name}
                        </Text>
                        <Text
                            fontSize={isPortable ? '12px' : '14px'}
                            lineHeight={isPortable ? '16px' : '20px'}
                            color='gray'
                            margin={0}
                        >
                            {id}
                        </Text>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody p={isPortable ? '8px 16px 16px' : '12px 24px 20px'}>
                <Text noOfLines={3} fontSize='14px' lineHeight='20px'>
                    {post}
                </Text>
            </CardBody>
        </Card>
    );
};

export default CulinaryBlogCard;
