export type Recipe = {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    image: string;
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions?: number;
    nutritionValue: {
        calories: number;
        proteins: number;
        fats: number;
        carbohydrates: number;
    };
    ingredients: Ingredient[];
    steps: RecipeStep[];
    meat?: string;
    side?: string;
};

export type Ingredient = {
    title: string;
    count: string;
    measureUnit: string;
};

export type RecipeStep = {
    stepNumber: number;
    description: string;
    image?: string;
};
