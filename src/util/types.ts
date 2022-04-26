export interface productType {
    _id: string,
    img: string,
    name: string,
    curPrice: number,
    prevPrice: number,
    sku: string,
    category: string
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
    email: string
}

export interface registerUser {
    userName?: string,
    userFullName?: string,
    email?: string,
    password?: string,
    register: boolean
}