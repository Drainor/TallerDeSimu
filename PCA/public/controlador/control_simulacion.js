var tiempo = 7000;
var aux = 0;
var simularProceso = function(procesos){
   reiniciar();
   for (let i = 0; i < procesos.length; i++) {
    console.log(procesos[i].subProceso);
    realizarMovimiento(procesos[i].proceso,procesos[i].subProceso);
    aux=aux+1;
   }
}

function realizarMovimiento(mov,subP){
  
    switch (mov) {
      case 1:setTimeout(function(){mover(-45,150,1,subP);}, tiempo*aux);
        break;
      case 2:setTimeout(function(){mover(190,150,2,subP);}, tiempo*aux);
        break;
      case 3:setTimeout(function(){mover(75,230,3,subP);}, tiempo*aux);
        break;
      case 4:setTimeout(function(){mover(-45,390,4,subP);}, tiempo*aux);
        break;
      case 5:setTimeout(function(){mover(190,390,5,subP);}, tiempo*aux);
        break;
      case 6:setTimeout(function(){mover(75,470,6,subP);}, tiempo*aux);
        break;
      case 7:setTimeout(function(){mover(554,0,7,subP);}, tiempo*aux);
        break;
      case 8:setTimeout(function(){mover(775,0,8,subP);}, tiempo*aux);
        break;
      case 9:setTimeout(function(){mover(665,80,9,subP);}, tiempo*aux);
        break;
      case 10:setTimeout(function(){mover(554,230,10,subP);}, tiempo*aux);
        break;
      case 11:setTimeout(function(){mover(665,230,11,subP);}, tiempo*aux);
        break;
      case 12:setTimeout(function(){mover(665,230,12,subP);}, tiempo*aux);
        break;
      case 13:setTimeout(function(){mover(665,230,13,subP);}, tiempo*aux);
        break;
      case 14:setTimeout(function(){mover(665,230,14,subP);}, tiempo*aux);
        break;
      case 0:setTimeout(function(){mover(1200,460,20,subP);}, tiempo*aux);
        break;
    }
}



function mover(x,y,pros,subP){
  var proceso = $('.dot-'+pros);
  var demandante = $('.cuadrado');
  sobrePoner(proceso,demandante);
  $('.cuadrado').animate({left:""+ x+"px",top:""+y+"px"},6000);
  setTimeout(function(){ subProcesos(pros,subP); }, 7000);
}

function reiniciar() {
  $('.cuadrado').animate({left:""+ 0+"px",top:""+0+"px"},500);
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


function subProcesos(pros,subP){
    console.log(aux);
    //$("#proceso"+pros).removeClass("smallipop-initialized");
    $("#proceso"+pros).smallipop({theme: 'black'}, contenido(subP));
    $("#proceso"+pros).smallipop('update', contenido(subP));

  if(pros != 0){
  $("#proceso"+pros).mouseover();
  }
    //setInterval(spop, 5000),1000;*/
}

function contenido(subP){
   return     "<div class='col-sm-12'>"+
                "<img src='images/animated-judge-image-0041-tiny.gif' alt='Flying screens' style='float:left; margin:0 15px 20px 0' />"+
                "<h3>Subprocesos</h3><br><br>"+
                "<div>"+
                "<b>"+ subP +"</b><br>"+
                "</div>"+
                "<a href='release-notes'>Continúa el proceso...</a>"+
              "</div>"
}

