export type DeleteScore = {
    acknowledged: boolean;
    deletedCount: number;
}

export type UpdateScore = {
    acknowledged: boolean;
    modifiedCount: number;
    upsertedId: any;
    upsertedCount: number;
    matchedCount: number;
}

export type Pagination<T> = {
    page: number,
    quant: number,
    body: T
}
