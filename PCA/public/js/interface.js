/**
 * Created by M.R. on 14/12/2017.
 */
function onDistributionValueChanged()
{
    var distributionBox = document.getElementById("distrib");
    var distribution = distributionBox.options[distributionBox.selectedIndex].text;

    if(distribution === "Uniforme")
    {
        var valuesString = "";
        valuesString += "Min: <input id=\"uniformLow\" type=\"text\">";
        valuesString += " Max: <input id=\"uniformHigh\" type=\"text\">";
        document.getElementById("uniformValues").innerHTML = valuesString;
    }
    else
    {
        document.getElementById("uniformValues").innerHTML = "";
    }
}

function addResultTable(lambda, mu, personsServed, analyticMeanPersonsOnSystem, meanPersonsOnSystem, confidenceIntervalUpperLimit, confidenceIntervalLowerLimit, analyticUtilisation,personsOnSystemStandardDeviation)
{
  var result = "<div class='wall'> <div class='col-sm-7'><div class='panel-heading'>Resultados</div><table border='1' class='table'>";

    result+="<tr><td>&lambda;</td><td>"+lambda+"</td></tr>";
    result+="<tr><td>&mu;</td><td>"+mu+"</td></tr>";
    result+="<tr><td>Tiempo de duracion de un Proceso </td><td>"+personsServed+" dias </td></tr>";
    result+="<tr><td>Promedio de duracion de un Proceso</td><td>"+analyticMeanPersonsOnSystem+"</td></tr>";
    result+="<tr><td>Promedio de duracion de un Proceso(Simulado)</td><td>"+meanPersonsOnSystem+"</td></tr>";
    // result+="<tr><td>Intervalo de Confianza (Limite Superior)</td><td>"+confidenceIntervalUpperLimit+"</td></tr>";
    // result+="<tr><td>Intervalo de Confianza (Limite Inferior)</td><td>"+confidenceIntervalLowerLimit+"</td></tr>";
    result+="<tr><td>Desviacion Estandar (Personas en el sistema)</td><td>"+personsOnSystemStandardDeviation+"</td></tr>";
    result+="<tr><td>Utilizacion del sistema </td><td>"+(analyticUtilisation*100)+"%</td></tr>";

    result += "</table><br></div></div></div>";

    document.getElementById("results").innerHTML += result;
}

function chart(chartLabels, chartsData, xLabel)
{
    $('#container').highcharts({
        title: {
            text: '<b>Tiempo Promedio de duracion de un Proceso Contencioso</b>'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            allowDecimals: false,
            categories: chartLabels,
            title: {
                text: '<b>'+xLabel+'</b>'
            },
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: '<b>Tiempo Promedio de un Proceso</b>'
            },
            labels: {
                formatter: function () {
                    return this.value ;
                }
            }
        },
        tooltip: {
            pointFormat: '<b>{series.name}: </b>{point.y}<br>',
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            },

        },
        series: [{
            name: 'Simulado',
            data: chartsData[0]
        }, {
            name: 'Anal\xEDtico',
            color: 'rgba(255, 0, 0, .5)',
            data: chartsData[1]
        }, {
            name: ' Inf Intervalo de confianza (95%)',
            dashStyle: 'shortdot',
            color: 'rgba(0, 0, 0, .5)',
            data: chartsData[2]
        }, {
            name: 'Sup Intervalo de confianza (95%)',
            dashStyle: 'shortdot',
            color: 'rgba(0, 0, 0, .5)',
            data: chartsData[3]
        }]
    });
}

function addChart(chartLabels,chartsValues, xLabel)
{
    chart(chartLabels,chartsValues, xLabel);
}