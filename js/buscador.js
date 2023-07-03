var direccion, inicio, web;
function buscarURL()
{
  
  direccion=document.getElementById("URL").value.replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20")
  
 web=document.getElementById("URL").value
   inicio="https://www.carrefour.com.ar/"+direccion+"?_q="+direccion+"&map=ft" 
  window.location.href=inicio
 
  
}