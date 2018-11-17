
  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=1">
    <link rel="icon" href={{asset("images/siadam_icon_90_alfa.png")}} type="image/x-icon" />
    <title>SiTram</title>
    <link rel="stylesheet" href={{asset('css/bootstrap.min.css')}} media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" type="text/css" href={{asset("font-awesome/css/font-awesome.min.css")}} />
    <link rel="stylesheet" type="text/css" href={{asset("estilos/estilo.css")}}/>
    <link rel="stylesheet" href={{asset("css/estilos.css")}} media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href={{asset("css/style3.css")}} media="screen" title="no title" charset="utf-8"> 
    <link rel="stylesheet" href={{asset("css/tooltip.css")}} media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href={{asset("css/jquery.smallipop.min.css")}} media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href={{asset("css/jquery-ui-1.11.2.css")}} type="text/css" media="screen" title="no title" charset="utf-8">
  </head>

  <body>
    @include('vista.header')
    @include('vista.navbar')

    <div class="col-xs-9" id="panel_central">

      <div class="tab-content">
        <div id="home" class="tab-pane fade">
          <!-- <h3>HOME</h3> -->          
        </div>
        <div id="menu1" class="tab-pane fade in active">
          <!-- <h3>Menu 1</h3> -->
          @include('vista.simulacion')
        </div>
        <div id="menu2" class="tab-pane fade">
          <h3>Menu 2</h3>
          
        </div>
        <div id="menu3" class="tab-pane fade">
          <h3>Resultados</h3>
          <p id="debug"></p>
          <div id="container" style="min-width: 600px; height: 800px; margin: 0 auto"></div>
          <div class="wall">
          <p id="results"></p>
          </div> 
        </div>
      </div>
    </div>
    <div class="col-xs-3" id="panel_resultados">
      @include('vista.parametros')   
    </div>
<!-- <script src="js/jquery-3.1.1.min.js"></script> -->
<script src={{asset("js/jquery.min.js")}}></script>
<script src={{asset("js/bootstrap.min.js")}} type="text/javascript" charset="utf-8"></script>

<!-- <script src="jquery.connectingLine.js"></script> -->
<script src={{asset("js/jquery.smallipop.min.js")}}></script>
<script src={{asset("controlador/generadorMixto.js")}} ></script>
<script src={{asset("controlador/demanda.js")}} ></script>
<script src={{asset("controlador/control_simulacion.js")}} ></script>
<script type="text/javascript" src={{asset("js/interface.js")}}></script>
<script type="text/javascript" src={{asset("js/Random.js")}}></script>
<script type="text/javascript" src={{asset("js/Queue.js")}}></script>
<!-- <script type="text/javascript" src={{asset("Highcharts/api/js/highcharts.js")}}></script> -->

<script>
      $( function() {        
        $('#proceso1').smallipop();
        $('#proceso2').smallipop();
        $('#proceso3').smallipop();
        $('#proceso4').smallipop();
        $('#proceso5').smallipop();
        $('#proceso6').smallipop();
        $('#proceso7').smallipop();
      });
  // $("#myAvatar").animate({ top: y, left: x},1200);
</script>

<script type="text/javascript">
  // var mySVG = $('body').connect();
  //   mySVG.drawLine({
  //     left_node:'#dot-0',
  //     right_node:'#dot-1',
  //     horizantal_gap:10,
  //     error:true,
  //     width:1,
  //     style:'solid'
  //   });
  //   $( "#dot-0" ).draggable({
  //     drag: function(event, ui){mySVG.redrawLines();}
  //   });
  //   $( "#dot-1" ).draggable({
  //     drag: function(event, ui){mySVG.redrawLines();}
  //   });
</script>

</body>

</html>
