

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
		var drawingCtx = Quagga.canvas.ctx.overlay,
			drawingCanvas = Quagga.canvas.dom.overlay;

		if (result) {
			if (result.boxes) {
				drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
				result.boxes.filter(function (box) {
					return box !== result.box;
				}).forEach(function (box) {
					Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
				});
			}

			if (result.box) {
				Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
			}

			if (result.codeResult && result.codeResult.code) {
				Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
			}
		}
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

