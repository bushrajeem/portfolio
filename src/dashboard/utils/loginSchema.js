import { z } from "zod";

export const LoginSchema = z.object({
   email: z.string(1,{message: "Email is required"}).email({message: "invalid email"}),
   password: z.string(1,{message: "Password is requied"}).min(5,{message: "Min length 5"})
})