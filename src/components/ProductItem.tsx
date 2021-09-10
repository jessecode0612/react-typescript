import React from "react";

export interface Product {
    title: string,
    images: Array<string>,
    description: String,
    price: number,
    tags: Array<string>,
}

export const ProductItem: React.FC<{ product: Product }> = (props: { product: Product }): JSX.Element => {
    const {product} = props;
    console.log(product)
    return (
        <div className="bg-white rounded-lg shadow">
            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={product.images[0]}
                 alt="Image Size 720x400" />
                 <div className="px-6 py-3">
                     {
                         product.tags.map((tag)=>{
                             return(
                                 <span key={tag} className="text-xs capitalize inline-block py-1 px-2 rounded-full text-white bg-pink-700 uppercase last:mr-0 mr-1">
                                     {tag}
                                </span>
                             )
                         })
                     }
                     <h1 className="text-lg text-gray-900 font-bold">{product.title}</h1>
                     <span className={"text-3xl font-bold text-pink-700"}>${product.price}</span>
                     <p className="leading-relaxed text-base overflow-ellipsis overflow-hidden truncate-3-lines ">{product.description}</p>
                 </div>
        </div>
);
};
