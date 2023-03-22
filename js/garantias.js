


let cuota24, cuota36, cuota48, cuota60
const path='./scr/garantia.json';
let x = document.getElementById('div1');
x.style.visibility='hidden'



async function getGarantia() {
  let url = './scr/garantia.json';
             
  try {
      let res = await fetch(url);
      return await res.json();
      
  } catch (error) {
      console.log(error);
  }
}

function cargarDiv()
{
    document.getElementById("pCuotas1").textContent=document.getElementById("inpCuota").value +" Cuotas" 
    document.getElementById("pCuotas2").textContent=document.getElementById("inpCuota").value +" Cuotas" 
    document.getElementById("pCuotas3").textContent=document.getElementById("inpCuota").value +" Cuotas" 
    document.getElementById("pCuotas4").textContent=document.getElementById("inpCuota").value +" Cuotas" 
       if(x.style.visibility==="visible")
       {
        x.style.visibility="hidden"
       }
       else x.style.visibility="visible"
}



  
 
  


async function buscarEan() {
    x.style.visibility="hidden"
    let garantias = await getGarantia();
    let bandera=0
   
 garantias.forEach(garantia => {

  if (parseInt(garantia.EAN) ===parseInt(document.getElementById("inpEan").value))
    {
        let precio = parseInt(document.getElementById("inpPrecio").value)
        let cuota= parseInt(document.getElementById("inpCuota").value)
       
        document.getElementById("pDescripcion").textContent=garantia.DESCRIPCION
        cuota60= Math.trunc((precio+garantia.G60)/cuota)
        cuota48= Math.trunc((precio+garantia.G48)/cuota)
        cuota36= Math.trunc((precio+garantia.G36)/cuota)
        cuota24= Math.trunc((precio+garantia.G24)/cuota)
        

        document.getElementById("pValorCuotas1").textContent= "$"+cuota60.toString()
        document.getElementById("pValorCuotas2").textContent= "$"+cuota48.toString()
        document.getElementById("pValorCuotas3").textContent= "$"+cuota36.toString()
        document.getElementById("pValorCuotas4").textContent= "$"+cuota24.toString()


        bandera=1
    }
    
   
  })
  if (bandera===0)
  {
    alert("No se encontró el EAN")
  }
  else
  {

    cargarDiv()
  }
  
  
}





