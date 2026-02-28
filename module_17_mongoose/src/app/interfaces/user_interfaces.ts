
export interface address {
    city:string,
    road: string,
    postalCode : number
}

export interface users {
    name: {
        firstName: string;
        lastName: string
    },
    age:number,
    address: address,
    email: string,
    role: "user" | "admin",
    password: string
}

export interface userInstanceMethod{
hashPassword(password:string):string 
}