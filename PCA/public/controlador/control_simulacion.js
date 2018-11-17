var tiempoM = 7000;
var aux = 0;
var simularProceso = function(movimientos,subProcesos){
  var mover = 0;
  var subP = 0;
  
  setTimeout(function(){ 
    for (let i = 0; i < movimientos.length; i++) {
       mover = movimientos[i];
       subP = "";
      if(i < subProcesos.length){
          subP  = subProcesos[i];
      }
   
      
        realizarMovimiento(mover,subP);
        aux = aux+1;
    }
  },tiempoM*aux);
}

function realizarMovimiento(mov,subP){
    switch (mov) {
      case 1:mover(-45,150,1,subP);
        break;
      case 2:mover(190,150,2,subP);
        break;
      case 3:mover(75,230,3,subP);
        break;
      case 4:mover(-45,390,4,subP);
        break;
      case 5:mover(190,390,5,subP);
        break;
      case 6:mover(75,470,6,subP);
        break;
      case 7:mover(554,0,7,subP);
        break;
      case 8:mover(775,0,8,subP);
        break;
      case 9:mover(665,80,9,subP);
        break;
      case 10:mover(554,230,10,subP);
        break;
      case 11:mover(665,230,11,subP);
        break;
      default:mover(190,150,2,subP);
        break;
    }
}

function demandar(demandante){
  var tiempo = 7000;

  setTimeout(function(){  proceso1(demandante) }, 0);
  setTimeout(function(){  proceso2(demandante) }, tiempo*1);
  setTimeout(function(){  proceso3(demandante)}, tiempo*2);
  setTimeout(function(){  proceso4(demandante)}, tiempo*3);
  setTimeout(function(){  proceso5(demandante)}, tiempo*4);
  setTimeout(function(){  proceso6(demandante)}, tiempo*5);
  setTimeout(function(){  proceso7(demandante)}, tiempo*6);
  setTimeout(function(){  proceso8(demandante)}, tiempo*7);
  setTimeout(function(){  proceso9(demandante)}, tiempo*8);
  setTimeout(function(){  proceso10(demandante)}, tiempo*9);
  setTimeout(function(){  proceso11(demandante)}, tiempo*10);
  setTimeout(function(){  salida(demandante)}, tiempo*11);
}

function mover(x,y,pros,subP){
  var proceso = $('.dot-'+pros);
  var demandante = $('.cuadrado');
  sobrePoner(proceso,demandante);
  setTimeout(function(){
    if(pros != 0){
    $("#proceso"+pros).mouseover();
    if(subP != "")
    $("."+subP).show();
  }}, 7000);
  
  $('.cuadrado').animate({left:""+ x+"px",top:""+y+"px"},6000);
 

  
}

function mov(demandante,x,y,pros){
    demandante.animate({left:""+ x+"px",top:""+y+"px"},6000);
    setTimeout(function(){ subProcesos(pros); }, 7000);

    
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

//demanda
function proceso1(demandante){
    var proceso = $('.dot-1');
    sobrePoner(proceso,demandante);
    mover(demandante,-45,150,1);
}

function proceso2(demandante){
  var proceso = $('.dot-2');
  sobrePoner(proceso,demandante);
  mover(demandante,190,150,2);
}

function proceso3(demandante){
  var proceso = $('.dot-3');
  sobrePoner(proceso,demandante);
  mover(demandante,75,230,3);
}

//TRAMITE DE LA VIA ORDINARIA
function proceso4(demandante){
  var proceso = $('.dot-4');
  sobrePoner(proceso,demandante);
  mover(demandante,-45,390,4);
}

function proceso5(demandante){
  var proceso = $('.dot-5');
  sobrePoner(proceso,demandante);
  mover(demandante,190,390,5);
}

function proceso6(demandante){
  var proceso = $('.dot-6');
  sobrePoner(proceso,demandante);
  mover(demandante,75,470,6);
}

//AUDIENCIA
function proceso7(demandante){
  var proceso = $('.dot-7');
  sobrePoner(proceso,demandante);
  mover(demandante,554,0,7);
}

function proceso8(demandante){
  var proceso = $('.dot-8');
  sobrePoner(proceso,demandante);
  mover(demandante,775,0,8);
}

function proceso9(demandante){
  var proceso = $('.dot-9');
  sobrePoner(proceso,demandante);
  mover(demandante,665,80,9);
}

//SENTENCIA
function proceso10(demandante){
  var proceso = $('.dot-10');
  sobrePoner(proceso,demandante);
  mover(demandante,554,230,10);
}

function proceso11(demandante){
  var proceso = $('.dot-11');
  sobrePoner(proceso,demandante);
  mover(demandante,665,230,11);
}

function salida(demandante){
  var proceso = $('.dot-20');
  sobrePoner(proceso,demandante);
  mover(demandante,1200,460,15);
}


function subProcesos(pros,subP){
  console.log(subP);
  if(pros != 0){
    $("#proceso"+pros).mouseover();
    if(subP != "")
    $("."+subP).show();
  }
    //setInterval(spop, 5000),1000;
}

function subP(pros){
  
    if(pros != 0){
      $("#proceso"+pros).mouseover();
      $(".aceptarDemanda").show();       
                
    }
    //setInterval(spop, 5000),1000;
}