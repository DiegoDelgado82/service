

let GE24, GE36, GE48, GE60

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

    if(document.getElementById("inpEan").value!="" && document.getElementById("inpPrecio").value!=""  )
        {
            garantias.forEach(garantia => {

                

            if (parseInt(garantia.EAN) ===parseInt(document.getElementById("inpEan").value))
                {
                    let precio = parseInt(document.getElementById("inpPrecio").value)
                    let cuota= parseInt(document.getElementById("inpCuota").value)
                    GE24= garantia.G24
                    GE36= garantia.G36
                    GE48= garantia.G48
                    GE60= garantia.G60

                    document.getElementById("pDescripcion").textContent=garantia.DESCRIPCION
                    cuota60= Math.trunc((precio+GE60)/cuota)
                    cuota48= Math.trunc((precio+GE48)/cuota)
                    cuota36= Math.trunc((precio+GE36)/cuota)
                    cuota24= Math.trunc((precio+GE24)/cuota)
                    

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
    else
        {
            alert("Faltan cargar datos")        
        }
}



async function mostarMontoGE()
{
    alert("garant+ia 24: "+GE24 + " garantía 36: "+GE36 + " garantía 48: "+GE48 + " garantía 60: "+GE60)
    
}

