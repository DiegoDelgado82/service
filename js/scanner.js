
let ean;


async function getCuota() {
    //let url = './scr/garantia.json';
    let url="https://raw.githubusercontent.com/DiegoDelgado82/serviciotecnico/main/cuotas.json"
               
    try {
        let res = await fetch(url);
        return await res.json();
        
        
    } catch (error) {
        console.log(error);
    }
   
  }


  async function buscarCuotas(eanEscaneado) {
    
    let cuotas = await getCuota();

            cuotas.forEach(cuota => {
                alert(eanEscaneado)
           
            if (parseInt(cuota.EAN) === parseInt(eanEscaneado))
                {
                    alert("encontro")
                    document.getElementById('cuotas').textContent= cuota.CUOTAS+" Cuotas";
			        document.getElementById('descripcion').textContent= cuota.DESCRIPCION;
                }
                
            
            })
            
  
  
}




document.addEventListener("DOMContentLoaded", () => {
	const $resultados = document.querySelector("#resultado");
	Quagga.init({
		inputStream: {
			constraints: {
				width: 1920,
				height: 1080,
			},
			name: "Live",
			type: "LiveStream",
			target: document.querySelector('#contenedor'), // Pasar el elemento del DOM
		},
		decoder: {
			readers: ["ean_reader"]
		}
	}, function (err) {
		if (err) {
			console.log(err);
			return
		}
		console.log("Iniciado correctamente");
		Quagga.start();
	});

	Quagga.onDetected((data) => {
		$resultados.textContent = data.codeResult.code;
		// Imprimimos todo el data para que puedas depurar
		
        buscarCuotas(data.codeResult.code)

	});

	Quagga.onProcessed(function (result) {
		
	});
});



