// import { Cloudinary } from "@cloudinary/url-gen/index";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [pic, setPic] = useState();

//   const cld = new Cloudinary({ cloud: { cloudName: 'dryxnxrj3' } });
//   const path = require('portfolio');

//   async function uploadImage(filePath) {
//     try {
//       const result = await Cloudinary.uploader.upload(filePath);
//       console.log('Uploaded:', result.secure_url);
//     } catch (err) {
//       console.error('Upload error:', err);
//     }
//   }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    setPic(e.target.files);
    console.log(setPic);
  };
  return (
    <>
      <input
        className="border-black border-[1px]"
        type="file"
        onChange={handleChange}
      />
      <button>Submit</button>
    </>
  );
}

export default App;
