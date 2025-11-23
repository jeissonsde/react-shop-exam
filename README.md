# 🛒 React Shop Exam – Proyecto Final (IPLACEX)

Este proyecto corresponde al **examen final de la asignatura Programación de Componentes**.  
Incluye el desarrollo de una aplicación construida con **React**, **Firebase**, **Bootstrap**,  
y un despliegue para **web** (Netlify) y **móvil (APK)** usando **Cordova**.

El objetivo principal es demostrar el uso de componentes, props, state, comunicación entre componentes, validaciones, servicios en la nube y la generación de un build móvil.

---

## 🚀 Funcionalidades Principales

### ✅ 1. **Tienda con React**
- Lista de productos (Laptop, Audífonos, Teclado, Mouse).
- Componente padre e hijo (ProductList y ProductItem).
- Comunicación padre → hijo mediante props.
- Comunicación hijo → padre mediante callback.
- Carrito funcional usando **state** y `this.setState`.
- Cálculo automático del total y cantidad.

### ✅ 2. **Formulario + Validaciones + Firestore**
- Formulario creado con React.
- Validaciones manuales (nombre, email, mensaje).
- Envío de datos a **Firebase Firestore**.
- Registro de fecha automáticamente.

### ✅ 3. **Autenticación con Google**
- Se utiliza **Firebase Auth**.
- Permite iniciar sesión con la cuenta de Google.
- Muestra el usuario autenticado en pantalla.

### ✅ 4. **Subida de Fotos**
- Uso de **Firebase Storage**.
- Permite subir imágenes PNG/JPG.
- Guarda cada imagen asociada al usuario logueado.

### ✅ 5. **Estilos con Bootstrap**
- Cards, grid responsive, botones, espaciados.
- Diseño limpio y simple.

### ✅ 6. **Build Web + APK Móvil**
- Proyecto desplegado en **Netlify**.
- Proyecto exportado como **APK** usando Apache Cordova:
  - `cordova platform add android`
  - `cordova build android`

---

## 📁 Estructura del Proyecto

react-shop-exam/
│
├── public/
├── src/
│ ├── components/
│ │ ├── ProductList.js
│ │ ├── ProductItem.js
│ │ ├── CartSummary.js
│ │ ├── Formulario.js
│ │ ├── AuthGoogle.js
│ │ ├── UploadPhoto.js
│ ├── firebaseConfig.js
│ ├── App.js
│ ├── index.js
│
├── package.json
└── README.md


---

## 🛠️ Tecnologías Utilizadas

- **React**
- **JavaScript ES6+**
- **Bootstrap**
- **Firebase**:
  - Firestore Database
  - Authentication (Google)
  - Storage
- **Cordova** (para APK móvil)
- **Node.js**
- **Netlify** (deploy web)

---

## 🔧 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
git clone https://github.com/jeissonsde/react-shop-exam.git

cd react-shop-exam

### 2️⃣ Instalar dependencias
npm install


---

## 🔥 Configuración de Firebase

Crear un archivo:

src/firebaseConfig.js


Agregar:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

📨 Envío de Datos a Firestore

El formulario guarda datos así:

await addDoc(collection(db, "contactos"), {
  nombre,
  email,
  mensaje,
  fecha: new Date().toISOString()
});

🖼️ Subida de Fotos a Storage

Los archivos se guardan usando:

uploadBytes(storageRef, archivo);

📱 Creación del APK con Cordova
1️⃣ Instalar Cordova
npm install -g cordova

2️⃣ Crear proyecto móvil
cordova create mobileapp
cd mobileapp
cordova platform add android

3️⃣ Copiar el build web dentro de www/
npm run build
copy build/* mobileapp/www/

4️⃣ Compilar APK
cordova build android


APK generado en:

platforms/android/app/build/outputs/apk/debug/app-debug.apk

🌍 Deploy en Netlify

Ir a https://netlify.com

Crear cuenta

"Add new site" → "Deploy"

Conectar con GitHub

Seleccionar el repositorio

Configuración:

build command: npm run build

publish directory: build/

Deploy automático

👤 Autor

Jeisson Díaz
Estudiante la carrera de Analista Programador – IPLACEX
Proyecto desarrollado como examen final del curso Programación de Componentes.

📄 Licencia

Libre uso académico y educativo.


