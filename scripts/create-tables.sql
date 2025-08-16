-- Tabla usuarios
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    id_colegio INT,
    nombre VARCHAR(255),
    apellido_paterno VARCHAR(255),
    apellido_materno VARCHAR(255),
    nombre_usuario VARCHAR(255),
    tipo_usuario CHAR(1) CHECK (tipo_usuario IN ('E', 'C')),  -- E: estudiante, C: colegio admin
    clave VARCHAR(255),
    correo VARCHAR(255) UNIQUE,
    sexo CHAR(1) CHECK (sexo IN ('M', 'F')), -- m: masculino, f: femenino
    telefono VARCHAR(15),
    fecha_nacimiento DATE,
    anio_egreso_colegio INT,
    estado_auditoria CHAR(1) DEFAULT '1',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla colegios
CREATE TABLE colegios (
    id_colegio SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    distrito_ubigeo VARCHAR(6),
    direccion TEXT,
    estado_auditoria CHAR(1) DEFAULT '1',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla tipo_parametros
CREATE TABLE tipo_parametros (
    id_tipo_parametro SERIAL PRIMARY KEY,
    descripcion TEXT,
    estado_auditoria CHAR(1) DEFAULT '1',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla parametros
CREATE TABLE parametros (
    id_parametro SERIAL PRIMARY KEY,
    id_tipo_parametro INT REFERENCES tipo_parametros(id_tipo_parametro),
    valor TEXT,
    descripcion TEXT,
    estado_auditoria CHAR(1) DEFAULT '1',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla predicciones
CREATE TABLE predicciones (
    id_prediccion SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuarios(id_usuario),
    horas_aptitud INT,
    horas_matematica INT,
    horas_fisica_quimica INT,
    horas_total_semana INT,
    anio_postula INT,
    especialidad VARCHAR(255),
    anio_nacimiento INT,
    anio_egreso_colegio INT,
    modalidad VARCHAR(255),
    probabilidad_ingreso DECIMAL(5,2),
    prediccion INT CHECK (prediccion IN (0, 1)),  -- 1: Aprobado, 0: No aprobado
    riesgo VARCHAR(20) , -- H: Alto, M: Medio, L: Bajo
    estado_auditoria CHAR(1) DEFAULT '1',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
