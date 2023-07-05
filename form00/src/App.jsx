import React, { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

const UserContext = createContext();

function Head() {
  const { email } = useContext(UserContext);
  return <h1>{email}</h1>;
}

function Card({ user }) {
  return (
    <div>
      <p>Nombre: {user.nombre}</p>
      <img src={user.urlFoto} alt="Foto" />
      <p>Email: {user.email}</p>
      <p>Edad: {user.edad}</p>
    </div>
  );
}

function Formulario() {
  const [user, setUser] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setUser(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombre")} placeholder="Nombre" />
      <input {...register("email")} placeholder="Email" />
      <input {...register("urlFoto")} placeholder="URL de la foto" />
      <input {...register("edad")} placeholder="Edad" />
      <button type="submit">Enviar</button>
      <UserContext.Provider value={user}>
        <Head />
        <Card user={user} />
      </UserContext.Provider>
    </form>
  );
}

export default Formulario;