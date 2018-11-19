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
            subP2 += "No se pudo subsanar la demanda ya que el demandande tardo "+subSanacion+" dias<br>";
            subP2 +="Se rechaza la demanda por completo<br>";
            subP2 += "Se da fin al Proceso<br>";
            agregarProceso(2,subP2);
            agregarProceso(0,"");//proceso SALIR 
            finalizarProceso(tiempo,simular);
            notificar = false;//cancelo la notificacion
        }
    }
    
    if(notificar){
        contestacion(tiempo,simular);
    }
}

function contestacion(tiempo,simular){
   
    var diasTotal = 0;
    var contestar = false;
    var subProc = "";
    let i = 1;
    while(!contestar && i <= 3){
        agregarProceso(4,"El demandado recibe la notificacion<br>El demandado tiene un plazo de 15 dias para contestar la notificacion");
        contDemanda = generadorMixto(10);
        if(contestar <= 5){
            dias = generadorMixto(15);
            diasTotal +=dias;
            contestar = true;
            subProc += "El demandado contesta la demanda pasado "+ dias+"dia(s) de haber resivido la notificacion<br>";
            tiempo.push({'tiempoContestacion':diasTotal})
            tiempoContestacion = generadorMixto(2);
            if(tiempoContestacion == 1){
                subProc += "El demandado se presenta y contesta mediante el documento de contestacion<br>";
                agregarProceso(5,subProc);
                agregarProceso(6,"el demandado acepta todos los cargos presentes en la demanda<br> Se da fin al proceso",1);
                agregarProceso(0,"");
                finalizarProceso(tiempo,simular);
            }else{
                subProc += "El demandado se presenta, comparece pero no hace el documento de contestacion<br>";
                agregarProceso(5,subProc);
                agregarProceso(6,"El demandado no esta deacuerdo de lo que se lo demanda<br>El demandado realiza una contra demanda contra el demandante<br>",1);
                tramites(tiempo,simular);
            }
           
            
        }else{
            diasTotal += 15;
            agregarProceso(5,"pasado los 15 dias el demandado no contesta la demanda");
            agregarProceso(3,"Se notifica de nuevo  al Demandado, notificacion nro "+(i+1));
        }
        i++;
    }
    if(!contestar){
        var proc = "demandado No contesto la demanda de haber sido notificado en tres ocaciones<br>";
        proc += "El demandado es conciderado como rebelde y no es tomado encuenta<br>";
        proc += "Se procede a dictar la sentencia<br>";
        agregarProceso(6,proc);
        sentencia(tiempo,simular);

    }

    if(simular){
        simularProceso(procesoDemanda);
    }
}

function tramites(tiempo,simular){

}

function audiencia(tiempo,simular){
    
}

function sentencia(tiempo,simular){
    
}

function finalizarProceso(tiempo,simular){
    
}
function agregarProceso(proc,subProc,recurso){
    procesoDemanda.push({'proceso':proc,'subProceso':subProc,'recurso':recurso});
}

