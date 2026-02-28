# 🛒 Carrito de Compras - Academia Online

Este proyecto es una aplicación web interactiva que simula el flujo de compra de una plataforma educativa. Permite a los usuarios explorar cursos, gestionarlos en un carrito dinámico y garantiza la persistencia de los datos mediante el uso de tecnologías web modernas.

## 🚀 Funcionalidades Principales

* **Gestión Dinámica de Carrito**: Implementación de lógica para agregar, incrementar cantidades y eliminar cursos sin recargar la página.
* **Persistencia con LocalStorage**: Los datos del carrito se sincronizan automáticamente con el navegador, permitiendo que la información se mantenga tras refrescar la sesión.
* **Buscador en Tiempo Real**: Sistema de filtrado reactivo que procesa la entrada de texto para mostrar coincidencias instantáneas en la grilla de cursos.
* **Feedback de Usuario (UX)**: Incluye un contador de artículos sobre el icono del carrito y el cálculo automatizado del total a pagar en tiempo real.
* **Diseño Responsivo**: Interfaz adaptativa optimizada para diferentes dispositivos utilizando el framework **Skeleton** y estilos CSS personalizados.

## 🛠️ Tecnologías Utilizadas

* **JavaScript (ES6+)**: Manipulación avanzada del DOM, delegación de eventos y manejo de persistencia.
* **HTML5 & CSS3**: Estructura semántica, variables CSS para mantenibilidad y diseño responsivo.
* **Skeleton CSS**: Framework ligero para el manejo de sistemas de rejilla (Grid).
* **Normalize.css**: Para asegurar la consistencia visual entre diferentes navegadores.

## 📸 Interfaz del Proyecto

A continuación, se presentan capturas de la interfaz de usuario, destacando la organización de los componentes y la interactividad del sistema.

<p align="center">
  <img src="img/screenshot_principal.jpeg" width="700" alt="Captura de Pantalla Carrito de Compras">
  <br>
  <i>Interfaz del Carrito de Compras.</i>
</p>


## 📂 Estructura de Archivos

```bash
/
├── css/
│   ├── normalize.css   # Estilos base de reseteo
│   ├── skeleton.css    # Sistema de columnas y grid
│   └── custom.css      # Estilos personalizados y variables de diseño
├── js/
│   └── app.js          # Lógica de negocio y persistencia
├── img/                # Recursos visuales (Logos, cursos, iconos)
└── index.html          # Estructura principal de la aplicación