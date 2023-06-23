export interface category {
    category_id?: number;
    category_name: string;
    category_image:string;
  }

  export interface Getstoreprocedure {
    month_year: string;
    category_id: number;
    category_name: string;
    inventory_id: number;
    inventory_name: string;
    price: number;
    quantity: number;
    seller: string;
    description: string;
    sold_items: number;
    remaining_quantity: number;
  }