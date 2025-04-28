export type Product = {
  id: number;
  category?: string;
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  count?: number;
  desc?: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
  benefits?:string[];
  specifications?: string[];
  maintenance?: string[];
  additional?: string[]
};
