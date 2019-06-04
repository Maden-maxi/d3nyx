export interface Book {
    id: number;
    name: string;
    authors: string[];
    year: number;
    price: number;
    description?: string;
    category?: string[];
}
