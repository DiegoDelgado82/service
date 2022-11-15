//Esta funcion permite conectar el json de los contactos


async function getContacts() {
    let url = 'https://raw.githubusercontent.com/DiegoDelgado82/serviciotecnico/main/contactsChiefs.json';
               
    try {
        let res = await fetch(url);
        return await res.json();
        
    } catch (error) {
        console.log(error);
    }
  }

  async function renderContact(sto) {
    alert(sto);
    
    let contacto = await getContacts();
   
    var xIndex=0;
    var name=[];

    contacto.forEach(contacto => {
     // Solo buscar el mismo punto      
    if (Number(contacto.Punto)===sto)
        {
           alert(contacto.Jefe);
           
            
        }
    xIndex++;

    
      
    });
    
    
  
  }
  
  //renderStore();
  

  // hacer funcion para cargar un combo con las tiendas

  // hacer funcion para mostrar los contactos de la tienda seleccionada

  async function renderLocals() {
    var ddlx = document.getElementById("Locales");
    removeOptions(ddlx)
    let local = await getContacts();
   
  
    
    local.forEach(local => {
    
        var option = document.createElement("OPTION");
        option.innerHTML = local.Punto + "-"+local.Nombre;
        ddlx.options.add(option);
   
      
    });
}


function removeOptions(ddl)
{
  
  var j, L =document.getElementById("Locales").options.length - 1;
  for(j = L; j >= 0; j--) 
  {
    
    ddl.remove(j);
  }
}


async function findLocals() {
    var localElegido = document.getElementById("Locales").value;
    let local = await getContacts();
    
    
    local.forEach(local => {
        
        if(localElegido=== local.Punto + "-"+local.Nombre)
       {
        document.getElementById("Jefe").innerHTML="<h3>"+local.Jefe+"</h3> <ul> <li><i class='fa fa-phone'></i>"+ local.Celular+"<li><i class='fa fa-envelope'></i>"+local.Mail+"<ul>"
       
        


        document.getElementById("demo").innerHTML =leyenda
       }
           
    });
}