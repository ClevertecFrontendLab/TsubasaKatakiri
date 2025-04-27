import { Avatar, Button, Flex, Image, Text } from '@chakra-ui/react';

import subscribe from '~/assets/recipes/left-icon-subscribe.svg';
import Users from '~/assets/sidebar/BsPeopleFill.svg';

interface Props {
    name: string;
    id: string;
    subscribers: number;
    avatar?: string;
}

const RecipeAuthor = ({ name, id, subscribers, avatar }: Props) => {
    console.log(name);

    return (
        <Flex
            gap='16px'
            width='100%'
            maxWidth='668px'
            bgColor='#C4FF61'
            borderRadius='8px'
            padding='24px'
            justifyContent='center'
        >
            <Avatar src={avatar} name={name} width='96px' height='96px' />
            <Flex
                width='100%'
                height='96px'
                direction='column'
                alignItems='flex-start'
                justifyContent='space-between'
            >
                <Flex
                    width='100%'
                    flexDir='row'
                    alignItems='flex-start'
                    justifyContent='space-between'
                >
                    <Flex
                        width='100%'
                        flex={1}
                        flexDir='column'
                        alignItems='flex-start'
                        justifyContent='flex-start'
                        gap='4px'
                    >
                        <Text fontSize='24px' lineHeight='32px' fontWeight={700} margin={0}>
                            {name}
                        </Text>
                        <Text fontSize='14px' lineHeight='20px' color='#000000A3' margin={0}>
                            {id}
                        </Text>
                    </Flex>
                    <Text fontSize='14px' lineHeight='20px' fontWeight={400} margin={0}>
                        Автор рецепта
                    </Text>
                </Flex>
                <Flex
                    mt='auto'
                    width='100%'
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Button
                        leftIcon={<Image src={subscribe} alt='' />}
                        variant='solid'
                        bgColor='#000000'
                        color='#FFFFFF'
                        size='xs'
                    >
                        Подписаться
                    </Button>
                    <Flex gap='6px' px='4px' py='4px' height='24px' alignItems='center'>
                        <Image width='12px' src={Users} alt='Users' />
                        <Text
                            fontSize='12px'
                            lineHeight='16px'
                            my={0}
                            color='#2DB100'
                            fontWeight={600}
                        >
                            {subscribers}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default RecipeAuthor;
