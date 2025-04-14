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
    useMediaQuery,
} from '@chakra-ui/react';

import leftIcon from '~/assets/page/left-icon.svg';

interface Props {
    heading: string;
    text?: string;
}

const SearchBox = ({ heading, text }: Props) => {
    const [isDesktop] = useMediaQuery('(min-width: 992px)');
    const [isMobile] = useMediaQuery('(max-width: 767px)');

    return (
        <Flex flexDirection='column' alignItems='center' mb='24px' px='16px'>
            <Heading
                as='h1'
                mt={0}
                mb={`${text || !isDesktop ? '12px' : '32px'}`}
                fontSize={`${isDesktop ? '48px' : '24px'}`}
                lineHeight={`${isDesktop ? '48px' : '32px'}`}
            >
                {heading}
            </Heading>
            {text && (
                <Text width='100%' maxWidth='696px' align='center' color='#0000007A' mb='32px'>
                    {text}
                </Text>
            )}
            <Flex direction='column' gap='16px'>
                <Flex
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='space-between'
                    gap='12px'
                >
                    <Button
                        variant='outline'
                        height={`${isDesktop ? '48px' : '32px'}`}
                        width={`${isDesktop ? '48px' : '32px'}`}
                        minWidth={`${isDesktop ? '48px' : '32px'}`}
                        borderColor='#0000007A'
                        padding={`${isDesktop ? '12px' : '9px'}`}
                    >
                        <Image src={leftIcon} alt='Search' width='24px' height='24px' />
                    </Button>
                    <InputGroup>
                        <Input
                            type='search'
                            width={isMobile ? '100%' : '458px'}
                            minWidth={isMobile ? '284px' : 'unset'}
                            size={`${isDesktop ? 'lg' : 'sm'}`}
                            placeholder='Название или ингредиент...'
                            borderColor='blackAlpha.600'
                            _placeholder={{ color: '#134B00' }}
                            borderRadius={isMobile ? '4px' : '6px'}
                        />
                        <InputRightElement height={`${isDesktop ? '48px' : '32px'}`}>
                            <SearchIcon />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                {isDesktop && (
                    <Flex
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='space-between'
                        gap='16px'
                    >
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
                )}
            </Flex>
        </Flex>
    );
};

export default SearchBox;
