//Función de apertura de la caja de información o, mas precisamente, moverla de una posición en la que se encuentra oculta para poder verla.

function abrirCaja(){
  document.getElementById("tablainfo").style.left = "473px";
}

//Función para el cierre de la caja de info. La mas simple de las funciones que he hecho hasta ahora, junto con la de apertura. Igual, en su momento ha dado sus dolores de cabeza al no tener experiencia en JS.

function cerrarCaja(){
  document.getElementById("tablainfo").style.left = "865px";
}

//Función de conexión a la base de datos. Nada demasiado extraño en el sentido de que el unico problema presente es que los servidores de almacenamiento de archivos funcionan raro cuando se quiere acceder a un XML. SQL no es tenido en cuenta debido a las vulnerabilidades de JS a la hora de acceder a bases de datos. Debido a eso, me veo obligado a subir todo a un servidor de web hosting para que físicamente se encuentre todo en el mismo servidor y pueda accederse en tiempo real

function listarInfo(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarInfo(this, i);
        }
    };
    xmlhttp.open("GET", "pruebaxml.xml", true);
    xmlhttp.send();
}

//Función para el muestreo de la información por pantalla. Se encuentra acoplada a la función de conexión y se ejecuta la primera cada vez que se debe acceder a la información antes de mostrarla.

function cargarInfo(xml, i) {
  var xmlDoc = xml.responseXML; 
  x = xmlDoc.getElementsByTagName("ELEMENTO");
  document.getElementById("elementogrande").style.backgroundImage = ""url('/img/ele"+[i]+"a.png')"";
  document.getElementById("atomo").style.backgroundImage = x[i].getElementsByTagName("IMAGEN2")[0].childNodes[0].nodeValue;
  document.getElementById("elenombre").innerHTML = "Nombre: " + x[i].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue;
  document.getElementById("pesoatom").innerHTML = "Peso Atomico: " + x[i].getElementsByTagName("PESOATOM")[0].childNodes[0].nodeValue;
  document.getElementById("grupoatom").innerHTML = "Grupo Atomico: " + x[i].getElementsByTagName("GRUPOATOM")[0].childNodes[0].nodeValue;
  document.getElementById("aniodesc").innerHTML = "Año de descubrimiento: " + x[i].getElementsByTagName("ANIO")[0].childNodes[0].nodeValue;
  document.getElementById("infoatom").innerHTML = "Info: " + x[i].getElementsByTagName("INFO")[0].childNodes[0].nodeValue;
}
