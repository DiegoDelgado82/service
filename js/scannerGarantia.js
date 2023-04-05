
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
           
            if (parseInt(cuota.EAN) === parseInt(eanEscaneado))
                {
                    document.getElementById('cuotas').textContent= cuota.CUOTAS+" Cuotas";
			        document.getElementById('descripcion').textContent= cuota.DESCRIPCION;
                }
                
            
            })
            
  
  
}







