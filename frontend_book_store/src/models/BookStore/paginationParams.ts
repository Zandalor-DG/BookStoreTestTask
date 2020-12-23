import { FilterState } from '../../components/body/sider/filterReducer';

export interface PaginationParams {
    page: number;
    pageSize?: number;
    filterState?: FilterState;
}
