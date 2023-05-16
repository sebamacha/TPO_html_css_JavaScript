// ------------formularrio de contacto----------------
// Obtener el formulario
const formulario = document.querySelector("form");

// Agregar el evento submit al formulario
formulario.addEventListener("submit", function (event) {
	event.preventDefault(); // Evitar que el formulario se envíe automáticamente

	// Obtener los valores de los campos
	const nombre = formulario.nombre.value.trim();
	const apellido = formulario.apellido.value.trim();
	const email = formulario.email.value.trim();
	const mensaje = formulario.mensaje.value.trim();

	// Validar los campos
	if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
		// Mostrar mensaje de validación
		document.getElementById("validacion").textContent =
			"Todos los campos son obligatorios";
	} else {
		// Enviar el formulario
		formulario.submit();
	}
});

// Obtener todos los botones
const botones = document.querySelectorAll(".button");

// Agregar la función de manejo de eventos a cada botón
botones.forEach((boton) => {
	boton.addEventListener("click", function () {
		const redSocial = this.querySelector("span").textContent.toLowerCase();

		// Realizar la acción correspondiente según la red social seleccionada
		switch (redSocial) {
			case "facebook":
				// Acción para Facebook
				window.open("https://www.facebook.com/", "_blank");
				break;
			case "twitter":
				// Acción para Twitter
				window.open("https://www.twitter.com", "_blank");
				break;
			case "whatsapp":
				// Acción para WhatsApp
				window.open("https://api.whatsapp.com/send?phone=3464573869", "_blank");
				break;
			case "telefono":
				// Acción para el teléfono
				window.open("tel:+3464573869", "_blank"); // Reemplaza +3464573869 con tu número de teléfono
				break;
			case "instagram":
				// Acción para Instagram
				window.open("https://www.instagram.com", "_blank");
				break;
			default:
				break;
		}
	});
});

const currency = "USD"; // Moneda base, en este caso, dólar
const targetCurrency = "EUR"; // Moneda de destino

fetch(
	`https://api.exchangeratesapi.io/latest?base=${currency}&symbols=${targetCurrency}`
)
	.then((response) => response.json())
	.then((data) => {
		const exchangeRate = data.rates[targetCurrency];
		document.getElementById(
			"exchangeRate"
		).innerText = `1 ${currency} = ${exchangeRate} ${targetCurrency}`;
	})
	.catch((error) => {
		console.error("Error al acceder a la API de cotizaciones de dólar", error);
	});
