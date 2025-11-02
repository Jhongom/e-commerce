export interface ProductTypes {
    id: number;
    images: string;
    title: string;
    price: number;
    category: string;
    stock: number;
}

export interface CardProps{
    card: ProductTypes;
}