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
        Promedio Promedio de Proceso Demanda (Dias):
      </div>
      <input class="form-control" id="lambda" type="text" value="0.1"/>
      <div>
        Tiempo Promedio de Proceso Tramite (dias):
      </div>
      <input class="form-control" id="mu" type="text" value="30"/>
      <div>
        Tiempo Promedio de Proceso Audiencia:
      </div>
      <input class="form-control" id="time" type="text" value="480"/>
      <div>
        Numero de corridas:
      </div>
      <input class="form-control" id="rounds" type="text" value="10"/>
      <div>
      Distribucion del tiempo entre llegadas:
      </div>
      <select id="distrib" onchange="onDistributionValueChanged()">
          <option value="exponencial">Poisson</option>
          <!--<option value="deterministico">Determinístico</option>
          <option value="uniforme">Uniforme</option>-->
      </select>
      <div class="form-group">
      <div class="btn btn-block btn-primary" id="simulate">
        Simular
      </div>
      </div>
      <a class="btn btn-block btn-success" id="simularAnimacion">
          Simular Animacion
      </a>
      <!-- <div class="btn btn-block btn-info" data-toggle="modal" href="#myModal" role="button">
        About
      </div> -->
      <div class="btn btn-block" id="reset">
        Reset
      </div>
    </div>
    <!-- pad nav-->
  </div>
<!-- </div> -->
<!-- end span3 -->
