var xn=2;
var m = 1500;
var mcdM = mcd(m);
var c  = generarConst(1000,mcdM);
var a  = generarA(mcdM,m)+1;
var generadorMixto = function(rango) {
    var nro = generarNumero(a,c,m)*(rango)+1;
    console.log(nro);
    return parseInt(nro);
}


function mcd(nro){
    maxDiv = parseInt(nro/2);
    res = Array();
    for (let i = 2 ; i <= maxDiv ; i++) {
        if(nro % i == 0){
            res.push(i);
            nro = actualizarNro(nro,i);
        }   
    }
    return res;
}
function actualizarNro(nro,div){
    if(nro%div != 0){
        return nro;
    }else{
        return actualizarNro(nro/div,div);
    }
}

function generarC(c,mcdM,i){
    var res;
    if(i < mcdM.length){
        if(c % mcdM[i] == 0){
            res = generarC(c+1,mcdM,0);
        }else{
            res = generarC(c,mcdM,i+1);
        }
    }else{
        res = c;
    }

    return res;
}

function generarConst(c,cmd) {
    let i = 0 ;
    while (i < cmd.length) {
        if(c % cmd[i] == 0){
             i = 0;
             c = c + 1;
        }else{
            i++;
        }   
    }
    return c;
}

function generarA(cmd,m){
    var a = 2;
    let i = 0;
    while (i < cmd.length) {
        if (m % 4 == 0) {
            if(a % 4 != 0){
                a = a + 1;
                i = 0 ;
            }else{
                if(a % cmd[i] != 0){
                    a = a + 1;
                    i = 0 ;
                }else{
                    i = i+1;
                }  
            }
        }else if(a % cmd[i] != 0){
            a = a + 1;
            i = 0 ;
        }else{
            i = i+1;
        }
    }
    return a;
}

function generarNumero(a,c,m){
    xn = (a*xn+c)%m;
    return xn/m;
}

