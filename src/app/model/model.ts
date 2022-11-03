export interface Movie {
    id: number,
    title: string,
    hours: number,
    image: string
}


export interface Product {
    id: number,
    title: string,
    description: string,
    price: number
}

export interface Student {
    name?: string
    course?: string
    marks?: number
    DOB?: Date
    gender?: string
}