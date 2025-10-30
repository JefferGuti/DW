Proyecto Full Stack: 
Portafolio Web con Galería
Este proyecto consiste en una aplicación web desarrollada con Angular (frontend) y Node.js con Express (backend). Su propósito es mostrar un portafolio interactivo con navegación entre vistas, galería de imágenes, formulario de contacto, autenticación básica y conexión con una API RESTful.

Estructura del Proyecto
Código
/frontend-final   → Aplicación Angular
/backend-final    → API REST con Express
Cada módulo tiene su propio package.json, configuración independiente y documentación.

Frontend: Angular 17 (Standalone)
Características
Navegación entre vistas: Inicio, Galería, Sobre Nosotros, Detalle

Enrutamiento con RouterModule y app.routes.ts

Componentes standalone organizados por carpeta

Estilos globales con Bootstrap y CSS personalizado

Formulario de contacto con validaciones

Vista de detalle con parámetros dinámicos (queryParams)

Almacenamiento local (localStorage) para autenticación

Comunicación con el backend mediante HttpClient

Visualización de datos con *ngFor en tarjetas

Instalación
bash
cd frontend-final
npm install
ng serve
Despliegue
El frontend está publicado en GitHub.

Backend: Node.js + Express + MongoDB
Características
API RESTful con rutas para autenticación, usuarios y contacto

Uso de dotenv para configuración segura

Conexión a MongoDB Atlas o local

Validación de datos con middleware

Autenticación con JWT

CORS habilitado para conexión con el frontend

Instalación
bash
cd backend-final
npm install
npm start
Endpoints principales
POST /api/login → Autenticación

POST /api/contacto → Envío de formulario

GET /api/usuario → Datos del usuario autenticado

Despliegue
El backend puede ser publicado en Render, Railway o cualquier plataforma compatible con Node.js


