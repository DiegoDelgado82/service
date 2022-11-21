async function getStore() {
    let url = 'https://raw.githubusercontent.com/DiegoDelgado82/serviciotecnico/main/tiendas.json';
               
    try {
        let res = await fetch(url);
        return await res.json();
        
    } catch (error) {
        console.log(error);
    }
  }

  async function renderStore(sto) {
    document.getElementById("datosTiendaMapa").innerHTML=""
    let tiendas = await getStore();
    let leyenda="<h3>"+sto+"</h3><br>";
    var xIndex=0;
    var stores=[];
    var provinces=[];

    tiendas.forEach(tiendas => {
    if (tiendas.Provincia===sto)
        {
            stores[xIndex]=tiendas.Nombre;
            leyenda= leyenda+'<li  onclick=datosTienda('+tiendas.Nro+') class="listStore">'+stores[xIndex]+'</li> '  
            xIndex++;
        }

    
      
    });
    document.getElementById("demo").innerHTML =leyenda+ "</ul>"
    
  
  }
  
  //renderStore();
  
 
  async function datosTienda(nro) {
    
    let tiendas = await getStore();
    let leyenda="<h3>"+nro+"</h3><br>";
    var xIndex=0;
    var stores=[];
    var provinces=[];

    tiendas.forEach(tiendas => {
       
    if (Number(tiendas.Nro)===nro)
        {
            stores[xIndex]=tiendas.Nombre;
            xIndex++;
            document.getElementById("datosTienda").innerHTML= "<h4>Datos de la tienda "+tiendas.Nro+"-"+tiendas.Nombre+"</h4><ul><li>Dirección: "+tiendas.Direccion+ 
            "</li><li>Provincia: "+ tiendas.Provincia+"</li><li>Localidad:"+tiendas.Localidad+"</li><li>Telefono: "+tiendas.Telefono + 
            "</li><li>Líder de Tienda: "+tiendas.Lider+" </li> </ul>";
            

        }


    
      
    });
    
  
  }
