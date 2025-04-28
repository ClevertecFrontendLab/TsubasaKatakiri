import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Checkbox,
    Flex,
    IconButton,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tag,
    Text,
    Wrap,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
    options: string[];
    checkedOptions: string[];
    setCheckedOptions: (checkedOptions: string[]) => void;
    setOptions?: (options: string[]) => void;
    isCustom?: boolean;
    isDisabled?: boolean;
    placeholder?: string;
    customPlaceholder?: string;
}

const MultiSelect = ({
    options,
    checkedOptions,
    setCheckedOptions,
    setOptions,
    placeholder = '',
    customPlaceholder = '',
    isCustom,
    isDisabled = true,
}: Props) => {
    const [customInput, setCustomInput] = useState<string>('');

    const toggleOption = (option: string) => {
        const newOptions = checkedOptions.includes(option)
            ? checkedOptions.filter((o) => o !== option)
            : [...checkedOptions, option];
        console.log(newOptions);
        setCheckedOptions(newOptions);
    };

    const addCustomOption = () => {
        if (setOptions) {
            const trimmed = customInput.trim();
            if (trimmed !== '' && !options.includes(trimmed)) {
                const newOptions = [...options, trimmed];
                setOptions(newOptions);
                const newCheckedOptions = [...checkedOptions, trimmed];
                setCheckedOptions(newCheckedOptions);
                setCustomInput('');
            }
        }
    };

    return (
        <Menu closeOnSelect={false}>
            {({ isOpen }) => (
                <>
                    <MenuButton
                        disabled={!isDisabled}
                        borderColor={isOpen ? '#B1FF2E' : '#00000014'}
                        borderWidth='1px'
                        borderRadius='md'
                        px={2}
                        py={1}
                        width='100%'
                        minHeight='40px'
                    >
                        <Flex align='center' justifyContent='space-between'>
                            {checkedOptions.length > 0 ? (
                                <Wrap>
                                    {checkedOptions.map((option) => (
                                        <Tag
                                            key={option}
                                            size='sm'
                                            border='1px solid #B1FF2E'
                                            color='#2DB100'
                                            backgroundColor='#FFFFFF'
                                        >
                                            {option}
                                        </Tag>
                                    ))}
                                </Wrap>
                            ) : (
                                <Text>{placeholder}</Text>
                            )}
                            <ChevronDownIcon
                                mr={2}
                                style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                            />
                        </Flex>
                    </MenuButton>
                    <MenuList width='100%'>
                        {options.map((option, index) => (
                            <MenuItem key={option} bg={index % 2 === 0 ? 'gray.100' : 'white'}>
                                <Checkbox
                                    isChecked={checkedOptions.includes(option)}
                                    onChange={() => toggleOption(option)}
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
                                />
                                <Text ml={2}>{option}</Text>
                            </MenuItem>
                        ))}
                        {isCustom && (
                            <Box px={4} py={2}>
                                <Flex align='center'>
                                    <Input
                                        placeholder={customPlaceholder}
                                        value={customInput}
                                        onChange={(e) => setCustomInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                addCustomOption();
                                            }
                                        }}
                                    />
                                    <IconButton
                                        ml='14px'
                                        px={0}
                                        aria-label='Add option'
                                        icon={<AddIcon width='6px' height='6px' />}
                                        backgroundColor='#2DB100'
                                        color='#FFFFFF'
                                        width='12px'
                                        maxWidth='12px'
                                        minWidth='12px'
                                        height='12px'
                                        borderRadius='50%'
                                        onClick={addCustomOption}
                                    />
                                </Flex>
                            </Box>
                        )}
                    </MenuList>
                </>
            )}
        </Menu>
    );
};

export default MultiSelect;
