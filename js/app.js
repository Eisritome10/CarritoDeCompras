// Selectores
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
const buscador = document.querySelector('#buscador');
const contador = document.querySelector('#contador-carrito');
const totalPagar = document.querySelector('#total-carrito span');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Al agregar un curso
    listaCursos.addEventListener('click', agregarCurso);

    // Al eliminar un curso
    carrito.addEventListener('click', eliminarCurso);

    // Buscador en tiempo real
    buscador.addEventListener('input', filtrarCursos);

    // Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
        sincronizarStorage();
    });

    // Cargar de LocalStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });
}

// Funciones

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        
        // Feedback visual
        const boton = e.target;
        boton.textContent = '¡Agregado! ✅';
        setTimeout(() => boton.textContent = 'Agregar Al Carrito', 1000);
    }
}

function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}

function filtrarCursos(e) {
    const texto = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const titulo = card.querySelector('h4').textContent.toLowerCase();
        // Filtra comparando el texto ingresado con el título de la card
        card.parentElement.style.display = titulo.includes(texto) ? 'block' : 'none';
    });
}

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some(c => c.id === infoCurso.id);
    if(existe) {
        articulosCarrito = articulosCarrito.map(c => {
            if(c.id === infoCurso.id) {
                c.cantidad++;
                return c;
            }
            return c;
        });
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    carritoHTML();
}

function carritoHTML() {
    limpiarHTML();

    let total = 0;
    let itemsTotales = 0;

    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        
        // Calcular valores para contador y total
        const precioLimpio = parseFloat(precio.replace('$', ''));
        total += precioLimpio * cantidad;
        itemsTotales += cantidad;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;
        contenedorCarrito.appendChild(row);
    });

    // Actualizar Interfaz
    totalPagar.textContent = total.toFixed(2);
    contador.textContent = itemsTotales;

    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    totalPagar.textContent = '0.00';
    contador.textContent = '0';
}