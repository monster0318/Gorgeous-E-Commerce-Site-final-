export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  count?: number;
  id: number;
  desc?: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
