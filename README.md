# Sistema Web de Gestión Comercial e Inventario

## Descripción del Proyecto

Este proyecto consiste en una aplicación web orientada a la gestión básica de procesos comerciales como productos, clientes, inventario y ventas.

La aplicación fue desarrollada como un sistema frontend que funciona de manera local, enfocándose en la creación de una interfaz moderna, navegación entre módulos y simulación de funcionalidades principales de un sistema administrativo.

Actualmente el proyecto no cuenta con un backend ni una base de datos propia, por lo que la información utilizada dentro del sistema se maneja mediante datos locales o simulados dentro de la aplicación.

---

# Funcionalidades Principales

El sistema incluye diferentes módulos visuales que permiten simular operaciones comunes de una plataforma de gestión comercial:

- Gestión de productos.
- Gestión de clientes.
- Control básico de inventario.
- Registro simulado de ventas.
- Panel principal con información general.
- Visualización de estadísticas.
- Navegación entre diferentes secciones.
- Interfaz adaptable a diferentes dispositivos.

---

# Estructura del Proyecto

La organización principal del proyecto es la siguiente:

```
Proyecto/
│
├── public/
│   └── Archivos públicos y recursos estáticos.
│
├── src/
│   │
│   ├── assets/
│   │   └── Imágenes, iconos y recursos gráficos.
│   │
│   ├── components/
│   │   └── Componentes reutilizables de la interfaz.
│   │
│   ├── pages/
│   │   └── Páginas principales del sistema.
│   │
│   ├── layouts/
│   │   └── Estructuras generales de la aplicación.
│   │
│   ├── data/
│   │   └── Datos simulados utilizados por el sistema.
│   │
│   ├── routes/
│   │   └── Configuración de rutas y navegación.
│   │
│   ├── styles/
│   │   └── Archivos de estilos globales.
│   │
│   ├── App.*
│   │   └── Configuración principal de la aplicación.
│   │
│   └── main.*
│       └── Punto de entrada del proyecto.
│
├── package.json
│   └── Dependencias y scripts necesarios.
│
└── README.md
```

---

# Funcionamiento del Sistema

El sistema funciona completamente desde el navegador mediante una aplicación frontend.

El usuario puede ingresar a los diferentes módulos disponibles e interactuar con la interfaz para realizar acciones como:

- Consultar información.
- Crear registros temporales.
- Modificar datos.
- Eliminar elementos.
- Visualizar información general del negocio.

La aplicación está diseñada para representar la estructura y experiencia de uso de un sistema comercial, pero actualmente no posee conexión con servicios externos ni almacenamiento permanente.

---

# Tecnologías Utilizadas

Las principales tecnologías utilizadas en el desarrollo son:

- HTML5.
- CSS3.
- JavaScript.
- Framework frontend utilizado para la construcción de la interfaz.
- Librerías adicionales para componentes visuales.

---

# Instalación y Ejecución

## Requisitos Previos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js.
- npm.

Para comprobar la instalación:

```bash
node -v
npm -v
```

---

## Instalación del Proyecto

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar a la carpeta del proyecto:

```bash
cd nombre-del-proyecto
```

Instalar las dependencias:

```bash
npm install
```

---

## Ejecutar la Aplicación

Para iniciar el proyecto en modo desarrollo:

```bash
npm run dev
```

Después de ejecutar el comando, abrir en el navegador la dirección indicada por la consola, normalmente:

```
http://localhost:5173
```

---

# Arquitectura Actual

El proyecto utiliza una arquitectura frontend donde:

- La capa visual se encarga de mostrar la información al usuario.
- Los componentes permiten reutilizar elementos de la interfaz.
- Las páginas representan los diferentes módulos del sistema.
- Los datos utilizados actualmente son locales o simulados.

No existe comunicación con un servidor externo debido a que no se implementó una capa backend.

---

# Limitaciones Actuales

La versión actual del proyecto presenta las siguientes limitaciones:

- No cuenta con backend.
- No posee una base de datos real.
- No tiene API REST.
- No incluye autenticación real de usuarios.
- La información no tiene persistencia permanente.
- No está preparado actualmente para un entorno productivo empresarial.

---

# Mejoras Futuras

Como evolución del proyecto se pueden implementar:

- Backend utilizando tecnologías como Node.js, Spring Boot u otra alternativa.
- Base de datos relacional.
- Sistema de autenticación y permisos.
- API para comunicación entre frontend y backend.
- Sistema real de inventario y facturación.
- Despliegue en servicios cloud.
- Generación de reportes avanzados.

---

# Estado del Proyecto

**Estado actual:** Aplicación frontend funcional en entorno local.

El proyecto representa una base inicial para la construcción de un sistema comercial completo, permitiendo posteriormente integrar servicios backend, almacenamiento de datos y funcionalidades empresariales avanzadas.
