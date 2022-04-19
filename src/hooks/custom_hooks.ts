import request from "graphql-request";
import { useEffect, useState } from "react"
import { product_query } from "../graphql/schema";
import { GRAPHQL_URL } from "../util/BaseUrl";
interface product {
    _id: string,
    img: string,
    name: string,
    curPrice: number,
    prevPrice: number,
    sku: string,
    category: string
}
export const useProducts: () => ({ products: product[] }) = () => {
    const [products, setProducts] = useState<product[]>([]);
    useEffect(() => {
        request<{ products: product[] }>(GRAPHQL_URL, product_query)
            .then(data => setProducts(data.products))
    }, [])
    return { products }
}