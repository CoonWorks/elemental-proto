//Función de apertura de la caja de información o, mas precisamente, moverla de una posición en la que se encuentra oculta para poder verla.

function abrirCaja(){
  document.getElementById("tablainfo").style.left = "473px";
}

//Función para el cierre de la caja de info. La mas simple de las funciones que he hecho hasta ahora, junto con la de apertura. Igual, en su momento ha dado sus dolores de cabeza al no tener experiencia en JS.

function cerrarCaja(){
  document.getElementById("tablainfo").style.left = "865px";
}

function cambioMetal(){
  document.getElementById("e3").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e4").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e11").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e12").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e13").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e19").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e20").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e21").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e22").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e23").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e24").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e25").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e26").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e27").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e28").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e29").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e30").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e31").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e37").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e38").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e39").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e40").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e41").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e42").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e43").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e44").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e45").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e46").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e47").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e48").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e49").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e50").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e55").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e56").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("elem-a").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e72").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e73").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e74").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e75").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e76").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e77").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e78").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e79").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e80").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e81").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e82").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e83").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e84").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e87").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e88").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("elem-b").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e104").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e105").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e106").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e107").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e108").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e112").style.backgroundColor = "rgb(255,0,0)";
}

function cambioAlc(){
  document.getElementById("e3").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e11").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e19").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e37").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e55").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e87").style.backgroundColor = "rgb(255,0,0)";
}

function cambioTer(){
  document.getElementById("e4").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e12").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e20").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e38").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e56").style.backgroundColor = "rgb(255,0,0)";
  document.getElementById("e88").style.backgroundColor = "rgb(255,0,0)";
}

function cambioTran(){
  document.contenedor.getElementsByClassName("transicion").style.backgroundColor = "rgb(255,0,0)";
}

function cambioOmetal(){
  document.contenedor.getElementsByClassName("otrometal").style.backgroundColor = "rgb(255,0,0)";
}

function cambioMetaloide(){
  document.contenedor.getElementsByClassName("metaloide").style.backgroundColor = "rgb(255,0,0)";
}

function cambioNometal(){
  document.contenedor.getElementsByClassName("nometal").style.backgroundColor = "rgb(255,0,0)";
  document.contenedor.getElementsByClassName("hidrogeno").style.backgroundColor = "rgb(255,0,0)";
  document.contenedor.getElementsByClassName("halogeno").style.backgroundColor = "rgb(255,0,0)";
  document.contenedor.getElementsByClassName("noble").style.backgroundColor = "rgb(255,0,0)";
}

function cambioOnometal(){
  document.contenedor.getElementsByClassName("nometal").style.backgroundColor = "rgb(255,0,0)";
  document.contenedor.getElementsByClassName("hidrogeno").style.backgroundColor = "rgb(255,0,0)";
}

function cambioHalo(){
  document.contenedor.getElementsByClassName("halogeno").style.backgroundColor = "rgb(255,0,0)";
}

function cambioNob(){
  document.contenedor.getElementsByClassName("noble").style.backgroundColor = "rgb(255,0,0)";
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
  document.getElementById("elementogrande").style.background = "url('img/ele"+[i]+"a.png')";
  document.getElementById("atomo").style.background = "url('img/ele"+[i]+"b.png')";
  document.getElementById("elenombre").innerHTML = "Nombre: " + x[i].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue;
  document.getElementById("pesoatom").innerHTML = "Peso Atomico: " + x[i].getElementsByTagName("PESOATOM")[0].childNodes[0].nodeValue;
  document.getElementById("grupoatom").innerHTML = "Grupo Atomico: " + x[i].getElementsByTagName("GRUPOATOM")[0].childNodes[0].nodeValue;
  document.getElementById("aniodesc").innerHTML = "Año de descubrimiento: " + x[i].getElementsByTagName("ANIO")[0].childNodes[0].nodeValue;
  document.getElementById("infoatom").innerHTML = "Info: " + x[i].getElementsByTagName("INFO")[0].childNodes[0].nodeValue;
}
