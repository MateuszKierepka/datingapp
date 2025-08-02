export type Pagination = {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
}

export type PaginatedResut<T> = {
    items: T[];
    metadata: Pagination;
}