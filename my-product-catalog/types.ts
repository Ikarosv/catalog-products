// types.ts
export interface Detail {
  key: string;
  value: any;
}

export interface Product {
  name: string;
  code: number;
  details?: Detail[];
  emb: number;
  category: string;
  image: string;
}
