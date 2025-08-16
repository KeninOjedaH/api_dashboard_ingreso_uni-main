INSERT INTO colegios (nombre, distrito_ubigeo, direccion, estado_auditoria, fecha_creacion)
VALUES
  ('Colegio Nacional de Ciencias', '150101', 'Av. Los Olivos 123, Lima', '1', CURRENT_TIMESTAMP),
  ('Colegio San José', '150102', 'Calle Nueva 456, Lima', '1', CURRENT_TIMESTAMP);


  INSERT INTO usuarios (id_colegio, nombre, apellido_paterno, apellido_materno, nombre_usuario, tipo_usuario, clave, correo, sexo, telefono, fecha_nacimiento, anio_egreso_colegio, estado_auditoria, fecha_creacion)
VALUES
  (1, 'Juan', 'Pérez', 'González', 'admin1', 'C', 'admin', 'juan.perez@cnc.edu.pe', 'M', '987654321', '1980-05-15', 1998, '1', CURRENT_TIMESTAMP);


INSERT INTO usuarios (id_colegio, nombre, apellido_paterno, apellido_materno, nombre_usuario, tipo_usuario, clave, correo, sexo, telefono, fecha_nacimiento, anio_egreso_colegio, estado_auditoria, fecha_creacion)
VALUES
  (2, 'Ana', 'López', 'Martínez', 'admin2', 'C', 'admin', 'ana.lopez@sj.edu.pe', 'F', '912345678', '1985-03-22', 2003, '1', CURRENT_TIMESTAMP);