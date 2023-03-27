

let GE24, GE36, GE48, GE60;

const path='./scr/garantia.json';
let x = document.getElementById('div1');
let y = document.getElementById('divImagen');
x.style.visibility='hidden'



async function getGarantia() {
  //let url = './scr/garantia.json';
  let url="https://raw.githubusercontent.com/DiegoDelgado82/serviciotecnico/main/garantia.json"
             
  try {
      let res = await fetch(url);
      return await res.json();
      
  } catch (error) {
      console.log(error);
  }
}

function cargarDiv()
{
    document.getElementById("tituloGE").textContent="Garantía Extendida"
    document.getElementById("pCuotas60").textContent=document.getElementById("inpCuota").value +" Cuotas" 
    document.getElementById("pCuotas48").textContent=document.getElementById("inpCuota").value +" Cuotas" 
    document.getElementById("pCuotas36").textContent=document.getElementById("inpCuota").value +" Cuotas" 
    document.getElementById("pCuotas24").textContent=document.getElementById("inpCuota").value +" Cuotas" 
    document.getElementById("pCuotas0").textContent=document.getElementById("inpCuota").value +" Cuotas" 
    
       if(x.style.visibility==="visible")
       {
        document.getElementById("inpEan").value=""
        document.getElementById("inpPrecio").value=""
        document.getElementById("inpCuota").value=1
        document.getElementById("pDescripcion").textContent=""
        document.getElementById("inpEan").focus();   
        x.style.visibility="hidden"
        y.style.visibility="visible"
        document.getElementById("pCuotas60").style.visibility="hidden"
        document.getElementById("pCuotas48").style.visibility="hidden"
        document.getElementById("pCuotas36").style.visibility="hidden"
        document.getElementById("pCuotas24").style.visibility="hidden"
        document.getElementById("pCuotas0").style.visibility="hidden"
        document.getElementById("pValorCuotas60").style.visibility="hidden"
        document.getElementById("pValorCuotas48").style.visibility="hidden"
        document.getElementById("pValorCuotas36").style.visibility="hidden"
        document.getElementById("pValorCuotas24").style.visibility="hidden"
        document.getElementById("pValorCuotas0").style.visibility="hidden"
        document.getElementById("pCantidadMeses60").style.visibility="hidden"
        document.getElementById("pCantidadMeses48").style.visibility="hidden"
        document.getElementById("pCantidadMeses36").style.visibility="hidden"
        document.getElementById("pCantidadMeses24").style.visibility="hidden"


       }
       else
       {
        
        y.style.visibility="hidden"
        x.style.visibility="visible"
        

       } 

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

                    cuota0="$"+Math.trunc(precio/cuota).toString()
                    
                    document.getElementById("pDescripcion").textContent=garantia.DESCRIPCION
                    if (GE60===0)
                    {
                        cuota60="-"
                    }
                    else
                    {
                        cuota60="$"+Math.trunc((precio+GE60)/cuota).toString()
                        
                    }

                    if (GE48===0)
                    {
                        cuota48="-"
                    }
                    else
                    {
                        cuota48="$"+Math.trunc((precio+GE48)/cuota).toString()
                        
                    }
                    
                    if (GE36===014)
                    {
                        cuota36="-"
                    }
                    else
                    {
                        cuota36="$"+Math.trunc((precio+GE36)/cuota).toString()
                        
                    }
                    if (GE24===0)
                    {
                        cuota24="-"
                    }
                    else
                    {
                        cuota24="$"+Math.trunc((precio+GE24)/cuota).toString()
                        
                    }
                    
                    
                   
                    document.getElementById("pValorCuotas60").textContent=cuota60
                    document.getElementById("pValorCuotas48").textContent=cuota48
                    document.getElementById("pValorCuotas36").textContent=cuota36
                    document.getElementById("pValorCuotas24").textContent=cuota24
                    document.getElementById("pValorCuotas0").textContent=cuota0
                    document.getElementById("pCuotas60").style.visibility="visible"
                    document.getElementById("pCuotas48").style.visibility="visible"
                    document.getElementById("pCuotas36").style.visibility="visible"
                    document.getElementById("pCuotas24").style.visibility="visible"
                    document.getElementById("pCuotas0").style.visibility="visible"
                    document.getElementById("pValorCuotas60").style.visibility="visible"
                    document.getElementById("pValorCuotas48").style.visibility="visible"
                    document.getElementById("pValorCuotas36").style.visibility="visible"
                    document.getElementById("pValorCuotas24").style.visibility="visible"
                    document.getElementById("pValorCuotas0").style.visibility="visible"
                    document.getElementById("pCantidadMeses60").style.visibility="visible"
                    document.getElementById("pCantidadMeses48").style.visibility="visible"
                    document.getElementById("pCantidadMeses36").style.visibility="visible"
                    document.getElementById("pCantidadMeses24").style.visibility="visible"
                    
                

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
                document.getElementById("tituloGE").textContent="La mejor Inversión"
            }
  
        }
    else
        {
            alert("Faltan cargar datos")        
        }
}



async function mostarMontoGE()
{
    alert("garantía 24: $"+GE24 + "\ngarantía 36: $"+GE36 + "\ngarantía 48: $"+GE48 + "\ngarantía 60: $"+GE60)
    
}

async function ocultarOpcionGe(ge)

{
    if (document.getElementById("pCuotas"+ge.toString()).style.visibility!="hidden")
    {
        document.getElementById("pCuotas"+ge.toString()).style.visibility="hidden"
    }
    else
    {
        document.getElementById("pCuotas"+ge.toString()).style.visibility="visible"
    }

    if(document.getElementById("pValorCuotas"+ge.toString()).style.visibility!="hidden")
    {
        document.getElementById("pValorCuotas"+ge.toString()).style.visibility="hidden"
    }
    else{
        document.getElementById("pValorCuotas"+ge.toString()).style.visibility="visible"
    }


    if(document.getElementById("pCantidadMeses"+ge.toString()).style.visibility!="hidden")
    {
        document.getElementById("pCantidadMeses"+ge.toString()).style.visibility="hidden"
        
    }
    else
    {
        document.getElementById("pCantidadMeses"+ge.toString()).style.visibility="visible"
    }
    
    

}

