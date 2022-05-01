import request from "graphql-request";
import { useEffect, useState } from "react"
import { product_query } from "../graphql/schema";
import { GRAPHQL_URL } from "../utils/BaseUrl";
import { productType } from "../utils/types";

export const useProducts: () => ({ products: productType[] }) = () => {
    const [products, setProducts] = useState<productType[]>([]);
    useEffect(() => {
        (async () => {
            await request<{ products: productType[] }>(GRAPHQL_URL, product_query)
                .then(data => setProducts(data.products))
        })()
    }, [])
    return { products }
}
