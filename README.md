<p align="center">
  <img src="https://github.com/josecervera20/challenge-aluraflix/blob/main/src/assets/logo.png" alt="Logo AluraFlix"/>
</p>

AluraFlix es una plataforma diseñada para gestionar vídeos con funcionalidades completas como listar, registrar, actualizar y eliminar vídeos. Este proyecto implementa React con JavaScript para reforzar tus habilidades en componentización, uso de hooks, consumo de API y navegación con React Router.

### 🚀 Atención 🚀

Este proyecto utiliza un servidor local creado con [json-server](https://www.npmjs.com/package/json-server) para simular una API REST.

## 📝 Características

### Gestión de Videos

- Listar vídeos
- Registrar (agregar) vídeos
- Actualizar información de vídeos
- Eliminar vídeos

### Funcionalidades de React

- **Componentización:** Desarrollo modular con componentes reutilizables.
- **Uso de Hooks:** Gestión de estados y efectos en componentes funcionales.
- **Consumo de API:** Integración con APIs para operaciones CRUD.
- **Manejo de Rutas:** Navegación entre diferentes vistas con React Router.

## Creación de proyecto

Para comenzar, ejecuta el siguiente comando:

```bash
npm create vite@latest
```

Nombre del proyecto:

```bash
AluraFlix
```

Selecciona:

- React
- JavaScript

Luego, navega hacia el directorio del proyecto e instala las dependencias:

```bash
cd AluraFlix
npm install
npm run dev
```

## Instalación 🔧

1.  Instala [react-router-dom](https://www.npmjs.com/package/react-router-dom) para gestionar las rutas en tu aplicación React:

    ```bash
    npm i react-router-dom
    ```

2.  Instala [react-icons](https://react-icons.github.io/react-icons/search/#q=MdFavorite) para integrar iconos fácilmente en tu proyecto:

    ```bash
    npm install react-icons
    ```

3.  Instala [React-Loaders-Kit](https://seimodei.github.io/react-loaders-kit-examples/) junto con [Styled Components](https://www.npmjs.com/package/styled-components) para componentes de carga personalizables:

    ```bash
    npm i --save react-loaders-kit styled-components
    ```

4.  Descarga [Normalize.css](https://necolas.github.io/normalize.css/) para asegurar estilos consistentes en los navegadores modernos.

5.  **API falsa con json-server**

    **5.1.** Instala [json-server](https://www.npmjs.com/package/json-server) para simular una API REST con datos locales:

        npm install json-server

    **5.2.** Crea un archivo `db.json` con la siguiente estructura:

        {
          "videos": [
            {
              "id": 1,
              "title": "Equipo Front End",
              "category": "FRONT END",
              "photo": "https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
              "link": "https://www.youtube.com/embed/rpvrLaBQwgg",
              "description": "En este video, Jeanmarie Quijada, instructora Front End en Alura Latam te explica qué hace el equipo de Front End."
            },
          ]
        }

    **5.3.** Inicia el servidor json-server:

        npx json-server --watch db.json --port 3000

## 💻 Tecnologías

- [React + Vite](https://vitejs.dev/guide/)
- JavaScript

## Tecnologías secundarias

- Node.js y npm (incluyendo `node_modules`)
- JSON Server (usando `db.json` para simular API)
- VsCode
- Git
- GitHub

