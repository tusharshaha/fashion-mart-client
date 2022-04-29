export interface productType {
    _id: string,
    img: string,
    name: string,
    curPrice: number,
    prevPrice: number,
    sku: string,
    category: string
}

export interface order {
    pId: string
    pName: string
    pPrice: number
    pQty: number
}

export interface orderedProduct {
    _id: string,
    userEmail: string,
    userName: string,
    userPhone: string,
    company?: string,
    address: string,
    country: string,
    city: string,
    date: string,
    status: string,
    payment: string,
    totalAmount: number,
    totalQty: number,
    products: order[]
}

export interface wishlistType {
    id: string,
    img: string,
    name: string,
    curPrice: number,
}

export interface loginUser {
    token: string,
    userName: string,
    userFullName: string,
    email: string,
    role: string,
    createdAt?: string
}

export interface registerUser {
    userName: string,
    userFullName: string,
    email: string,
    password: string,
    register?: boolean
}