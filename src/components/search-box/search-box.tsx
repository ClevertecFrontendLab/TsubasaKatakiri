import { SearchIcon } from '@chakra-ui/icons';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    Text,
} from '@chakra-ui/react';

import leftIcon from '~/assets/page/left-icon.svg';

interface Props {
    heading: string;
    text?: string;
}

const SearchBox = ({ heading, text }: Props) => (
    <Flex flexDirection='column' alignItems='center' mb='24px'>
        <Heading as='h1' mt={0} mb={`${text ? '12px' : '32px'}`} fontSize='48px' lineHeight='48px'>
            {heading}
        </Heading>
        <Text width='100%' maxWidth='696px' align='center' color='#0000007A' mb='32px'>
            {text}
        </Text>
        <Flex direction='column' gap='16px'>
            <Flex flexDirection='row' alignItems='center' justifyContent='space-between' gap='12px'>
                <Button
                    variant='outline'
                    height='48px'
                    width='48px'
                    minWidth='48px'
                    borderColor='#0000007A'
                    padding='12px'
                >
                    <Image src={leftIcon} alt='Search' width='24px' height='24px' />
                </Button>
                <InputGroup>
                    <Input
                        type='search'
                        width='458px'
                        size='lg'
                        placeholder='Название или ингредиент...'
                        borderColor='blackAlpha.600'
                        _placeholder={{ color: '#134B00' }}
                    />
                    <InputRightElement height='48px'>
                        <SearchIcon />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Flex flexDirection='row' alignItems='center' justifyContent='space-between' gap='16px'>
                <FormControl display='flex' flexDirection='row' alignItems='center'>
                    <FormLabel id='allergic' mb={0} fontSize='16px' fontWeight={500}>
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch id='allergic' size='md' />
                </FormControl>
                <Select placeholder='Выберите из списка...'>
                    <option value='option1'>Аллерген 1</option>
                </Select>
            </Flex>
        </Flex>
    </Flex>
);

export default SearchBox;
