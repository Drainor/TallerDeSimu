var procesoDemanda;//ARREGLO DE PROCESOS QUE MADARE AL COMTROL_SIMULACION
$('.prueba').click(function() {
    demanda(true);
})

function demanda(simular){
    procesoDemanda = Array();//inicializo el arreglo
    var notificar = true;//inicializo la notifivicacion
    var tiempo = Array();
    var nroAleatoreo = generadorMixto(2);
    var dias = generadorMixto(10);
    agregarProceso(1,'Se presenta la demanda deacuerdo a lo q señala el Art.110 CPC');
    var subP2 = "";
    if(nroAleatoreo < 2){
        tiempo.push({'tiempoDemanda':dias});
        subP2 += "se acepta La demanda";
        agregarProceso(2,subP2);
        agregarProceso(3,'Notificar al Demandado');
    }else{
        subP2 += "Se rechaza la demanda <br>"
        subP2 += "Se realiza la subsanacion de la demanda, plazo 3 dias<br>";
        var subSanacion = generadorMixto(6);
        if(subSanacion <= 3){
            dias = dias + subSanacion;
            tiempo.push({'tiempoDemanda':dias});
            subP2 += "Se completo la subsanacion en "+subSanacion +" dia(s)<br>";
            subP2 += "Se acepta la Demanda <br>";
            agregarProceso(2,subP2);
            agregarProceso(3,'se notifica al Demandado');
        }else{
            tiempo.push({'tiempoDemanda':dias});
            subP2 += "No se pudo subsanar la demanda ya que el demandande tardo"+subSanacion+" dias<br>";
            subP2 +="Se rechaza la demanda por completo<br>";
            subP2 += "Se da fin al Proceso<br>";
            agregarProceso(2,subP2);
            agregarProceso(0,"");//proceso SALIR 
            notificar = false;//cancelo la notificacion
        }
    }
    
    if(simular){
        simularProceso(procesoDemanda);
    }
    if(notificar){
        //contestacion(tiempo,simular);
    }
}

function agregarProceso(proc,subProc){
    procesoDemanda.push({'proceso':proc,'subProceso':subProc});
}