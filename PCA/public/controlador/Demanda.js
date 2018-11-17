$('.prueba').click(function() {
    demanda(true);
})

function demanda(simular){
    var tiempo = Array();
    var subProceso = Array();
    var movimiento = Array();
    var nroAleatoreo = generadorMixto(2);
    var dias = generadorMixto(10);
    movimiento.push(1);//MOVER PARA PRESENTAR DEMANDA
    movimiento.push(2);//MOVER A LA REVICION DE DEMANDA
    if(nroAleatoreo < 2){
        tiempo.push({'tiempoDemanda':dias});
        subProceso.push("aceptarDemanda");
        contestacion(tiempo,simular);
        movimiento.push(3);
        subProceso.push("notificar");
    }else{
        subProceso.push("subsanacionD");
        var subSanacion = generadorMixto(6);
        if(subSanacion <= 3){
            dias = dias + subSanacion;
            tiempo.push({'tiempoDemanda':dias});
            subProceso.push("aceptarSubD");
            movimiento.push(3);//SE REALIZA EL MOVIMIENTO PARA NOTIFICAR
            subProceso.push("notificar");
        }else{
            tiempo.push({'tiempoDemanda':dias});
            movimiento.push(22);//SE REALIZA EL MOVIMIENTO PARA SALIR DEL PROCESO
        }
    }
    
    if(simular){
        simularProceso(movimiento,subProceso);
    }
}