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
