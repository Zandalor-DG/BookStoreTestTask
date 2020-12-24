import { FilterState } from '../body/sider/filterReducer/filterReducer';
import queryString from 'query-string';

export const getFilterUrl = (filterState: FilterState): string => {
    const stingUrl = queryString.stringify(filterState, { arrayFormat: 'comma' });
    return `/?${stingUrl}`;
};
