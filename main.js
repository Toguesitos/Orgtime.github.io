$(document).ready(function(){
    /***** Mostrar/Ocultar menu mobil *****/
    $(".show-close-menu-m").click(function(){
      var menu=$(".navigation");
      if(menu.css("opacity")=="0"){ 
        menu.addClass("show-navigations");
        $(this).css({ "color":"#FFCA28" });
      }else{ 
        menu.removeClass("show-navigations"); 
        $(this).css({ "color":"#fff" });
      }
    });
      /***** Mostrar/ocultar mega-menu *****/
    $('.btm-mega-menu').click(function(e){
      e.preventDefault();
           var megamenu=$(".mega-menu");
           if(megamenu.css("opacity")=="0"){ 
               megamenu.addClass("show-mega-menu"); 
               $('.btm-mega-menu').css({ "color":"#FFA726" });
           }else{ 
               megamenu.removeClass("show-mega-menu");
               $('.btm-mega-menu').css({ "color":"#fff" });
           }
    });  
    /***** Abrir link en una nueva ventana *****/
    $(".open-link-newTab").click(function(e){
           e.preventDefault();
           var HrefLink=$(this).attr("href");
           window.open(HrefLink,'_blank');
    });
    /***** Moverse el la pagina institucion con Scroll *****/
      $('.scroll-navigation-ins ul li').click(function(){
          var seccion=$(this).attr('data-href');
      $('body,html').animate({
        scrollTop:$(seccion).offset().top-70
      },1000);
      return false; 
      });
    /***** boton ir arriba *****/
    $('.btn-up').click(function(){
      $('body,html').animate({scrollTop:'0px'}, 300);
    });
    /*****Mostrar y ocultar boton ir arriba *****/
    $(window).scroll(function(){
      if($(this).scrollTop() >= 500){
        $('.btn-up').fadeIn();
      }else{
        $('.btn-up').fadeOut();
      }
    });
  })


  // mapa google maps

  // Verificar si el navegador admite la geolocalización
if (navigator.geolocation) {
  // Obtener la ubicación actual del usuario
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("La geolocalización no es compatible con este navegador.");
}

// Función para mostrar la posición en el mapa
function showPosition(position) {
  // Obtener las coordenadas de latitud y longitud
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Crear una URL con las coordenadas para mostrar en Google Maps
  var mapUrl = "https://www.google.com/maps/place/Colegio+militar+coronel+Juan+Jos%C3%A9+Rond%C3%B3n/@4.7067079,-74.2074908,17z/data=!4m14!1m7!3m6!1s0x8e3f9d4e7c0971e3:0xdc75e546143f66ba!2sColegio+militar+coronel+Juan+Jos%C3%A9+Rond%C3%B3n!8m2!3d4.7067026!4d-74.2049159!16s%2Fg%2F11bwq975qj!3m5!1s0x8e3f9d4e7c0971e3:0xdc75e546143f66ba!8m2!3d4.7067026!4d-74.2049159!16s%2Fg%2F11bwq975qj?hl=es&entry=ttu";

  // Obtener el elemento del mapa por su ID
  var mapElement = document.getElementById("mapa-ins");

  // Establecer el atributo src del iframe para mostrar el mapa de Google
  mapElement.innerHTML = "<iframe width='100%' height='500px' frameborder='0' style='border:0' src='" + mapUrl + "' allowfullscreen></iframe>";
}
