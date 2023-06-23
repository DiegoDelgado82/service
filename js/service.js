const buscarddService = () => {
    var array = ["manzana", "banana", "naranja", "pera", "uva"];
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
  
   
    document.getElementById("results").innerHTML = "";
  
  
    array.forEach(item => {
      const lowerCaseItem = item.toLowerCase();
  
     
      if (lowerCaseItem.includes(searchValue)) {
        const li = document.createElement("li");
        li.textContent = item;
        document.getElementById("results").appendChild(li);
      }
    });
  };
  