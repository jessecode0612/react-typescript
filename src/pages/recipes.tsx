import React, {useEffect, useState} from "react";
import {getProducts} from "../api";
import Loader from "../components/Loader";
import {Product, ProductItem} from "../components/ProductItem";
import {Pagination} from "../components/Pagination";
import DefaultLayout from "../layouts/DefaultLayout";

const LIMIT_PER_PAGE: number = 9;

export default function RecipesPage () {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<Array<Product>>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        setLoading(true);
        getProducts().then((res: {success: boolean, products: Array<Product>}) => {
            if (res.success) {
                setProducts(res.products);
            }
            setLoading(false);
        });
    }, []);

    const getPaginatedData = (): Array<Product> => {
        const startIndex = currentPage * LIMIT_PER_PAGE - LIMIT_PER_PAGE;
        const endIndex = startIndex + LIMIT_PER_PAGE;
        return products.slice(startIndex, endIndex);
    };

    const handlePaginate = (page: number): void => {
        setCurrentPage(page);
    }

    return (
        <DefaultLayout>
            <div className="text-center p-2" style={{backgroundColor:'#f7f7f7'}}>
                <h1 className="font-bold text-3xl text-gray-800 my-2">
                    Fetch and list products{" "}
                    <span role="img" aria-label="Shop"> 🛒 </span>
                </h1>
                <hr/>
                <div className="container m-auto">

                    <h2 className="font-bold text-2xl text-gray-700 my-2">
                        Product list
                    </h2>

                    {loading ? (
                        <Loader/>
                    ) : (
                        <div className="flex flex-col w-full">
                            <div className="flex flex-wrap">
                                {getPaginatedData().map((product:Product, index) => (
                                    <div className="xl:w-1/3 md:w-1/2 p-4" key={index.toString()}>
                                        <ProductItem product={product}/>
                                    </div>
                                ))}
                            </div>
                            <Pagination onPaginate={handlePaginate} totalPage={Math.ceil(products.length / LIMIT_PER_PAGE)} />
                        </div>
                    )}
                </div>
            </div>
        </DefaultLayout>
    );
}
