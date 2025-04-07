import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AdminSchema } from "../utils/adminschema";


export const AdminHome = () => {
  const form = useForm({
    resolver: zodResolver(AdminSchema),
    defaultValues:{
      userName: "",
      Password: "",
  },
  });
  const onSubmit = async (values) => {
    console.log(values);
    let response = await axios.post("http://localhost:3000/home", JSON.stringify(values));
    console.log(response);
    
  };
 console.log(form.formState.errors.userName);
 
  return (
    <div>

      <form className="flex gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col-reverse">
        <input placeholder="name" {...form.register("userName", {required: true})} />
        {form.formState.errors.userName?.message}
        </div>
        <div className="flex flex-col-reverse">
        <input placeholder="password" {...form.register("Password")} />
        {form.formState.errors.Password?.message}
        </div>
        <button type="submit">Submit</button>
      </form>
    
    </div>
  );
}

export default AdminHome;
