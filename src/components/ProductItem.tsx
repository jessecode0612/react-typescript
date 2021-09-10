import React from "react";

export interface Product {
  title: String;
  image: Array<String>;
  description: String;
  price: Number;
  tage: Array<String>;
}

export const ProductItem: React.FC<Product> = (props): JSX.Element => {
  const { product } = props;
  return <div>{product.title}</div>;
};
