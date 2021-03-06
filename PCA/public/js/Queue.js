

var chartLabels = [];
var chartsValues = [[],[],[],[]];

function Queue()
{
    this.array = [];

    this.push = function(newElement)
    {
        this.array.push(newElement);
        this.array.sort(function(a, b){return a.eventStartTime- b.eventStartTime});
    };

    this.pop = function()
    {
        var served = this.array[0];
        this.array.splice(0,1);
        return served;
    };

    this.emptyQueue = function()
    {
        return (this.array.length === 0);
    }
}

function addEventToQueue(_type,_eventStartTime)
{
    var arrival = {type:"", eventStartTime:0};

    arrival.type = _type;
    arrival.eventStartTime = _eventStartTime;

    return arrival;
}

function littlesLaw(lambda, mu)
{
  var rho = lambda/mu;

    return rho/(1-rho);
}

function simulate()
{
    // $(function () {
    //     $(".cuadrado").trigger("click");
    // });
    chartLabels = [];
    chartsValues = [[],[],[],[]];
    var parameters = document.forms[0];

    var lambda = Number(document.getElementById("lambda").value);
    var mu = Number(document.getElementById("mu").value);

    document.getElementById("results").innerHTML = "";

    if(true)
    {
        for(;lambda <= 0.9; lambda += 0.05)
        {
            lambda = Math.round(lambda * 10000) / 10000;
            runQueue(lambda,mu,true);
        }
    }
    else
     // if(parameters[1].checked)
    {
        for(;mu <= 10.0; mu += 0.5) runQueue(lambda,mu,false);
    }
}

function confidenceInterval(standardDeviation,sampleMean,sampleSize)
{
    var interval = {lowEndPoint:0,highEndPoint: 0};

    interval.lowEndPoint = sampleMean - 1.96*(standardDeviation/Math.sqrt(sampleSize));
    interval.highEndPoint = sampleMean + 1.96*(standardDeviation/Math.sqrt(sampleSize));

    return interval;
}

function runQueue()
{
    var lambda, mu;
    var chartXLabel;

    if(arguments.length > 0)
    {
        lambda = arguments[0];
        mu = arguments[1];
        var varyingLambda = arguments[2];

        if(varyingLambda)
        {
            chartLabels.push(""+lambda);
            chartXLabel = "\u03BB";
        }
        else
        {
            chartLabels.push(""+mu);
            chartXLabel = "\u03BC";
        }
    }

    var distributionBox = document.getElementById("distrib");
    var distribution = distributionBox.options[distributionBox.selectedIndex].text;
    var uniformLow,uniformHigh;
    if(distribution === "Uniforme")
    {
        uniformLow = Number(document.getElementById("uniformLow").value);
        uniformHigh = Number(document.getElementById("uniformHigh").value);
    }

    var simulationTotalTime = Number(document.getElementById("time").value);
    var simulationTotalRounds = Number(document.getElementById("rounds").value);

    var randomNumbersGenerator = new Random();

    var roundsCounter = 1;

    var personasEnElSistemaMedia = 0;
    var mediaPersonasPorCorrida = [];

    for(; roundsCounter <= simulationTotalRounds; roundsCounter++)
    {
        var simulationTime = 0;
        var simulationQueue = new Queue();
        var personsCounter = 0;
        var personsServed = 0;

        var arrivalTime = randomNumbersGenerator.exponential(lambda);;
        var serviceEndTime = simulationTotalTime;
        var lastEventTime = 0;
        var areaUnderPersonsChart = 0;

        arrivalTime = randomNumbersGenerator.exponential(lambda);
        simulationQueue.push(new addEventToQueue("Arrival",arrivalTime));

        while (simulationTime <= simulationTotalTime && !simulationQueue.emptyQueue())
        {
            var event = simulationQueue.pop();

            if (event.type === "Arrival")
            {
                simulationTime = arrivalTime;
                areaUnderPersonsChart += personsCounter * (simulationTime - lastEventTime);
                personsCounter++;
                lastEventTime = simulationTime;
                arrivalTime = simulationTime + randomNumbersGenerator.exponential(lambda);
                simulationQueue.push(new addEventToQueue("Arrival", arrivalTime));

                if (personsCounter === 1)
                {
                    serviceEndTime = simulationTime + randomNumbersGenerator.exponential(mu);
                    simulationQueue.push(new addEventToQueue("Departure", serviceEndTime));
                }
            }
            else if (event.type === "Departure")
            {
                simulationTime = serviceEndTime;
                areaUnderPersonsChart += personsCounter * (simulationTime - lastEventTime);
                personsCounter--;
                lastEventTime = simulationTime;
                personsServed++;

                if (personsCounter > 0)
                {
                    serviceEndTime = simulationTime + randomNumbersGenerator.exponential(mu);
                    simulationQueue.push(new addEventToQueue("Departure", serviceEndTime));
                }
            }
        }

        mediaPersonasPorCorrida.push(areaUnderPersonsChart/simulationTotalTime);
    }

    for(var i = 0; i < mediaPersonasPorCorrida.length; i++)
    {
        personasEnElSistemaMedia += (mediaPersonasPorCorrida[i])/simulationTotalRounds;
    }
    var analyticUtilisation = lambda/mu;

    var personasEnElSistemaVarianza = 0;

    for(var i = 0; i < mediaPersonasPorCorrida.length; i++)
    {
        personasEnElSistemaVarianza += Math.pow(mediaPersonasPorCorrida[i]-personasEnElSistemaMedia,2)/Math.max(mediaPersonasPorCorrida.length-1,1);
    }

    var personsOnSystemStandardDeviation = Math.sqrt(personasEnElSistemaVarianza);

    var confidenceIntervalEndPoints = confidenceInterval(personsOnSystemStandardDeviation,personasEnElSistemaMedia,mediaPersonasPorCorrida.length);

    var analiticoPersonasEnElSistemaMedia = littlesLaw(lambda,mu);

    chartsValues[0].push(personasEnElSistemaMedia);

    if(distribution === "Uniforme")
    {
        chartsValues[1].push((uniformHigh+uniformLow)/2.0);
    }

    else if(distribution === "Exponencial")
    {
        chartsValues[1].push(analiticoPersonasEnElSistemaMedia);
    }

    else if(distribution === "Determinístico")
    {
        chartsValues[1].push(lambda);
    }

    chartsValues[2].push(confidenceIntervalEndPoints.lowEndPoint);
    chartsValues[3].push(confidenceIntervalEndPoints.highEndPoint);

    addResultTable(lambda,mu,personsServed,analiticoPersonasEnElSistemaMedia,personasEnElSistemaMedia,confidenceIntervalEndPoints.highEndPoint,confidenceIntervalEndPoints.lowEndPoint,analyticUtilisation,personsOnSystemStandardDeviation);
    addChart(chartLabels,chartsValues,chartXLabel);
}
