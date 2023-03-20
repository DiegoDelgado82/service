

function buscarEan()
{
  alert("el éan solicitado es: "+document.getElementById("inpEan").value)
  renderMarcs()
}



async function getGarantia() {
  let url = './scr/garantia.json';
             
  try {
      let res = await fetch(url);
      return await res.json();
      
  } catch (error) {
      console.log(error);
  }
}

async function renderMarcs() {
  let garantias = await getGarantia();
 
  garantias.forEach(garantia => {
  alert(garantia.MARCA)
    
  })
}