import { FilterState } from '../../components/body/sider/filterReducer/filterReducer';

export interface PaginationParams {
    page: number;
    pageSize?: number;
    filterState?: FilterState;
}
