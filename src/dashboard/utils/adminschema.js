import { z } from "zod";


export const AdminSchema = z.object({
    userName: z.string(1,{message: "Name is required"}).min(3,{message: "min length is 3" }),
    Password: z.string(1,{message: "password is required"}).min(5,{message: "min length is 5"}).max(20, { message: "Maximum length is 20" }),
    
})