var tiempo = 0;
var espera = 0;
var corridas = 1;
var procesoDemanda;//ARREGLO DE PROCESOS QUE MADARE AL COMTROL_SIMULACION
var nuevaDemanda = function () {
    demanda(true);
};

$('#simularAnimacion').click(function() {

        demanda(true);
    

  
})

function demanda(simular){
    procesoDemanda = Array();//inicializo el arreglo
    var notificar = true;//inicializo la notifivicacion
    var tiempo = Array();
    var nroAleatoreo = generadorMixto(2);
    var dias = generadorMixto(2);
    agregarProceso(1,'Se presenta la demanda de acuerdo a lo que señala el Art.110 CPC',"",dias);
    var subP2 = "";
    dias = generadorMixto(10);
    subP2 += "Se realiza la revision de la demanda en un tiempo de "+dias+" dias <br>";
    if(nroAleatoreo < 2){
        //tiempo.push({'tiempoDemanda':dias});
        subP2 += "Se acepta la demanda en dias";
        agregarProceso(2,subP2,"",dias);
        agregarProceso(3,'Se notifica al demandado',"",1);
    }else{
        subP2 += "Se rechaza la demanda <br>"
        subP2 += "Se realiza la subsanacion de la demanda, plazo 3 dias<br>";
        var subSanacion = generadorMixto(6);
        if(subSanacion <= 3){
            dias = dias + subSanacion;
            tiempo.push({'tiempoDemanda':dias});
            subP2 += "Se completo la subsanacion en "+subSanacion +" dia(s)<br>";
            subP2 += "Se acepta la demanda <br>";
            agregarProceso(2,subP2,"",subSanacion);
            agregarProceso(3,'Se notifica al Demandado',"",1);
        }else{
            tiempo.push({'tiempoDemanda':dias});
            subP2 += "No se pudo subsanar la demanda ya que el demandande tardo "+subSanacion+" dias<br>";
            subP2 +="Se rechaza la demanda por completo<br>";
            subP2 += "Se da fin al Proceso<br>";
            agregarProceso(2,subP2,"",subSanacion);
            agregarProceso(0,"",0);//proceso SALIR 
            finalizarProceso(tiempo,simular);
            notificar = false;//cancelo la notificacion
        }
    }
    
    if(notificar){
        contestacion(tiempo,simular);
    }
}

function contestacion(tiempo,simular){
   var dias = 0;
    var diasTotal = 0;
    var contestar = false;
    var subProc = "";
    let i = 1;
    while(!contestar && i < 3){
        agregarProceso(4,"El demandado recibe la notificacion<br>El demandado tiene un plazo de 15 dias para contestar la notificacion","",0);
        contDemanda = generadorMixto(10);
        if(contDemanda <= 5){
            dias = generadorMixto(15);
            diasTotal +=dias;
            contestar = true;
            subProc += "El demandado contesta la demanda pasado "+ dias+" dia(s) de haber recibido la notificacion<br>";
            tiempo.push({'tiempoContestacion':diasTotal})
            tipoContestacion = generadorMixto(2);
            if(tipoContestacion == 1){
                subProc += "El demandado se presenta y contesta mediante el documento de contestacion<br>";
                agregarProceso(5,subProc,"",dias);
                agregarProceso(6,"el demandado acepta todos los cargos presentes en la demanda<br> Se da fin al proceso",1,0);
                agregarProceso(0,"","",0);
                finalizarProceso(tiempo,simular);
            }else{
                subProc += "El demandado se presenta, comparece pero no hace el documento de contestacion<br>";
                agregarProceso(5,subProc,"",dias);
                agregarProceso(6,"El demandado no esta de acuerdo con la demanda<br>El demandado realiza una contra demanda<br>",1,0);
                tramites(tiempo,simular);
            }
           
            
        }else{
            diasTotal += 15;
            agregarProceso(5,"Pasado los 15 dias el demandado no contesta la demanda","",15);
            agregarProceso(3,"Se notifica de nuevo  al demandado, con una notificacion nro "+(i+1),"",0);
        }
        i++;
    }
    if(!contestar){
        var proc = "Demandado no contesto la demanda de haber sido notificado en tres ocaciones<br>";
        proc += "El demandado se considera en rebeldia y no es tomado en cuenta<br>";
        proc += "Se procede a dictar la sentencia<br>";
        tiempo.push({'tiempoContestacion':diasTotal});
        agregarProceso(6,proc,"",0);
        sentencia(tiempo,simular);

    }

    
}

function tramites(tiempo,simular){
    var diasTotal = 0;
    var subProc = "";
    var recurso = generadorMixto(3)+1;
    var dias = generadorMixto(10);
    diasTotal +=dias;
    subProc = "Presentacion de pruebas y requisitos en un plazo maximo de 10 dias<br>";
    subProc += "Se realizo la presentacion en "+dias+" dias<br>";
    agregarProceso(7,subProc,"",dias);
    cumplenR = generadorMixto(2);
    if(cumplenR < 1){
        subProc += "Se aceptan los requisitos";
        agregarProceso(9,subProc,recurso,0);
        dias = generadorMixto(8);
        diasTotal += dias;
        subProc = "Se realiza la revision y aprobacion de los tramites en un plazo maximo de 8 dias<br>";
        subProc += "Se concluye con la revision y aprobacion en "+dias+" dias<br>";
        aprobado = generadorMixto(2);
        if (aprobado < 1) {
            subProc += "Se aprobaron todos los tramites<br>";
            agregarProceso(8,subProc,"",dias);
            tiempo.push({'tiempoTramite':diasTotal});
            audiencia(tiempo,simular);
        }else{
            subProc += "Se rechazan los tramites<br>";
            subProc += "El Juez dicta Auto o reconsidera revision";
            agregarProceso(8,subProc,"",dias);
            tiempo.push({'tiempoTramite':diasTotal});
            audiencia(tiempo,simular);
            //faltaa no entiendo
        }
    }else{
        subProc += "Se rechazan los requisitos";
        subProc += "El Juez dicta Auto para sentencia";
        agregarProceso(8,subProc);
        sentencia(tiempo,simular);
    }
}

