import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function AdminExperience() {
  const [experience, setExperience] = useState();
  const [isedit, setIsedit] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/expData")
      .then((response) => setExperience(response.data));
  });

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      id:""
    },
  });

  const onSubmit = async (values) => {
    if (!isedit) {
      
       await axios.post(
        "http://localhost:3000/expData",
        JSON.stringify(values)
      );
      form.reset();
   
    } else{   
      let response = await axios.put(
        `http://localhost:3000/expData/${values.id}`,
        JSON.stringify(values)
      );
      if (response) {
    
        form.reset();

      }
   
    }
  };

  const onDelete = async (values) => {
    let response = await axios.delete(
      `http://localhost:3000/expData/${values.id}`,
     
    );
    console.log(response);
  };

  const handleEdit = (item) => {
    setIsedit(true);
    form.setValue("name", item.name)
    form.setValue("description", item.description)
    form.setValue("id", item.id)
  }
  
  return (
    <div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-5 p-10"
      >
        {/* <span className="col-span-1">
        <p className="text-[18px] font-bold mb-2">Enter image</p>
        <input placeholder="title" type="text" />
      </span> */}
        <span>
          <p className="text-[18px] font-bold mb-2">Enter name</p>
          <input className="w-full h-[50px] border-2 border-gray-300 p-5 mb-5"
            placeholder="name"
            {...form.register("name", { required: true })}
          />
          {form.formState.errors.name && <p>name is required</p>}
        </span>
        <span>
          <p className="text-[18px] font-bold mb-2">Enter description</p>
          <input className="w-full h-[50px] border-2 border-gray-300 p-5 mb-5"
            placeholder="description"
            {...form.register("description", { required: true })}
          />
          {form.formState.errors.description && <p>description is required</p>}
        </span>
        <button
          className="w-[170px] h-[60px] text-white bg-orange-500 rounded-full hover:bg-transparent hover:duration-200 hover:border-2 hover:border-orange-500 hover:text-orange-500"
          type="submit"
        >
          Submit
        </button>
      </form>

     
        {experience?.map((item, i) => (
          <div className="p-5" key={i}>
            <p className="font-bold"> name: {item.name} </p>
            <p>description: {item.description}</p>
            <button
              onClick={()=> onDelete(item)}
              className="text-white bg-orange-500 rounded-4xl p-2 mt-3"
              type="submit"
            >
              Delete
            </button>

            <button
      onClick={()=>handleEdit(item)}
              className="text-white bg-orange-500 rounded-4xl p-2 mt-3"
              type="submit"
            >
              edit
            </button>
            
          </div>
        ))}
     
      
    </div>
  );
}

export default AdminExperience;
