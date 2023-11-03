

const cargarBusquedas = async (resultados = []) => {
	const contenedor = document.querySelector('#populares .main__grid');

	try {
		// Reiniciamos las peliculas
		contenedor.innerHTML = '';

		resultados.forEach((resultado) => {
			const plantilla = `
				<div class="main__media" data-id="${resultado.id}">
					<a href="#" class="main__media-thumb">
						<img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
					</a>
					<p class="main__media-titulo">${resultado.title || resultado.name}</p>
					<p class="main__media-fecha">${resultado.genero}</p>
				</div>
			`;

			contenedor.insertAdjacentHTML('beforeend', plantilla);
		});
	} catch (e) {
		console.log(e);
	}
};

const fetchBusqueda = async (query) => {
	try {
		const url = ` https://api.themoviedb.org/3/search/movie?api_key=0adcf94238638598e5ffd29263b5d0bc&query=${query}&language=es-MX`;
		const respuesta = await fetch(url);
		const data = await respuesta.json();
		const movies = data.results
		console.log(movies)

		cargarBusquedas(movies)
	} catch (error) {
		console.error('Error al realizar la búsqueda:', error);
	}
};

export default fetchBusqueda;
