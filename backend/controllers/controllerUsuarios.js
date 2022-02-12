function guardarUsuario(usuario) {
  try {
    const { id, nombreCompleto, correo, contrasenia } = usuario;
    const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
    sheetUsuarios.appendRow([id, nombreCompleto, correo, contrasenia]);
    return {
      titulo: "Registro exitoso",
    };
  } catch (error) {
    return {
      titulo: "Ops ha ocurrido un error! " + error,
    };
  }
}
