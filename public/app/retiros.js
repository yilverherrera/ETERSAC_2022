const sumRetiroContr = (ev) => {
	let total = 0;
	const totalRetiro = document.getElementById('totalRetiro');
	    [...document.querySelectorAll("input[type=number]")].forEach(el => {

        el.classList.remove("error");

        if (el.value=="") {

            el.classList.add("error");
            return false;

        }
        total += parseFloat(el.value);

    })
	    totalRetiro.innerHTML = total.toFixed(2);
}