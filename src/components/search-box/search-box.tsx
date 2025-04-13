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
} from '@chakra-ui/react';

import leftIcon from '~/assets/page/left-icon.svg';

interface Props {
    heading: string;
}

const SearchBox = ({ heading }: Props) => (
    <Flex flexDirection='column' alignItems='center'>
        <Heading as='h1' mt={0} mb='32px'>
            {heading}
        </Heading>
        <Flex flexDirection='row' alignItems='center' justifyContent='space-between' gap='12px'>
            <Button variant='ghost' height='48px' width='48px'>
                <Image src={leftIcon} alt='Search' />
            </Button>
            <InputGroup>
                <Input
                    type='search'
                    width='458px'
                    size='lg'
                    placeholder='Название или ингредиент...'
                    borderColor='blackAlpha.600'
                />
                <InputRightElement>
                    <SearchIcon />
                </InputRightElement>
            </InputGroup>
        </Flex>
        <Flex flexDirection='row' alignItems='center' justifyContent='space-between' gap='16px'>
            <FormControl display='flex' flexDirection='row' alignItems='center'>
                <FormLabel id='allergic' mb={0} fontSize='16px' fontWeight='500'>
                    Исключить мои аллергены
                </FormLabel>
                <Switch id='allergic' size='lg' />
            </FormControl>
            <Select placeholder='Выберите из списка...'>
                <option value='option1'>Аллерген 1</option>
            </Select>
        </Flex>
    </Flex>
);

export default SearchBox;
