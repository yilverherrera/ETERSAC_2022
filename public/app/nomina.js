const crearNominaContr = () => {
	const quincenaId = document.getElementById('quincenaId');
	const empleadoId = document.getElementsByName('empleadosId[]');

	const nomina = {
		quincenaId: quincenaId.value,
		empleadoId: empleadoId.value,
	}

	postData(`${serverUrl}nominas`, nomina)
}