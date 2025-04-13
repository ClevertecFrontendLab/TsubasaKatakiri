import { Avatar, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import mockAvatar from '~/assets/header/Breakfast.png';

const UserBox = () => {
    const [name] = useState('Екатерина Константинопольская');
    const [id] = useState('@bake_and_pie');

    return (
        <Flex gap='12px' width='432px' justifyContent='center'>
            <Avatar src={mockAvatar} name={name} width='48px' height='48px' />
            <Flex direction='column' alignItems='flex-start'>
                <Text fontSize='18px' lineHeight='28px' fontWeight={500} margin={0}>
                    {name}
                </Text>
                <Text fontSize='14px' lineHeight='20px' color='gray' margin={0}>
                    {id}
                </Text>
            </Flex>
        </Flex>
    );
};

export default UserBox;
