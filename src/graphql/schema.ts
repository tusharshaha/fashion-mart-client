import { gql } from "graphql-request";

export const product_query = gql`
    {
        products{
            _id
            img
            name
            curPrice
            prevPrice
            sku
            category
          }
    }
`

export const order_product = gql`
    mutation order($input: orderInput!){
        orderProduct(input: $input)
    }
`
export const all_orders_query = gql`
    {
        allOrders{
            _id
            userEmail
            date
            status
            payment
        }
    }
`
export const user_orders_query = gql`
    query getUserOrders($email: String!){
        userOrders(email: $email){
            _id
            userEmail
            userName
            userPhone
            company
            address
            country
            city
            date
            status
            payment
            totalAmount
            totalQty
            products{
                pId
                pName
                pPrice
                pQty
            }
        }
    }
`
export const single_product_query = gql`
    query getSingleProduct($id: ID!){
        product(id: $id){
            img
            name
            curPrice
            prevPrice
            sku
            category
        }
    }
`
export const login_user = gql`
    query loginUser($email: String!, $password: String!){
        loginUser(email: $email, password: $password) {
            userName
            userFullName
            email
            token
        }
    }
`
export const register_user = gql`
    mutation regiserNewUser($input: registerUserInput!){
        registerUser(input: $input){
            register
        }
    }
`
