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
    Switch,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

import leftIcon from '~/assets/page/left-icon.svg';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { clearFiltered, filterData, setSearchString } from '~/store/search-slice';

import MultiSelect from './multi-select';
import SearchSettings from './search-settings';

interface Props {
    heading: string;
    text?: string;
}

export interface SelectedOptions {
    allergens: string[];
    categories: string[];
    authors: string[];
    meatType: string[];
    garnishType: string[];
}

const SearchBox = ({ heading, text }: Props) => {
    const [isDesktop] = useMediaQuery('(min-width: 992px)');
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
    const [allergens, setAllergens] = useState<string[]>([
        'Молочные продукты',
        'Яйцо',
        'Рыба',
        'Моллюски',
        'Орехи',
        'Томат (помидор)',
        'Цитрусовые',
        'Клубника (ягоды)',
        'Шоколад',
    ]);
    const [categories] = useState<string[]>([
        'Первые блюда',
        'Вторые блюда',
        'Веганская кухня',
        'Закуски',
        'Детские блюда',
        'Десерты, выпечка',
        'Лечебное питание',
        'Соусы',
        'Напитки',
        'Заготовки',
    ]);
    const [authors] = useState<string[]>([
        'Елена Мин',
        'Мирием Чонишвили',
        'Елена Прекрасная',
        'Alex Cook',
        'Екатерина Константинопольская',
        'Инна Высоцкая',
        'Сергей Разумов',
        'Анна Рогачева',
        'Иван Орлов',
        'Повар Ши',
        'Только новые авторы',
    ]);
    const [meatType] = useState<string[]>(['Курица', 'Свинина', 'Говядина', 'Индейка', 'Утка']);
    const [garnishType] = useState<string[]>([
        'Картошка',
        'Гречка',
        'Паста',
        'Спагетти',
        'Рис',
        'Капуста',
        'Фасоль',
        'Другие овощи',
    ]);
    const [isDisabledAllergens, setIsDisabledAllergens] = useState<boolean>(true);
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
        allergens: [],
        categories: [],
        authors: [],
        meatType: [],
        garnishType: [],
    });
    const [searchTerm, setSearchTerm] = useState<string>('');
    const searchFilters = useAppSelector((state) => state.search.searchFilters);
    const searchString = useAppSelector((state) => state.search.searchString);
    const dispatch = useAppDispatch();

    const setSelectedAllergens = (items: string[]) => {
        setSelectedOptions((prev) => ({
            ...prev,
            allergens: items,
        }));
    };

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        if (e.target.value.length > 0) {
            dispatch(setSearchString(e.target.value));
        } else {
            dispatch(clearFiltered());
        }
    };

    const handleSearch = () => {
        dispatch(filterData({ searchTerm: searchString, filters: searchFilters }));
    };

    return (
        <Fragment>
            <Flex
                flexDirection='column'
                alignItems='center'
                mb='24px'
                px='16px'
                position='relative'
                zIndex={2}
            >
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
                            onClick={() => setIsOptionsOpen(true)}
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
                                onChange={(e) => handleSearchInput(e)}
                            />
                            <InputRightElement height={`${isDesktop ? '48px' : '32px'}`}>
                                <Button
                                    type='submit'
                                    variant='ghost'
                                    isDisabled={searchTerm.length < 3}
                                    p={0}
                                    minW='unset'
                                    onClick={handleSearch}
                                >
                                    <SearchIcon />
                                </Button>
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
                                <Switch
                                    id='allergic'
                                    size='md'
                                    onChange={() => setIsDisabledAllergens(!isDisabledAllergens)}
                                />
                            </FormControl>
                            <MultiSelect
                                options={allergens}
                                checkedOptions={[...selectedOptions.allergens]}
                                setCheckedOptions={setSelectedAllergens}
                                setOptions={setAllergens}
                                isCustom={true}
                                isDisabled={!isDisabledAllergens}
                                placeholder='Выберите из списка...'
                                customPlaceholder='Другой аллерген'
                            />
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <SearchSettings
                isOpen={isOptionsOpen}
                setIsOpen={setIsOptionsOpen}
                allergens={allergens}
                setAllergens={setAllergens}
                isDisabledAllergens={isDisabledAllergens}
                setIsDisabledAllergens={setIsDisabledAllergens}
                categories={categories}
                authors={authors}
                meatType={meatType}
                garnishType={garnishType}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
        </Fragment>
    );
};

export default SearchBox;
