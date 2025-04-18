import axios from "axios";
import { useState } from "react";

export const ImageUpload = () => {
  // const cld = new Cloudinary({ cloud: { cloudName: 'dryxnxrj3' } });

  // const img = cld
  //       .image('cld-sample-5')
  //       .format('auto')
  //       .quality('auto')
  //       .resize(auto().gravity(autoGravity()).width(500).height(500));

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  console.log(preview);

  const handleImageSubmit = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    formData.append("cloud_name", "dryxnxrj3");
    formData.append("folder", "portfolio");

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dryxnxrj3/image/upload?upload_preset=ml_default",
        formData
      );
      console.log(data.url);

      if (data.url) {
        await axios.post("http://localhost:3000/images", {
          imageUrl: data.url,
        });
      }
    } catch (error) {
      console.log("Upload failed:", error);
    }

    console.log(formData);
  };

  return (
    <>
      <input 
      className= "w-[300px] h-[100px] bg-gray-200 p-5 rounded-2xl"
      type="file" onChange={handleChange} />
      <img 
      className="w-[300px] h-[300px] p-5"
      src={preview} alt="" />
      <button 
      className="mt-5 w-[170px] h-[60px] text-white bg-orange-500 rounded-full hover:bg-transparent hover:duration-200 hover:border-2 hover:border-orange-500 hover:text-orange-500"
      onClick={handleImageSubmit}>Submit</button>
    </>
  );
};
