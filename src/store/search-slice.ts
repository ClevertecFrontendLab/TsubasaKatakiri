import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SelectedOptions } from '~/components/search-box/search-box';
import { Recipe } from '~/types/recipe';

export interface SearchState {
    initialData: Recipe[];
    searchString: string;
    searchFilters: SelectedOptions;
    filteredData: Recipe[];
}

const initialState: SearchState = {
    initialData: [],
    searchString: '',
    searchFilters: {
        allergens: [],
        categories: [],
        authors: [],
        meatType: [],
        garnishType: [],
    },
    filteredData: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInitialData: (state, action: PayloadAction<Recipe[]>) => {
            state.initialData = action.payload;
            state.filteredData = action.payload;
        },
        setSearchString: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload;
        },
        setSearchFilters: (state, action: PayloadAction<SelectedOptions>) => {
            state.searchFilters = action.payload;
        },
        clearFiltered: (state) => {
            state.filteredData = [];
            state.searchFilters = {
                allergens: [],
                categories: [],
                authors: [],
                meatType: [],
                garnishType: [],
            };
            state.searchString = '';
        },
        filterData: (
            state,
            action: PayloadAction<{ searchTerm: string; filters: SelectedOptions }>,
        ) => {
            const { searchTerm, filters } = action.payload;
            const lowerSearchTerm = searchTerm.toLowerCase();

            state.filteredData = state.initialData.filter((item: Recipe) => {
                const matchesSearch = item.title.toLowerCase().includes(lowerSearchTerm);

                const matchesCategory =
                    filters.categories.length === 0 ||
                    item.category.some((cat) => filters.categories.includes(cat));

                // const matchesAuthor = filters.authors.length === 0 ||
                //   filters.authors.includes(item.author);

                const matchesMeatType =
                    filters.meatType.length === 0 ||
                    (item.meat && filters.meatType.includes(item.meat));

                const matchesGarnishType =
                    filters.garnishType.length === 0 ||
                    (item.side && filters.garnishType.includes(item.side));

                const noAllergens =
                    filters.allergens.length === 0 ||
                    !item.ingredients.some((ingredient) =>
                        filters.allergens.includes(ingredient.title),
                    );

                return (
                    matchesSearch &&
                    matchesCategory &&
                    matchesMeatType &&
                    matchesGarnishType &&
                    noAllergens
                );
            });
        },
    },
});

export const { setInitialData, setSearchString, setSearchFilters, filterData, clearFiltered } =
    searchSlice.actions;
export default searchSlice.reducer;

export { searchSlice };
