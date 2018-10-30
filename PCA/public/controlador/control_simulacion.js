
$(".cuadrado").click(function(){
  //alert('dasdasd');
  var demandante = $(this);
  var random = Math.round(Math.random()*99+1);
  demandar(demandante);
  //realizarMovimiento(demandante,700,0);
})

function demandar(demandante){
  var tiempo = 8000;

  setTimeout(function(){ presentacion(demandante) }, 0);
  setTimeout(function(){ notificacion(demandante) }, tiempo);
  setTimeout(function(){  proceso3(demandante)}, tiempo*2);
  setTimeout(function(){  proceso4(demandante)}, tiempo*3);
  setTimeout(function(){  proceso5(demandante)}, tiempo*4);
  setTimeout(function(){  proceso6(demandante)}, tiempo*5);
  setTimeout(function(){  proceso7(demandante)}, tiempo*6);
  setTimeout(function(){  proceso8(demandante)}, tiempo*7);
  setTimeout(function(){  proceso9(demandante)}, tiempo*8);
  setTimeout(function(){  salida(demandante)}, tiempo*9);
}

function mover(demandante,x,y,pros){
    demandante.animate({left:""+ x+"px",top:""+y+"px"},8000);
    setTimeout(function(){ subProcesos(pros); }, 8000);

    
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

function presentacion(demandante){
    var proceso = $('.dot-1');
    sobrePoner(proceso,demandante);
    mover(demandante,-600,-250,1);
}

function notificacion(demandante){
  var proceso = $('.dot-2');
  sobrePoner(proceso,demandante);
  mover(demandante,-350,-250,2);
}

function proceso3(demandante){
  var proceso = $('.dot-3');
  sobrePoner(proceso,demandante);
  mover(demandante,-450,-150,3);
}

function proceso4(demandante){
  var proceso = $('.dot-4');
  sobrePoner(proceso,demandante);
  mover(demandante,-600,0,4);
}

function proceso5(demandante){
  var proceso = $('.dot-5');
  sobrePoner(proceso,demandante);
  mover(demandante,-300,0,5);
}

function proceso6(demandante){
  var proceso = $('.dot-6');
  sobrePoner(proceso,demandante);
  mover(demandante,-450,80,6);
}

function proceso7(demandante){
  var proceso = $('.dot-7');
  sobrePoner(proceso,demandante);
  mover(demandante,0,-250,7);
}

function proceso8(demandante){
  var proceso = $('.dot-8');
  sobrePoner(proceso,demandante);
  mover(demandante,255,-250,8);
}

function proceso9(demandante){
  var proceso = $('.dot-9');
  sobrePoner(proceso,demandante);
  mover(demandante,90,-150,9);
}

function proceso9(demandante){
  var proceso = $('.dot-9');
  sobrePoner(proceso,demandante);
  mover(demandante,90,-150,9);
}

function salida(demandante){
  var proceso = $('.dot-20');
  sobrePoner(proceso,demandante);
  mover(demandante,265,0,15);
}


function subProcesos(pros){
  console.log(pros)
  
    
              if(pros != 0){
                $("#proceso"+pros).mouseover();
              
                
    }
    //setInterval(spop, 5000),1000;
}