import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../dashboard/utils/loginSchema";

export default function Adminlogin() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values) => {
    console.log(values);

    let { data } = await axios.get("http://localhost:3000/login");

    let userExist = data?.some((user) => {
      if (user.email == values.email && user.password == values.password) {
        return true;
      } else false;
    });

    if (userExist) {
      localStorage.setItem("authenticated", userExist);
      navigate("/admin");
    }
  };

  return (
    <div>
      <form
        className="bg-gray-200 h-[450px] text-center w-[600px] ml-[380px] mt-[100px] rounded-2xl shadow-2xl"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <h1 className="text-[30px] font-bold py-6 mt-3">Login/Sign up</h1>
        <div>
          {" "}
          <input
            className="w-[400px] p-5 bg-white mt-5 rounded-lg hover:shadow-2xl"
            // onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            {...form.register("email", { required: true })}
          />
          {form.formState.errors.email?.message}
        </div>
        <div>
          {" "}
          <input
            className="w-[400px] p-5 bg-white mt-5 rounded-lg hover:shadow-2xl"
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            {...form.register("password", { required: true })}
          />
          {form.formState.errors.password?.message}
        </div>
        <button
          className="w-[400px] p-5 bg-white mt-5 rounded-lg hover:bg-black hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
