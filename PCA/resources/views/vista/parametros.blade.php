<!-- <div class="span3"> -->
  <div id="sidebar">
    <div class="well">
      <!-- <em>
        Ingreso de parametros
      </em> -->
      <h4>
        Parámetros de Entrada
      </h4>
      <!-- Form -->
      <div>
        Porcentaje de presentaciones de Demandas por dia:
      </div>
      <input class="form-control" id="lambda" type="text" value="2"/>
      <div>
        Tiempo Promedio de Proceso Tramite (dias):
      </div>
      <input class="form-control" id="mu" type="text" value="30"/>
      <div>
        Tiempo Promedio de Proceso Audiencia (dias):
      </div>
      <input class="form-control" id="time" type="text" value="1"/>
      <div>
        Numero de corridas:
      </div>
      <input class="form-control nroCorridas" id="rounds" type="text" value="10"/>
      <div>
        Distribucion del tiempo entre llegadas:
      </div>
      <select id="distrib" onchange="onDistributionValueChanged()">
          <option value="exponencial">Binomial</option>
          <!--<option value="deterministico">Determinístico</option>
          <option value="uniforme">Uniforme</option>-->
      </select>
      <div class="form-group">
      <div class="btn btn-block btn-primary" id="simulate"  onclick="simulate()">
        SIMULAR
      </div>
      </div>
      <a class="btn btn-block btn-success" id="simularAnimacion">
          SIMULAR ANIMACION
      </a>
      <a class="btn btn-block btn-danger" id="pausear" >
        PAUSAR
    </a>
      <!-- <div class="btn btn-block btn-info" data-toggle="modal" href="#myModal" role="button">
        About
      </div> -->
      <div class="btn btn-block" id="reset">
        REINICIAR
      </div>
    </div>
    <!-- pad nav-->
  </div>
<!-- </div> -->
<!-- end span3 -->
