# Sistema Web de Gestión Comercial

## Descripción del Proyecto

Sistema web desarrollado para la gestión de procesos comerciales como administración de usuarios, clientes, proveedores, productos, categorías, inventario, compras, ventas, facturación, reportes y auditoría.

El proyecto funciona actualmente como una aplicación frontend local, utilizando archivos estáticos HTML, CSS y JavaScript. La información del sistema se maneja mediante archivos locales y servicios JavaScript, sin conexión a un backend ni a una base de datos real.

El objetivo principal del proyecto es simular la estructura y funcionamiento de un sistema de gestión empresarial, organizando sus módulos de manera independiente y permitiendo la administración de diferentes procesos desde una interfaz web.

---

# Características Principales

- Panel administrativo con diferentes módulos.
- Gestión de usuarios y roles.
- Gestión de clientes y proveedores.
- Administración de productos y categorías.
- Control de inventario.
- Registro de compras y ventas.
- Gestión visual de facturas.
- Módulo de reportes.
- Registro de auditoría.
- Sistema de autenticación local.
- Manejo de información mediante servicios JavaScript.
- Diseño modular basado en componentes separados.

---

# Estructura del Proyecto

```
GestionComercial/
│
├── admin/
│   │
│   ├── dashboard/
│   │   ├── dashboard.html
│   │   ├── dashboard.css
│   │   └── dashboard.js
│   │
│   ├── usuarios/
│   │   ├── usuarios.html
│   │   ├── usuarios.css
│   │   └── usuarios.js
│   │
│   ├── roles/
│   │   ├── roles.html
│   │   ├── roles.css
│   │   └── roles.js
│   │
│   ├── clientes/
│   │   ├── clientes.html
│   │   ├── clientes.css
│   │   └── clientes.js
│   │
│   ├── proveedores/
│   │   ├── proveedores.html
│   │   ├── proveedores.css
│   │   └── proveedores.js
│   │
│   ├── productos/
│   │   ├── productos.html
│   │   ├── productos.css
│   │   └── productos.js
│   │
│   ├── categorias/
│   │   ├── categorias.html
│   │   ├── categorias.css
│   │   └── categorias.js
│   │
│   ├── inventario/
│   │   ├── inventario.html
│   │   ├── inventario.css
│   │   └── inventario.js
│   │
│   ├── compras/
│   │   ├── compras.html
│   │   ├── compras.css
│   │   └── compras.js
│   │
│   ├── ventas/
│   │   ├── ventas.html
│   │   ├── ventas.css
│   │   └── ventas.js
│   │
│   ├── facturas/
│   │   ├── facturas.html
│   │   ├── facturas.css
│   │   └── facturas.js
│   │
│   ├── reportes/
│   │   ├── reportes.html
│   │   ├── reportes.css
│   │   └── reportes.js
│   │
│   ├── auditoria/
│   │   ├── auditoria.html
│   │   ├── auditoria.css
│   │   └── auditoria.js
│   │
│   ├── admin.css
│   ├── admin.js
│   └── index.html
│
├── data/
│   └── Archivos de información local utilizados por el sistema.
│
├── services/
│   ├── storage.js
│   ├── usuarioService.js
│   ├── clienteService.js
│   ├── productoService.js
│   ├── ventaService.js
│   ├── compraService.js
│   ├── facturaService.js
│   └── reporteService.js
│
├── auth/
│   ├── login.html
│   ├── login.css
│   ├── login.js
│   ├── signup.html
│   ├── signup.css
│   └── signup.js
│
├── assets/
│   ├── imagen/
│   ├── icons/
│   └── fonts/
│
├── utils/
│   ├── validators.js
│   ├── formatters.js
│   ├── idGenerator.js
│   └── dateHelper.js
│
├── reports/
│   ├── ventasReport.js
│   ├── comprasReport.js
│   ├── inventarioReport.js
│   └── dashboardReport.js
│
├── index.html
├── styles.css
├── mainContainer.css
├── scripts.js
├── auth.js
│
├── README.md
└── package
```

---

# Funcionamiento del Sistema

El sistema está dividido en módulos independientes donde cada sección contiene sus propios archivos HTML, CSS y JavaScript.

Cada módulo tiene la responsabilidad de manejar una parte específica del sistema:

- **Dashboard:** muestra información general y estadísticas.
- **Usuarios:** administración de usuarios del sistema.
- **Roles:** gestión de permisos y niveles de acceso.
- **Clientes:** registro y administración de clientes.
- **Proveedores:** control de proveedores.
- **Productos:** administración del catálogo.
- **Categorías:** organización de productos.
- **Inventario:** control de existencias.
- **Compras:** registro de adquisiciones.
- **Ventas:** gestión de operaciones comerciales.
- **Facturas:** administración de documentos generados.
- **Reportes:** generación de información estadística.
- **Auditoría:** seguimiento de acciones realizadas.

---

# Organización Interna

## Carpeta admin

Contiene todos los módulos principales del sistema administrativo. Cada módulo posee:

- Archivo HTML para la interfaz.
- Archivo CSS para los estilos.
- Archivo JavaScript para la lógica del módulo.

## Carpeta services

Contiene funciones encargadas del manejo de datos y comunicación interna entre módulos.

Ejemplos:

- Gestión de usuarios.
- Manejo de productos.
- Procesos de ventas.
- Procesos de compras.
- Generación de reportes.

## Carpeta auth

Contiene el sistema de acceso al sistema:

- Inicio de sesión.
- Registro de usuarios.
- Validaciones de autenticación local.

## Carpeta utils

Contiene funciones auxiliares utilizadas en diferentes partes del proyecto:

- Validación de datos.
- Formateo de información.
- Generación de identificadores.
- Manejo de fechas.

---

# Instalación y Ejecución

## Requisitos

- Navegador web actualizado.
- Servidor local opcional como Live Server.

---

## Ejecutar el Proyecto

1. Descargar o clonar el proyecto.

2. Abrir la carpeta:

```
GestionComercial
```

3. Ejecutar el archivo:

```
index.html
```

También puede utilizarse una extensión como **Live Server** en Visual Studio Code para ejecutar el proyecto en un entorno local.

---

# Tecnologías Utilizadas

- HTML5.
- CSS3.
- JavaScript.
- JSON para almacenamiento local de información.
- Diseño modular basado en archivos separados.

---

# Limitaciones Actuales

El sistema actualmente funciona de manera local, por lo que presenta las siguientes limitaciones:

- No posee backend.
- No utiliza una base de datos real.
- No cuenta con API REST.
- La autenticación es local.
- Los datos no están almacenados en un servidor.
- No está preparado actualmente para despliegue en producción.

---

# Mejoras Futuras

Entre las mejoras posibles se encuentran:

- Implementación de backend.
- Integración con una base de datos SQL.
- Creación de API REST.
- Sistema real de usuarios y permisos.
- Despliegue en servicios cloud.
- Implementación de facturación electrónica.
- Mejoras de seguridad.

---

# Estado del Proyecto

**Estado actual:** Aplicación web frontend funcional en entorno local.

El proyecto representa una base estructurada para un sistema de gestión comercial, con módulos organizados y preparados para una futura integración con servicios backend y bases de datos reales.
