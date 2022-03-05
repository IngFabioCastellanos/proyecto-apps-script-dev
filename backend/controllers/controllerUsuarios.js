function guardarUsuario(usuario) {
  try {
    const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
    Insert(JSON.parse(usuario), sheetUsuarios);
    return {
      titulo: "Registro exitoso",
      descripcion: "Ya se encuentra el usuario en la base de datos.",
    };
  } catch (error) {
    return {
      titulo: "Ops ha ocurrido un error! " + error,
      descripcion: "Por favor contacte a soporte.",
    };
  }
}

function listarUsuarios(id = undefined) {
  // return obtenerDatos(env_().SH_REGISTRO_USUARIOS);
  return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRO_USUARIOS), id));
}

function actualizarUsuario(id, datos) {
  try {
    const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
    Update(id, datos, sheetUsuarios);
    return {
      titulo: "Actualizado correctamente",
      descripcion: "Ya se encuentra el usuario actualizado en la base de datos.",
    };
  } catch (error) {
    return {
      titulo: "Ops ha ocurrido un error! " + error,
      descripcion: "Por favor contacte a soporte.",
    };
  }
}
