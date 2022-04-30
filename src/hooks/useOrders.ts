import request from "graphql-request";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { user_orders_query } from "../graphql/schema";
import { RootState } from "../redux/store";
import { GRAPHQL_URL } from "../util/BaseUrl";
import { orderedProduct } from "../util/types";

export const useOrders: () => ({ orders: orderedProduct[] }) = () => {
    const [orders, setOrders] = useState<orderedProduct[]>([]);
    const { token, email } = useSelector((state: RootState) => state.authUser.value);
    useEffect(() => {
        (async () => {
            await request<{ userOrders: orderedProduct[] }>(GRAPHQL_URL, user_orders_query, { email })
                .then(res => setOrders(res.userOrders))
                .catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: err.response.errors[0].message
                    })
                })
        })()
    }, [token, email])
    return { orders }
}
