# backend

## Resumen
Este documento proporciona una visión general del proyecto backend desarrollado para una aplicación web de gestión de sesiones de clases en una universidad.

## Tecnologías Utilizadas
* **Node.js:** Plataforma de desarrollo del lado del servidor.
* **Express:** Framework de aplicaciones web para Node.js.
* **PostgreSQL:** Sistema de gestión de bases de datos relacional.

## Configuración del Proyecto
* **Base de Datos:** Se utiliza PostgreSQL como base de datos.
* **Variables de Entorno:** La configuración se realiza a través de archivos **.env**.
* **Scripts de Base de Datos:** Se proporcionan scripts SQL para inicializar la base de datos.
* **Carga Automática de Sesiones:** Al iniciar el servidor, se cargan automáticamente las sesiones desde un archivo JSON.
## Estructura del Proyecto
El proyecto backend se organiza en las siguientes carpetas:

* **Controllers:** Contiene la lógica para el CRUD de cada entidad.
* **Database:** Configuración y conexión a la base de datos.
* **Routes:** Declaraciones de las rutas disponibles en la API.
* **Utils:** Módulos útiles, como la lectura del archivo JSON y la carga automática de sesiones.

## Modelos de Datos
* **Tabla de Estudiantes:**
    * id (Primary Key, Integer)
    * nombre (VARCHAR)
    * email (VARCHAR)
* **Tabla de Sesiones:**
    * id (Primary Key, Integer)
    * nombre (VARCHAR)
    * start_datetime (TIMESTAMP)
    * end_datetime (TIMESTAMP)
    * cupo (Integer)
* **Tabla de Asignaciones:**
    * id_estudiante (Integer)
    * id_sesion (Integer)
    * id_estudiante, id_sesion (Primary Key)

## Endpoints
**/estudiantes:** CRUD completo para estudiantes.

**/asignaciones:** Permite crear, leer y eliminar asignaciones.

**/sesiones:** Muestra todas las sesiones y permite ver una sesión específica por su ID.

## Instrucciones de Ejecución
1. Clonar el repositorio desde GitHub.
2. Configurar las variables de entorno en un archivo **.env**.
3. Ejecutar los scripts de base de datos en PostgreSQL.
4. Iniciar el servidor ejecutando el comando **npm start**.
5. El servidor deberia correr en el Puerto 5000
