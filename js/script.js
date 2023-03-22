
function nuevoProducto(e) {
  e.preventDefault()

  const productoEl = document.querySelector('#nombre').value.trim()
  const precioEl = document.querySelector('#precio').value.trim()

  document.querySelector('#tbody').innerHTML +=
    `
 <tr>
  <td>${productoEl}</td>
  <td>${precioEl}</td>
  </tr>
  `
}

document.querySelector('#formulario').addEventListener('submit', nuevoProducto)