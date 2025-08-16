
# Proyecto Backend Node.js - Express, TypeORM, TypeScript y PostgreSQL

Este es un proyecto backend desarrollado con **Node.js**, utilizando **Express** como framework web, **TypeORM** para la gestión de la base de datos en **PostgreSQL**, y **TypeScript** como lenguaje de programación.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (LTS recomendado) - El cual incluye npm (Node Package Manager)
- [PostgreSQL](https://www.postgresql.org/download/) - La base de datos utilizada en este proyecto
- [TypeORM](https://typeorm.io/) - ORM para manejar las interacciones con la base de datos

Además, necesitarás tener configurado PostgreSQL en tu máquina o en un servidor de base de datos accesible, con un usuario, base de datos y credenciales adecuadas.

## Instalación del proyecto

1. **Clona el repositorio**:

   Si aún no has descargado el proyecto, clónalo desde GitHub:

   ```bash
   git clone https://github.com/usuario/repo-backend-node.git
   ```

2. **Accede al directorio del proyecto**:

   ```bash
   cd repo-backend-node
   ```

3. **Instala las dependencias**:

   Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

4. **Configuración de la base de datos**:

   Antes de ejecutar el proyecto, configura las credenciales de la base datos en el archiv .env , puede guiarse de .env.example

   ```bash

   Asegúrate de que PostgreSQL esté corriendo y que las credenciales sean correctas. La opción `synchronize` está habilitada para sincronizar el esquema de la base de datos con las entidades definidas, pero solo debe usarse en desarrollo.

## Ejecución del proyecto

1. **Compilar y ejecutar el servidor**:

   Una vez que las dependencias estén instaladas, compila y ejecuta el servidor con los siguientes comandos:

   ```bash
   npm run build
   npm start
   ```

   El servidor de Express estará corriendo en `http://localhost:3000` (puede variar si se configura otro puerto en el archivo de configuración).

2. **Modo de desarrollo**:

   Si estás trabajando en desarrollo, puedes usar el siguiente comando para compilar y ejecutar el proyecto automáticamente cada vez que se detecten cambios:

   ```bash
   npm run dev
   ```

   Esto ejecutará el servidor utilizando `ts-node` para no tener que compilar manualmente cada vez.

## Generar un build para producción

Si deseas generar un build optimizado para producción, ejecuta:

```bash
npm run build
```

Esto generará el código JavaScript compilado en la carpeta `dist/`. El servidor puede ejecutarse con el siguiente comando:

```bash
npm run start:prod
```

## Estructura del proyecto

- `src/`: Carpeta que contiene todo el código fuente de la aplicación.
    - `entities/`: Aquí se definen las entidades de la base de datos que serán gestionadas por TypeORM.
    - `controllers/`: Los controladores que gestionan las rutas y la lógica de la aplicación.
    - `services/`: Contiene la lógica de negocio que interactúa con los controladores.
    - `routes/`: Aquí se definen las rutas de la API.
- `package.json`: El archivo de configuración de npm con scripts y dependencias.

## Contribuir

1. Realiza un fork de este repositorio.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz tus cambios y realiza un commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Envía tus cambios a tu repositorio (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
