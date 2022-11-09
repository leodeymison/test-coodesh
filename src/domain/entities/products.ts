export type ProductScore = {
    code: number;
    status: "draft" | "trash" | "published";
    imported_t: string;
    url: string;
    creator: string;
    product_name: string;
    quantity: string;
    brands: string;
    categories: string;
    labels: string;
    cities: string;
    purchase_places: string;
    stores: string;
    ingredients_text: string;
    traces: string;
    serving_size: string;
    serving_quantity: number;
    nutriscore_score: number;
    nutriscore_grade: string;
    main_category: string;
    image_url: string;
}

export type ProductUpdate = {
    status?: "draft" | "trash" | "published";
    imported_t?: string;
    url?: string;
    creator?: string;
    product_name?: string;
    quantity?: string;
    brands?: string;
    categories?: string;
    labels?: string;
    cities?: string;
    purchase_places?: string;
    stores?: string;
    ingredients_text?: string;
    traces?: string;
    serving_size?: string;
    serving_quantity?: number;
    nutriscore_score?: number;
    nutriscore_grade?: string;
    main_category?: string;
    image_url?: string;
}

export type ProductResponse = {
    code: number;
    status: "draft" | "trash" | "published";
    imported_t: string;
    url: string;
    creator: string;
    product_name: string;
    quantity: string;
    brands: string;
    categories: string;
    labels: string;
    cities: string;
    purchase_places: string;
    stores: string;
    ingredients_text: string;
    traces: string;
    serving_size: string;
    serving_quantity: number;
    nutriscore_score: number;
    nutriscore_grade: string;
    main_category: string;
    image_url: string;
    created_t: 1415302075;
    last_modified_t: 1572265837
}
 