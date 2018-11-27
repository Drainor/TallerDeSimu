//var tiempo = 7000;
var aux = 0;
var procesos = 0;
var i = 0;
var intervalo = 0;
var nroCorridas=1;
var tiempoProceso= 0;
var cuadroTiempo = 0;
var cuadro = "";
var simularProceso = function(procesos){
    reiniciar();
    this.procesos = procesos;
    simular(i++);
    intervalo = setInterval(function(){ simular(i++)},5000);
}

/*var simularProceso = function(procesos){
   reiniciar();
   for (let i = 0; i < procesos.length; i++) {
    realizarMovimiento(procesos[i].proceso,procesos[i].subProceso,procesos[i].recurso);
    aux=aux+1;
   }
}*/
function simular(p){
  var totalCorridas = $('.nroCorridas').val();
  if(p < procesos.length){
    movimiento(p);
  }else  if(nroCorridas < totalCorridas){
    i= 0;
    nroCorridas = nroCorridas+1;
    tiempoProceso = 0;
    cuadro = "";
    clearInterval(intervalo);
    nuevaDemanda();
  }else{
    i=0;
    nroCorridas= 1;
    clearInterval(intervalo);
  }
}

function movimiento(p){
  mov = procesos[p].proceso;
  switch (mov) {
    case 1:mover(-45,150,1,p);
      break;
    case 2:mover(190,150,2,p);
      break;
    case 3:mover(75,230,3,p);
      break;
    case 4:mover(-45,390,4,p);
      break;
    case 5:mover(190,390,5,p);
      break;
    case 6:mover(75,470,6,p);
      break;
    case 7:mover(554,0,7,p);
      break;
    case 8:mover(775,0,8,p);
      break;
    case 9:mover(665,80,9,p);
      break;
    case 10:mover(554,230,10,p);
      break;
    case 11:mover(775,230,11,p);
      break;
    case 12:mover(665,310,12,p);
      break;
    case 13:mover(554,460,13,p);
      break;
    case 14:mover(665,460,14,p);
      break;
    case 0:mover(1200,550,20,p);
      break;
  }
}
/*function realizarMovimiento(mov,subP,recurso){
    switch (mov) {
      case 1:setTimeout(function(){mover(-45,150,1,subP,recurso);}, tiempo*aux);
        break;
      case 2:setTimeout(function(){mover(190,150,2,subP,recurso);}, tiempo*aux);
        break;
      case 3:setTimeout(function(){mover(75,230,3,subP,recurso);}, tiempo*aux);
        break;
      case 4:setTimeout(function(){mover(-45,390,4,subP,recurso);}, tiempo*aux);
        break;
      case 5:setTimeout(function(){mover(190,390,5,subP,recurso);}, tiempo*aux);
        break;
      case 6:setTimeout(function(){mover(75,470,6,subP,recurso);}, tiempo*aux);
        break;
      case 7:setTimeout(function(){mover(554,0,7,subP,recurso);}, tiempo*aux);
        break;
      case 8:setTimeout(function(){mover(775,0,8,subP,recurso);}, tiempo*aux);
        break;
      case 9:setTimeout(function(){mover(665,80,9,subP,recurso);}, tiempo*aux);
        break;
      case 10:setTimeout(function(){mover(554,230,10,subP,recurso);}, tiempo*aux);
        break;
      case 11:setTimeout(function(){mover(775,230,11,subP,recurso);}, tiempo*aux);
        break;
      case 12:setTimeout(function(){mover(665,310,12,subP,recurso);}, tiempo*aux);
        break;
      case 13:setTimeout(function(){mover(554,460,13,subP,recurso);}, tiempo*aux);
        break;
      case 14:setTimeout(function(){mover(665,460,14,subP,recurso);}, tiempo*aux);
        break;
      case 0:setTimeout(function(){mover(1200,550,20,subP,recurso);}, tiempo*aux);
        break;
    }
}*/


function mover(x,y,pros,p){
  var pros = procesos[p].proceso;
  var subP = procesos[p].subProceso;
  var recurso = procesos[p].recurso;
  var tiempoP = procesos[p].tiempo;
  var proceso = $('.dot-'+pros);
  var demandante = $('.cuadrado');
  sobrePoner(proceso,demandante);
  $('.cuadrado').animate({left:""+ x+"px",top:""+y+"px"},3000);
  setTimeout(function(){ subProcesos(pros,subP,recurso,tiempoP); },3000);
}

/*function mover(x,y,pros,subP,recurso){
  var proceso = $('.dot-'+pros);
  var demandante = $('.cuadrado');
  sobrePoner(proceso,demandante);
  $('.cuadrado').animate({left:""+ x+"px",top:""+y+"px"},tiempo - 3000);
  setTimeout(function(){ subProcesos(pros,subP,recurso); },tiempo - 3000);
}*/

function reiniciar() {
  $('.cuadrado').animate({left:""+ 0+"px",top:""+0+"px"},500);
  for (let i = 1; i <= 4; i++) {
    $("#recurso"+i).css('background', '#bea');
    
  }
  aux = 0;
}

function sobrePoner(div,dem){
  div.css('position', 'absolute');
        div.css({
          left:dem,
          top:dem,
            'z-index':'2'

        });
        dem.css({
            'z-index':'2'

        });
}


function subProcesos(pros,subP,recurso,tiempoP){
    reiniciarRecursos();
    //$("#proceso"+pros).removeClass("smallipop-initialized");
    $("#proceso"+pros).smallipop({theme: 'black'}, contenido(subP));
    $("#proceso"+pros).smallipop('update', contenido(subP));
    if(subP != ""){
       agregarLineaDeTiempo(subP,tiempoP);
    }
    if(recurso){
      $("#recurso"+recurso).css('background', 'red');
    }
  if(pros != 0){
  $("#proceso"+pros).mouseover();
  }
    //setInterval(spop, 5000),1000;*/
}

function contenido(subP){
   return     "<div class='col-sm-12'>"+
                "<img src='images/animated-judge-image-0041-tiny.gif' alt='Flying screens' style='float:left; margin:0 15px 20px 0' />"+
                "<h3>Subprocesos</h3><br><br>"+
                "<div style='font-size: 12px;'>"+
                "<b>"+ subP +"</b><br>"+
                "</div>"+
                "<a href='release-notes'>Continúa el proceso...</a>"+
              "</div>"
}

function agregarLineaDeTiempo(subP,tiempoP){
    $('#nroProceso').html("Proceso Nro "+nroCorridas);
    
    tiempoProceso += tiempoP;
    cuadro += 
   
      "<div class='timeline__box'>"+
        "<div class='timeline__date'>"+
          "<span class='timeline__day'>"+tiempoProceso+"</span>"+
          "<span class='timeline__month'>Dias</span>"+
        "</div>"+
        "<div class='timeline__post'>"+
          "<div class='timeline__content'>"+
            "<p>"+subP+"</p>"+
          "</div>"+
        "</div>"+
    "</div>";
    $('#lineaTiempo').html(cuadro);
}
function reiniciarRecursos(){
  for (let i = 1; i <= 4; i++) {
    $("#recurso"+i).css('background', '#bea');
    
  }
}

$('#pausear').click(function() {
  
  pauseado = $(this).prop('id');
  if(pauseado == 'Reanudar'){
    $(this).attr('id', 'Pausear');
    $(this).html('Pausear');
    if(procesos != 0){
      simular(i++)
      intervalo = setInterval(function(){simular(i++)},3000);
    }
  }else{
    if(procesos != 0){
      clearInterval(intervalo);
    }
    
    $(this).attr('id', 'Reanudar');
    $(this).html('Reanudar');
  }
})













