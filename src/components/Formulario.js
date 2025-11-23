import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Formulario = () => {

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!form.email.includes("@")) {
      newErrors.email = "El email no es válido.";
    }

    if (!form.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await addDoc(collection(db, "contactos"), {
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje,
        fecha: new Date().toISOString()
      });

      setSuccess("Formulario enviado correctamente. ¡Gracias!");

      setForm({
        nombre: "",
        email: "",
        mensaje: ""
      });

      setErrors({});

    } catch (error) {
      console.error("Error al guardar en Firestore:", error);
      setSuccess("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Formulario de Contacto</h2>

      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} noValidate>
            
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="nombre"
                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                value={form.nombre}
                onChange={handleChange}
              />
              {errors.nombre && (
                <div className="invalid-feedback">
                  {errors.nombre}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea
                name="mensaje"
                rows="4"
                className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                value={form.mensaje}
                onChange={handleChange}
              />
              {errors.mensaje && (
                <div className="invalid-feedback">
                  {errors.mensaje}
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </form>

          {success && (
            <div className="alert alert-info mt-3" role="alert">
              {success}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Formulario;
