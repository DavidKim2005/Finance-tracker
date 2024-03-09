export interface ApiTransaction {
    amount: number;
    category: string;
    time: string;
}

export interface ApiTransactions {
    [id: string]: ApiTransaction;
}

export interface ApiCategory {
    name: string;
    type: string;
}

export interface ApiCategories {
    [id: string]: ApiCategory;
}