function audiencia(tiempo,simular){
    var diasTotal = 0;
    var subProc = "";
    subProc = "Audiencia Preliminar<br>";
    subProc += "Se presentan excepciones previas";
    var dias = generadorMixto(30);
    agregarProceso(10,subProc,"",dias);
    subProc = "Se reciben reclamos de terceros<br>"
    subProc += "Se realiza la validacion del proceso<br>";
    diasTotal = generadorMixto(16);
    var verificar = generadorMixto(2);
    if (verificar < 1){
        subProc += "Se rechaza la validacion del proceso";
        dias = generadorMixto(3);
        diasTotal += dias;
        subProc += "Se procede a realizar el saneamiento del proceso en un plazo de 3 dias";
        subProc += "Se completa el saneamiento en un plazo de "+dias+" dia(s)";
        subProc += "Se acepta el proceso<br>";
        agregarProceso(11,subProc,"",diasTotal);

    }else{
        subProc += "Se acepta el proceso<br>";
       agregarProceso(11,subProc,"",diasTotal);
        
    }
    dias = generadorMixto(30);
    subProc += "Convalidado el proceso se continúa con la exposición de la alegación por ambas partes<br>";
    subProc += "Se hace una promoción a la conciliación<br>";
    subProc += "Juez pide el anuncio de resolución de pruebas<br>";
    subProc += "El juez anuncia una resolución judicial y convoca a una audiencia de juicio en "+dia+" dias <br>";
    diasTotal += dia;
    agregarProceso(10,subProc,2,dias);
    subProc += "Lectura de acta de resolución de la Audiencia preliminar<br>";
    subProc += "Se hacen los alegatos iniciales<br>";
    subProc += " Se hace la práctica de pruebas<br>"
    subProc += "Se anuncian los alegatos finales<br>";
    verificar = generadorMixto(2);
    if(verificar < 2){
        subProc += "El Juez hace una resolución oral y una resolución final<br>";
        subProc += "Se procede a dictar la sentecia";
        subProcesos(11,subProc,"",0);
        tiempo.push({'tiempoAudiencia':diasTotal});
        sentencia(tiempo,simular)
    }else{
        dias = generadorMixto(30);
        subProc += "Se suspende la audiencia por "+dias+" dias para continuar con la pronunciacion de las partes<br>";
        diasTotal += dias;
        alegato = generadorMixto(2);
        if(alegato < 2){
            subProc += "Pasado el plazo procede a dictar la sentecia si las partes no presentan sus alegatos"; 
            tiempo.push({'tiempoAudiencia':diasTotal});
            subProcesos(11,subProc,"",dias);
            sentencia(tiempo,simular);
        }else{
            subProcesos(11,subProc);
            subProc = "Las partes se pronuncian y exponen sus alegatos<br>"; 
            subProc += "Una vez solucionado el conflicto, se procede a dictar sentencia<br>"; 
            subProcesos(12,subProc,"",dias);
            sentencia(tiempo,simular);
        }
        
    }
}

function sentencia(tiempo,simular){
     var subProc = ""
     var diasTotal = 0;
     var dias = generadorMixto(30);
     diasTotal += dias;
     subProc = "Pasado "+dias+" dias el Juez procede a dictar la sentencia<br>";
     subProc += "->Tipos de sentencia: <br>";
     subProc += "->Suspencion de competencia <br>";
     subProc += "->Sancion de costos y multas <br>"
     subProc += "->Pago de intereses <br>"
     subProc += "->Indemnizacion <br>"
     dias = generadorMixto(30);
     diasTotal += dias;
     subProc += "El plazo para el cumplimiento de la sentencia es de "+dias+" dias";
     agregarProceso(13,subProc,"",diasTotal);
     tiempo.push({"tiempoSentencia":diasTotal});
     cumplimento = generadorMixto(2);
     dias = generadorMixto(dias+dias);
     if(cumplimento < 2){   
         subProc = "Se cumplio con la sentencia en el plazo establecido<br>";
         subProc += "Se da fin al proceso";
         agregarProceso(14,subProc,"",dias); 
         agregarProceso(0,"","",0);
         finalizarProceso(tiempo,simularProceso);
     }else{
         subProc = "El Juez dicta sancion por incumplimiento <br>";
         subProc += "Se da fin al proceso";
         agregarProceso(14,subProc);
         agregarProceso(0,"");
         finalizarProceso(tiempo,simularProceso);
     }
}

function finalizarProceso(tiempo,simular){
    
    if(simular){
         simularProceso(procesoDemanda);
    }
    
    
}
function agregarProceso(proc,subProc,recurso,tiempo){
    procesoDemanda.push({'proceso':proc,'subProceso':subProc,'recurso':recurso,'tiempo':tiempo});
}

