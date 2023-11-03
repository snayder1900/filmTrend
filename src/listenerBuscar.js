
//import cargarTitulos from './cargarTitulos';
import fetchBusqueda from './fetchBusqueda';

/*const btn = document.getElementById('btn-buscar');

btn.addEventListener('click', async (e) => {
	e.preventDefault();

	const resultados = await fetchBusqueda();
	cargarTitulos(resultados);
});*/



const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener("click", (e) => {
	e.preventDefault();

	const query = searchInput.value;
	if (query) {
		fetchBusqueda(query)
	}
})