var aux=[''], texto

  
  
    

var bandx, bandera, contenido, MarcaElegida, ProductoElegido, contador, texto, web, email, telefono1, telefono2, pagina
var ArrayProducto=[]
bandera=0

pagina=""

// funcion nueva


async function getMarcs() {
  let url = 'https://raw.githubusercontent.com/DiegoDelgado82/serviciotecnico/main/st.json';
             
  try {
      let res = await fetch(url);
      return await res.json();
      
  } catch (error) {
      console.log(error);
  }
}

async function renderMarcs() {
  let users = await getMarcs();
 
  
  var ddlx = document.getElementById("ddlMarca");
  var xIndex=0;
  var auxMarcas=[];
  removeOptions(ddlx)
  users.forEach(user => {
  auxMarcas[xIndex]=user.MARCA;
  xIndex++;

  
  });

  for(var xvid=0; xvid<auxMarcas.length;xvid++)
  {
    bandx=0;
      if(xvid==0)
        {
          aux[0]=auxMarcas[xvid]
          
        }
      else
        {
          for(var hx=0;hx<auxMarcas.length;hx++)
            {
              if(aux[hx]==auxMarcas[xvid])
                 {
                  bandx=1
                 }
            }
          if(bandx==0)
            {
              aux.push(auxMarcas[xvid]);
               bandx=0
            }
          else
            {
              bandx=0
            }
  }
}
  for(var jx=0;jx<aux.length;jx++) 
  {       
      var option = document.createElement("OPTION");
      option.innerHTML = aux[jx];
      ddlx.options.add(option);
  }

}

renderMarcs();



async function Add() {
  let users = await getMarcs();
  let html = '';
  var ddlx = document.getElementById("ddlCategoria");
  removeOptions(ddlx)
  users.forEach(user => {
    
    if(user.MARCA===document.getElementById("ddlMarca").value)
    {
        var option = document.createElement("OPTION");
        option.innerHTML = user.CATEGORIA;
        ddlx.options.add(option);
    }
      
  });
   
}

Add();









function removeOptions(ddl)
{
  
  var j, L =document.getElementById("ddlCategoria").options.length - 1;
  for(j = L; j >= 0; j--) 
  {
    
    ddl.remove(j);
  }
}


function copiarAlPortapapeles() {
console.log(document.getElementById("ddlMarca").value)
console.log(document.getElementById("ddlCategoria").value)
if (document.getElementById("ddlMarca").value !=="" && document.getElementById("ddlCategoria").value!=="" && bandera!==0)
{
 
  // Crea un campo de texto "oculto"
  var aux = document.createElement("input");

  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", texto);

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);
  alert("Se copiaron los datos al portapapeles")
  
}
else
{
  alert("Debe cargar Marca y Producto. Luego presionar Buscar")
}

}
/*const [dropdown, setDropdown]=useState(false);
    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);

    }*/





function CargarMarca(Marca) {
  MarcaElegida=Marca
  document.getElementById("TituloMarca").textContent="RESULTADO PARA "+Marca
  
 
}




function NuevaBusqueda() {
  /*document.getElementById("TituloProducto").textContent=""
  document.getElementById("TituloMarca").textContent=""
  document.getElementById("DatoWeb").textContent=""
  document.getElementById("DatoEmail").textContent=""
  document.getElementById("DatoTelefono1").textContent=""
  document.getElementById("DatoTelefono2").textContent=""
*/

  
 }



 async function renderBuscar() {
  let users = await getMarcs();
 
  users.forEach(user => {
  
    
  if (user.MARCA=== document.getElementById("ddlMarca").value && user.CATEGORIA=== document.getElementById("ddlCategoria").value)
  {
    document.getElementById("DatoWeb").textContent=user.WEB
    document.getElementById("DatoWeb").setAttribute("href", user.WEB);
   
    document.getElementById("DatoEmail").textContent=user.CORREO
    document.getElementById("DatoTelefono1").textContent=user.TELEFONO
    document.getElementById("DatoTelefono2").textContent=user.TELEFONO2
    bandera=1;


    if (user.WEB!="-")
    {
      texto="Dirección Web: "+user.WEB
      if(user.CORREO!="-")
      {
        texto="Dirección Web: "+user.WEB + "\n Email: "+ user.CORREO
        if(user.TELEFONO!="-")
        {
          texto="Dirección Web: "+user.WEB + " Email: "+ user.CORREO+" Teléfono: "+user.TELEFONO
          if(user.TELEFONO2!="-")
          {
            texto="Dirección Web: "+user.WEB + " Email: "+ user.CORREO+" Telefono1: "+user.TELEFONO+" Telefono2: "+user.TELEFONO2
  
          }
        }
  
      }
      else
      {
        if(user.TELEFONO!="-")
        {
          texto="Dirección Web: "+user.WEB + " Teléfono: "+user.TELEFONO
          if(user.TELEFONO2!="-")
          {
            texto="Dirección Web: "+user.WEB + " Teléfono1 : "+user.TELEFONO+" Teléfono2: "+user.TELEFONO2
          }
        }
        else
        {
          if(user.TELEFONO2!="-")
          {
            texto="Dirección Web: "+ user.WEB + " Teléfono: "+user.TELEFONO2
          }
  
        }
  
      }
    }
    


    
  }

  
  



  
  });

  

}

renderBuscar();

function borrarDatos()
{
  document.getElementById("DatoWeb").textContent=""
    document.getElementById("DatoWeb").setAttribute("href", "");
   
    document.getElementById("DatoEmail").textContent=""
    document.getElementById("DatoTelefono1").textContent=""
    document.getElementById("DatoTelefono2").textContent=""
}


