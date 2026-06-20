# Sistema Web Integral de Gestión Comercial, Facturación e Inventario

## Descripción del Proyecto

Este proyecto consiste en un sistema web diseñado para la gestión integral de procesos comerciales dentro de una empresa. Su objetivo principal es centralizar y automatizar operaciones como administración de usuarios, clientes, proveedores, productos, compras, ventas, facturación e inventario.

La aplicación permite llevar un mejor control de la información empresarial, reducir errores operativos y facilitar la toma de decisiones mediante una plataforma organizada, segura y escalable.

El sistema está desarrollado bajo una arquitectura modular, separando las responsabilidades de interfaz, lógica de negocio y almacenamiento de datos, permitiendo un mantenimiento más sencillo y futuras ampliaciones.

---

# Características Principales

## Gestión de Usuarios

* Registro y administración de usuarios.
* Control de acceso mediante roles y permisos.
* Autenticación segura.
* Gestión de estados de usuarios.

## Gestión Comercial

* Administración de clientes.
* Administración de proveedores.
* Gestión de productos y categorías.
* Control de precios y disponibilidad.

## Inventario

* Registro de entradas y salidas de productos.
* Actualización automática de existencias.
* Control de movimientos de inventario.
* Consulta del stock disponible.

## Compras y Ventas

* Registro de compras realizadas a proveedores.
* Registro de ventas realizadas a clientes.
* Actualización automática del inventario.
* Historial de operaciones.

## Facturación

* Generación de facturas asociadas a ventas.
* Consulta de documentos generados.
* Control de información comercial.

## Reportes

* Visualización de información administrativa.
* Consultas de ventas, compras e inventario.
* Datos utilizados para análisis del negocio.

---

# Estructura del Proyecto

El proyecto está organizado siguiendo una estructura modular para facilitar su desarrollo, mantenimiento y escalabilidad.

```
Sistema-Gestion-Comercial/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── assets/
│   │   └── styles/
│   │
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── config/
│   │   └── database/
│   │
│   ├── package.json
│   └── .env
│
├── database/
│   └── script.sql
│
├── docs/
│   └── documentacion/
│
└── README.md
```

---

# Arquitectura del Sistema

El sistema utiliza una arquitectura de tres capas:

## Frontend

Es la parte visual con la que interactúa el usuario.

Responsabilidades:

* Mostrar interfaces.
* Capturar información.
* Consumir servicios del backend.
* Mostrar reportes y datos del sistema.

---

## Backend

Contiene la lógica principal del sistema.

Responsabilidades:

* Validar información.
* Gestionar usuarios y permisos.
* Ejecutar reglas de negocio.
* Procesar ventas, compras e inventario.
* Comunicarse con la base de datos.

---

## Base de Datos

Encargada del almacenamiento permanente de información.

Contiene entidades como:

* Usuarios.
* Roles.
* Clientes.
* Proveedores.
* Productos.
* Compras.
* Ventas.
* Facturas.
* Inventario.
* Auditoría.

---

# Flujo de Funcionamiento

1. El usuario ingresa al sistema mediante autenticación.

2. El frontend envía las credenciales al backend.

3. El backend valida los datos y verifica permisos.

4. El usuario accede a los módulos disponibles según su rol.

5. Las operaciones realizadas son procesadas por la lógica del sistema.

6. La información es almacenada o consultada desde la base de datos.

7. El resultado es enviado nuevamente al frontend para mostrarse al usuario.

---

# Requisitos Previos

Antes de ejecutar el proyecto es necesario tener instalado:

* Node.js
* npm
* Motor de base de datos utilizado (MySQL/PostgreSQL)
* Git

Verificar instalación:

```bash
node -v
npm -v
```

---

# Instalación del Proyecto

## 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar al proyecto:

```bash
cd Sistema-Gestion-Comercial
```

---

# Configuración del Backend

Ingresar a la carpeta:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Crear archivo `.env`:

Ejemplo:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=gestion_comercial

JWT_SECRET=secret_key
```

Configurar los datos según el entorno local.

Ejecutar backend:

```bash
npm run dev
```

El servidor quedará disponible en:

```
http://localhost:3000
```

---

# Configuración del Frontend

Ingresar a la carpeta:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar aplicación:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

# Configuración de Base de Datos

1. Crear una base de datos:

```sql
CREATE DATABASE gestion_comercial;
```

2. Ejecutar el archivo SQL ubicado en:

```
database/script.sql
```

3. Verificar que las tablas hayan sido creadas correctamente.

---

# Usuarios del Sistema

Ejemplo de roles:

## Administrador

Permisos:

* Gestión completa del sistema.
* Usuarios.
* Roles.
* Configuración.
* Reportes.

## Ventas

Permisos:

* Clientes.
* Ventas.
* Facturación.

## Inventario

Permisos:

* Productos.
* Categorías.
* Movimientos.

---

# Tecnologías Utilizadas

Frontend:

* HTML5
* CSS3
* JavaScript
* React

Backend:

* Node.js
* Express

Base de Datos:

* MySQL/PostgreSQL

Otros:

* API REST
* JWT
* Git
* Control de versiones

---

# Buenas Prácticas Aplicadas

* Separación frontend/backend.
* Arquitectura modular.
* Validación de datos.
* Manejo de errores.
* Control de acceso por roles.
* Código organizado por responsabilidades.
* Uso de variables de entorno.

---

# Mejoras Futuras

Algunas funcionalidades que pueden incorporarse:

* Aplicación móvil.
* Facturación electrónica.
* Integración con sistemas contables.
* Dashboard avanzado.
* Notificaciones automáticas.
* Despliegue en servicios cloud.

---

# Autor

Proyecto desarrollado como sistema de gestión empresarial orientado a la automatización de procesos comerciales.
