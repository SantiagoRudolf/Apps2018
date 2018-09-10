  
 $(document).ready(function(){

  $("#mensaje").hide();
 });
       

$(document).ready(function(){
                $("#enviar").click(function(){
        
                var nombre = $("#Nom").val();
                var fdn = $("#Fdn").val();
                var Ape = $("#Ape").val();
 
                if(nombre == ""){
                    alert("el nombre no puede estar vacio");
                    return false;
                }
                else{
                     if(Ape == ""){
                    alert("el apellido no puede estar vacio");
                    return false;
                }
 
              
                  
                    else{
 
                          if(fdn == 0){
                    alert("la fecha no puede estar vacia");
                    return false;
                }
				else{
			    var sex = $('input[name="sexo"]:checked').val()
				
					
                 if( sex == null ){
                       alert('debe completar el campo Sexo');
					   return false ;
                      }
                  else 
				  {  $("#mensaje").show(1);
                      setTimeout(function() {
				  $("#mensaje").hide();},5000);}					  
                					  
				}

                     
                    }
                }
 
            });
        });
		
		
	/*	$(document).ready(function(){
			check = $('input[name="Valoracion"]:checked').val();
					
                 if( valo == null ){
                       alert('debe completar el campo Sexo');
					   return false ;
                      }	 */
 
 
 



var map;
 
 function initialize() {
   var punto = new google.maps.LatLng( -34.906377299999996, -57.925213899999996); //ubicación Flor de jardin
   var myOptions = {
     zoom: 18, 
     center: punto,
   }
     map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 }
  
 
  
 function pedirPosicion(pos) {
   var centro = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
   map.setCenter(centro); 
   map.setMapTypeId(google.maps.MapTypeId.ROADMAP); 
 
}
 
function geolocalizame(){
navigator.geolocation.getCurrentPosition(pedirPosicion);
 }
 
 function Negocio(){
var punto = new google.maps.LatLng( -34.906377299999996, -57.925213899999996);
  map.setCenter(punto);
 }

 
 
 

 
 
/*  $(document).ready(function(){
	   var total = 0
                    $("img.articulo").click(function(){ 
					
				if ($("#menu").attr("opacity")!=0.5){
					$(this).css("opacity", 0.5);
				    
				} 
				else { 
				   $(this).css("opacity", 1);
					}
					$('#total').html(" Precio por articulo: $50 <br> <br> Total:$" )
					})}); 
					})});
					
					
					
					
					function validarForm()
{
  var Nom = document.getElementById("Nom").value.trim();
  var Ape = document.getElementById("Ape").value.trim();
  var Fecha = document.getElementById("Fdn").value;
  var Val = "ninguno"
  var porNombre=document.getElementsByName("Valoracion");
         // Recorremos todos los valores del radio button para encontrar el
         // seleccionado
         for(var i=0;i<porNombre.length;i++)
         {
             if(porNombre[i].checked)
                 Val=porNombre[i].value;
         }

     var sexo="ninguno";
     var porsexo=document.getElementsByName("sexo");
         // Recorremos todos los valores del radio button para encontrar el
         // seleccionado
         for(var i=0;i<porsexo.length;i++)
         {
             if(porsexo[i].checked)
                 sexo=porsexo[i].value;
         }

      if ( Nom.length == 0 ) {
             alert('El campo: Nombre,  debe tener contener un valor');
     return false;
       }  else if ( Ape.length == 0 ) {
         alert('El campo: Apellido, debe tener contener un valor');
         return false;
       } else if ( Fecha == null || Fecha==0 ) {
         alert('El campo: Fecha, debe tener contener un valor');
         return false;
   }  else if ( sexo == "ninguno" ) {
     alert('El campo: Sexo, debe tener contener un valor');
     return false;
   } else if ( Val == "ninguno" ) {
     alert('El campo: Valoracion, debe tener contener un valor');
     return false;
   } alert('Nombre: ' + Nom + '\n' + 'Apellido: ' + Ape + '\n' +  'Nacimiento: ' + Fecha + '\n' +  'Sexo: ' + sexo + '\n' +  'Valoracion: ' + Val);
      

 */
 
 
 window.onload = function() {
	window.parent.document.getElementById('total').innerHTML =" Precio por articulo: $50 <br><br>Total:$0" ; }

var cacheProductos=[];
var canasto=[];

function agregar(id){
var i=0;
var encontrado=false;

while((i<canasto.length)&& (!encontrado))
{
    if(canasto[i]==id)
    {	
    encontrado=true;
    }
    else
    {
    i++;
    }
}
if(encontrado){	
document.getElementById(id).style.opacity ="1";  
 canasto.splice(i,1);

}
else{
	document.getElementById(id).style.opacity ="0.5";
    var producto=cacheProductos[id];
    canasto.push(id);
	
}
 var tot = canasto.length * 50 ;
 
window.parent.document.getElementById('total').innerHTML =" Precio por articulo: $50 <br> <br> Total:$"+ tot; 

}



function Cancel(){
    if (window.confirm('¿Esta seguro que desea cancelar?')) {
      alert('Sera redirigido al HOME');
      window.location = 'principal.html'
    }
}