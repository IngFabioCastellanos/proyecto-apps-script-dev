/**
 * Insert
 *
 * @param {Object} data datos a guardar en formato JSON
 * @param {Object} table instancia de la tabla de la sheet
 */

function Insert(data, table) {
  const headers = table.getDataRange().getValues().shift();
  const nuevaFila = prepareFila(data, headers);
  table.appendRow(nuevaFila);
}

function prepareFila(data, headers) {
  let arregloOrdenado = [];

  for (let posicion = 0; posicion < headers.length; posicion++) {
    let value = data[headers[posicion]];
    arregloOrdenado[posicion] = value;
  }

  return arregloOrdenado;
}
