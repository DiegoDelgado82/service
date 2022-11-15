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