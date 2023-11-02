const fetchItem = async(id) => {
	try {
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0adcf94238638598e5ffd29263b5d0bc&language=es-MX`;

		const respuesta = await fetch(url);
		const datos = await respuesta.json();
		
		return datos;
	} catch (e) {
		console.log(e)
	}
};

export default fetchItem
