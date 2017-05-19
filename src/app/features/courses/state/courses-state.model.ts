import { ICourse } from '../shared';

export interface CoursesState {
    loaded: boolean;
    loading: boolean;
    items: ICourse[];
    page: number;
    size: number;
    query: string;
    total: number;
}
