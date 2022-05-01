import request from "graphql-request";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { user_orders_query } from "../graphql/schema";
import { RootState } from "../redux/store";
import { GRAPHQL_URL } from "../utils/BaseUrl";
import { orderedProduct } from "../utils/types";

export const useOrders: (update?: boolean) => ({ orders: orderedProduct[] }) = (update) => {
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
    }, [token, email, update])
    return { orders }
}
