
$(".cuadrado").click(function(){
  //alert('dasdasd');
  var demandante = $(this);
  var random = Math.round(Math.random()*99+1);
  demandar(demandante);
  //realizarMovimiento(demandante,700,0);
})

function demandar(demandante){
  var tiempo = 7000;

  setTimeout(function(){ proceso1(demandante) }, 0);
  setTimeout(function(){ proceso2(demandante) }, tiempo*1);
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

function mover(demandante,x,y,pros){
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


function subProcesos(pros){
  console.log(pros)
  
    
              if(pros != 0){
                $("#proceso"+pros).mouseover();
              
                
    }
    //setInterval(spop, 5000),1000;
}