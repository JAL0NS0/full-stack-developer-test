--CREATE DATABASE 'gestion_sesiones';

CREATE TABLE estudiantes(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE sesiones(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    start_datetime TIMESTAMP,
    end_datetime TIMESTAMP,
    cupo INTEGER,
    disponible INTEGER
);

CREATE TABLE asignaciones(
    id_estudiante INTEGER,
    id_sesion INTEGER,
    PRIMARY KEY (id_estudiante, id_sesion),
    FOREIGN KEY (id_estudiante) REFERENCES estudiantes ON DELETE CASCADE,
    FOREIGN KEY (id_sesion) REFERENCES sesiones ON DELETE CASCADE
);