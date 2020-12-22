type FilterState = {
    genres?: number[];
    author?: number;
    publish?: number;
    maxPrice?: number;
    minPrice?: number;
};

type Actions =
    | { type: 'set_author'; selectedAuthors: number }
    | { type: 'set_publish'; selectedPublish: number }
    | { type: 'set_genre'; selectedGenres: number[] }
    | { type: 'set_price'; min: number; max: number };

export const filterReducer = (state: FilterState, action: Actions): FilterState => {
    switch (action.type) {
        case 'set_author':
            return {
                ...state,
                author: action.selectedAuthors,
            };
        case 'set_price':
            return {
                ...state,
                minPrice: action.min,
                maxPrice: action.max,
            };
        case 'set_genre':
            return {
                ...state,
                genres: action.selectedGenres,
            };
        case 'set_publish':
            return {
                ...state,
                publish: action.selectedPublish,
            };
        default:
            return state;
    }
};

export const getInitialFilterState = (opt: FilterState): FilterState => {
    return opt;
};
