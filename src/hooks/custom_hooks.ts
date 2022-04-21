import request from "graphql-request";
import { useEffect, useState } from "react"
import { product_query } from "../graphql/schema";
import { GRAPHQL_URL } from "../util/BaseUrl";
import { productType } from "../util/types";

export const useProducts: () => ({ products: productType[] }) = () => {
    const [products, setProducts] = useState<productType[]>([]);
    useEffect(() => {
        request<{ products: productType[] }>(GRAPHQL_URL, product_query)
            .then(data => setProducts(data.products))
    }, [])
    return { products }
}