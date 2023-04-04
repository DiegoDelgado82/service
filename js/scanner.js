
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
    alert("cargo ok");
  }


  async function buscarCuotas(eanEscaneado) {
    
    let cuotas = await getCuota();

            cuotas.forEach(cuota => {

                                
                

            if (parseInt(cuota.EAN) === eanEscaneado)
                {
                    alert("Encontro ean")
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
		console.log(data);
		ean= data.codeResult.code
        buscarCuotas(ean)

	});

	Quagga.onProcessed(function (result) {
		
	});
});


async function validarCuotas(ean)
{
   	let bandera=0
	for (var k=0; k<datos.length;k++)
	{
		if (ean.toString()===datos[k][0].toString())
			{
			bandera=1;
			navigator.vibrate(1000);
			document.getElementById('cuotas').textContent= datos[k][1]+" Cuotas";
			document.getElementById('descripcion').textContent= datos[k][2];
			break;
			}
	}
	if (bandera===0)
		{	alert("No se encontró el producto en la base");
			document.getElementById('cuotas').textContent= "";
			document.getElementById('descripcion').textContent= "";		
		}
}

