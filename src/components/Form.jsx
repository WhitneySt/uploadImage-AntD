import React, { useEffect, useState } from "react";
import UploadImages from "./UploadImages";
import { useForm } from "react-hook-form";

const Form = () => {
    const [images, setImages] = useState([]);
    const {
      register,
      handleSubmit
    } = useForm();

  useEffect(() => {
    console.log(images);
  }, [images]);

  const handleLoad = (file) => {
    setImages([...images, file]);
    };
    
    const onSubmit = (data) => {
        console.log(data)
        console.log(images);
        //AQUÍ SE DEBE realizar el POST a Cloudinary y disparar la acción de crear historia
    }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type="text" {...register("name")} />
              <label htmlFor="">Subir Imagen</label>
              {/* ESTE ES EL INPUT DE ANTD */}
        <UploadImages onLoad={handleLoad}/>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default Form;
