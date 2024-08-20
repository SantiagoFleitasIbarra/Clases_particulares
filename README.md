# Página Web para Clases Particulares

Este repositorio contiene el código para una aplicación web diseñada para ofrecer clases particulares. El proyecto está dividido en dos partes principales dentro de un solo repositorio:

- **Front-End**: Desarrollado con React.js, proporciona una interfaz interactiva para que los usuarios reserven clases, contacten a los profesores, y lean artículos en un blog.
- **Back-End**: Desarrollado con Node.js y Express.js, gestiona las reservas de clases y otras funcionalidades del servidor. Utiliza MongoDB para el almacenamiento de datos, como la información de las reservas.

## Estructura del Proyecto

### clases-particulares
- /frontend # Código del front-end en React.js
- /backend # Código del back-end en Node.js y Express.js
- README.md # Este archivo
- .gitignore # Archivos y carpetas a ignorar por Git
- package.json # Dependencias y scripts del proyecto

## Características

- **Página de Inicio**: Presenta los servicios y la información sobre las clases ofrecidas.
- **Sistema de Reservas**: Permite a los usuarios seleccionar una fecha y hora para reservar clases.
- **Formulario de Contacto**: Los usuarios pueden enviar consultas y solicitar más información.
- **Blog**: Espacio para publicar artículos con consejos de estudio y recursos educativos.

## Tecnologías Utilizadas

- **Front-End**: React.js, React Router, Axios
- **Back-End**: Node.js, Express.js, MongoDB, Mongoose

## Instalación y Configuración

### Front-End

1. Navega a la carpeta del front-end y instala las dependencias:
   ```bash
   cd frontend
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```
   npm start
   ```

### Back-End

1. Navega a la carpeta del back-end y instala las dependencias:
   ```
   cd backend
   npm install
   ```
2. Inicia el servidor:
   ```
   npm start
   ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor realiza un fork del repositorio y envía un pull request con tus cambios.
