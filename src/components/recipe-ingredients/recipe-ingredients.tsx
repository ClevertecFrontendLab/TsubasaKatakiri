import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useMediaQuery,
} from '@chakra-ui/react';
import { ReactElement, useEffect, useState } from 'react';

import { Ingredient, Recipe } from '~/types/recipe';

interface Props {
    recipe: Recipe;
}

const RecipeIngredients = ({ recipe }: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 767px)');
    const [isPortable] = useMediaQuery('(max-width: 991px)');
    const [isWideDesktop] = useMediaQuery('(min-width: 1441px)');

    const [ingredients, setIngredients] = useState<Ingredient[]>(recipe.ingredients);
    const [portions, setPortions] = useState<number>(1);
    const [ingredientsRows, setIngredientsRows] = useState<ReactElement[]>([]);

    useEffect(() => {
        const updatedIngredients = recipe.ingredients.map((item) => {
            const newItem = JSON.parse(JSON.stringify(item));
            newItem.count = (Number.parseInt(item.count) * portions).toString();
            return newItem;
        });
        setIngredients(updatedIngredients);
    }, [portions]);

    useEffect(() => {
        const rows: ReactElement[] = [];
        ingredients.forEach((item, index) => {
            rows.push(
                <Tr key={item.title}>
                    <Td
                        color='#000000EB'
                        fontWeight={600}
                        fontSize='14px'
                        lineHeight='20px'
                        verticalAlign='middle'
                        textAlign='left'
                    >
                        {item.title}
                    </Td>
                    <Td
                        fontWeight={400}
                        fontSize='14px'
                        lineHeight='20px'
                        textAlign='right'
                        data-test-id={`ingredient-quantity-${index}`}
                    >
                        {`${item.count} ${item.measureUnit}`}
                    </Td>
                </Tr>,
            );
        });
        setIngredientsRows(rows);
    }, [portions, ingredients]);

    const handlePortionsChange = (event: string) => {
        setPortions(Number.parseInt(event));
    };

    return (
        <TableContainer
            width='100%'
            maxWidth={isWideDesktop ? '668px' : isMobile ? '100%' : isPortable ? '604px' : '578px'}
        >
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th
                            width='50%'
                            textAlign='left'
                            color='#2DB100'
                            fontSize='12px'
                            lineHeight='16px'
                            letterSpacing='5%'
                            fontWeight={700}
                        >
                            ингредиенты
                        </Th>
                        <Th
                            width='100%'
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='flex-end'
                            gap='16px'
                            px={0}
                        >
                            <Text
                                color='#2DB100'
                                fontSize='12px'
                                lineHeight='16px'
                                letterSpacing='5%'
                                fontWeight={700}
                            >
                                порций
                            </Text>
                            <NumberInput
                                min={1}
                                defaultValue={1}
                                width='90px'
                                onChange={handlePortionsChange}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper data-test-id='increment-stepper' />
                                    <NumberDecrementStepper data-test-id='decrement-stepper' />
                                </NumberInputStepper>
                            </NumberInput>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>{ingredientsRows}</Tbody>
            </Table>
        </TableContainer>
    );
};

export default RecipeIngredients;
