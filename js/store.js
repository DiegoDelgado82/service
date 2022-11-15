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
    
    let tiendas = await getStore();
    let leyenda="<h3>"+sto+"</h3><ul>";
    var xIndex=0;
    var stores=[];
    var provinces=[];

    tiendas.forEach(tiendas => {
    if (tiendas.Provincia===sto)
        {
            stores[xIndex]=tiendas.Nombre;
            leyenda= leyenda+'<li class="listStore">'+stores[xIndex]+'</li> '  
            xIndex++;
        }

    
      
    });
    document.getElementById("demo").innerHTML =leyenda
    
  
  }
  
  //renderStore();
  