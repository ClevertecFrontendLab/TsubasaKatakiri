import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    FormControl,
    FormLabel,
    Stack,
    Switch,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react';
import { ReactElement, useEffect, useState } from 'react';

import MultiSelect from './multi-select';
import { SelectedOptions } from './search-box';

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    allergens: string[];
    setAllergens: (allergens: string[]) => void;
    isDisabledAllergens: boolean;
    setIsDisabledAllergens: (isDisabledAllergens: boolean) => void;
    categories: string[];
    authors: string[];
    meatType: string[];
    garnishType: string[];
    selectedOptions: SelectedOptions;
    setSelectedOptions: (selectedOptions: SelectedOptions) => void;
}

const SearchSettings = ({
    isOpen,
    setIsOpen,
    allergens,
    setAllergens,
    isDisabledAllergens,
    setIsDisabledAllergens,
    categories,
    authors,
    meatType,
    garnishType,
    selectedOptions,
    setSelectedOptions,
}: Props) => {
    const [selectedTags, setSelectedTags] = useState<ReactElement[]>([]);

    const [meatElements, setMeatElements] = useState<ReactElement[]>([]);
    const [garnishElements, setGarnishElements] = useState<ReactElement[]>([]);

    useEffect(() => {
        const elements: ReactElement[] = [];
        meatType.forEach((item) => {
            elements.push(
                <Checkbox
                    key={item}
                    value={item}
                    colorScheme='green'
                    sx={{
                        '.chakra-checkbox__control': {
                            borderColor: '#B1FF2E',
                            _checked: {
                                bg: '#B1FF2E',
                                borderColor: '#B1FF2E',
                                color: '#000000',
                            },
                        },
                    }}
                >
                    <Text fontSize='14px' lineHeight='20px' verticalAlign='middle'>
                        {item}
                    </Text>
                </Checkbox>,
            );
        });
        setMeatElements(elements);
    }, [meatType]);

    useEffect(() => {
        const elements: ReactElement[] = [];
        garnishType.forEach((item) => {
            elements.push(
                <Checkbox
                    key={item}
                    value={item}
                    colorScheme='green'
                    sx={{
                        '.chakra-checkbox__control': {
                            borderColor: '#B1FF2E',
                            _checked: {
                                bg: '#B1FF2E',
                                borderColor: '#B1FF2E',
                                color: '#000000',
                            },
                        },
                    }}
                >
                    <Text fontSize='14px' lineHeight='20px' verticalAlign='middle'>
                        {item}
                    </Text>
                </Checkbox>,
            );
        });
        setGarnishElements(elements);
    }, [garnishType]);

    useEffect(() => {
        const tagArray = [...selectedOptions.garnishType, ...selectedOptions.meatType];
        const elements: ReactElement[] = [];
        tagArray.forEach((item) => {
            elements.push(
                <Tag
                    bgColor='#EAFFC7'
                    color='#207E00'
                    borderColor='#B1FF2E'
                    fontWeight={400}
                    key={item}
                >
                    <TagLabel>{item}</TagLabel>
                </Tag>,
            );
        });
        setSelectedTags(elements);
    }, [selectedOptions]);

    const onClose = () => {
        setIsOpen(false);
    };

    const onClean = () => {
        const cleanOptions: SelectedOptions = {
            allergens: [],
            categories: [],
            authors: [],
            meatType: [],
            garnishType: [],
        };
        setSelectedOptions(cleanOptions);
    };

    const setSelectedAllergens = (items: string[]) => {
        const newData: SelectedOptions = { ...selectedOptions, allergens: items };
        setSelectedOptions(newData);
    };

    const setSelectedCategories = (items: string[]) => {
        const newData: SelectedOptions = { ...selectedOptions, categories: items };
        setSelectedOptions(newData);
    };

    const setSelectedAuthors = (items: string[]) => {
        const newData: SelectedOptions = { ...selectedOptions, authors: items };
        setSelectedOptions(newData);
    };

    const setSelectedMeat = (values: (string | number)[]) => {
        const newData: SelectedOptions = { ...selectedOptions, meatType: values as string[] };
        setSelectedOptions(newData);
    };

    const setSelectedGarnishes = (values: (string | number)[]) => {
        const newData: SelectedOptions = { ...selectedOptions, garnishType: values as string[] };
        setSelectedOptions(newData);
    };

    return (
        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent width='463px' minWidth='463px'>
                <DrawerHeader
                    display='flex'
                    flexDir='row'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Text>Фильтр</Text>
                    <DrawerCloseButton
                        position='static'
                        size='sm'
                        bgColor='#000000'
                        color='#FFFFFF'
                        borderRadius='50%'
                    />
                </DrawerHeader>

                <DrawerBody display='flex' flexDirection='column' gap='24px'>
                    <MultiSelect
                        options={categories}
                        checkedOptions={[...selectedOptions.categories]}
                        setCheckedOptions={setSelectedCategories}
                        placeholder='Выберите из списка...'
                    />
                    <MultiSelect
                        options={authors}
                        checkedOptions={[...selectedOptions.authors]}
                        setCheckedOptions={setSelectedAuthors}
                        placeholder='Выберите из списка...'
                    />
                    <Box>
                        <CheckboxGroup
                            value={selectedOptions.meatType}
                            onChange={(values) => setSelectedMeat(values)}
                        >
                            <Text fontWeight={500} fontSize='16px' lineHeight='24px' mb='12px'>
                                Тип мяса:
                            </Text>
                            <Stack spacing='12px' direction='column'>
                                {meatElements}
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                    <Box>
                        <CheckboxGroup
                            value={selectedOptions.garnishType}
                            onChange={(values) => setSelectedGarnishes(values)}
                        >
                            <Text fontWeight={500} fontSize='16px' lineHeight='24px' mb='12px'>
                                Тип гарнира:
                            </Text>
                            <Stack spacing='10px' direction='column'>
                                {garnishElements}
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                    <Flex direction='column' width='100%' gap='8px'>
                        <FormControl display='flex' flexDirection='row' alignItems='center'>
                            <FormLabel id='allergic' mb={0} fontSize='16px' fontWeight={500}>
                                Исключить аллергены
                            </FormLabel>
                            <Switch
                                id='allergic'
                                size='md'
                                colorScheme='#AA0000'
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
                </DrawerBody>

                <DrawerFooter width='100%' display='flex' flexDirection='column' gap='32px'>
                    <Flex
                        width='100%'
                        direction='row'
                        alignItems='center'
                        justifyContent='flex-start'
                        gap='16px'
                    >
                        {selectedTags}
                    </Flex>
                    <Flex
                        width='100%'
                        direction='row'
                        alignItems='center'
                        justifyContent='flex-end'
                    >
                        <Button variant='outline' mr={3} onClick={onClean} size='lg'>
                            Очистить фильтр
                        </Button>
                        <Button variant='solid' color='white' bgColor='black' size='lg'>
                            Найти рецепт
                        </Button>
                    </Flex>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default SearchSettings;
