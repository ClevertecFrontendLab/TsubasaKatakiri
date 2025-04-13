import { Avatar, Card, CardBody, CardHeader, Flex, Text } from '@chakra-ui/react';

interface Props {
    cardImage?: string;
    name: string;
    id: string;
    post: string;
}

const CulinaryBlogCard = ({ cardImage, name, id, post }: Props) => (
    <Card width='calc((100% - 16px) / 3)'>
        <CardHeader width='100%' p='24px' pb='16px'>
            <Flex gap='12px'>
                <Avatar src={cardImage} name={name} width='48px' height='48px' />
                <Flex direction='column' alignItems='flex-start'>
                    <Text fontSize='18px' lineHeight='28px' fontWeight={500} margin={0}>
                        {name}
                    </Text>
                    <Text fontSize='14px' lineHeight='20px' color='gray' margin={0}>
                        {id}
                    </Text>
                </Flex>
            </Flex>
        </CardHeader>
        <CardBody padding='12px 24px 20px'>
            <Text>{post}</Text>
        </CardBody>
    </Card>
);

export default CulinaryBlogCard;
