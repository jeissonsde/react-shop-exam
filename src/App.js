import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Formulario from "./components/Formulario";
import AuthGoogle from "./components/AuthGoogle";
import UploadPhoto from "./components/UploadPhoto";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="container mt-4">
      {/* Autenticación con Google */}
      <AuthGoogle onUserChange={setUser} />

      <hr />

      {/* Subir foto solo si hay usuario */}
      <UploadPhoto user={user} />

      <hr className="my-4" />

      {/* Tu tienda */}
      <ProductList />

      <hr className="my-4" />

      {/* Tu formulario conectado a Firestore */}
      <Formulario />
    </div>
  );
}

export default App;
