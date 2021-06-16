var Roleta_1 = document.querySelector('#Roleta1');
var Roleta_2 = document.querySelector('#Roleta2');

var VelOp = {
    "Full": ['Metros/Segundo', 'Kilômetros/Hora'],
    "Short": ['m/s', 'km/h']
}

var AreaOp = {
    "Full": ['Metros', 'Milimetros', 'Centimetros', 'Kilômetros'],
    "Short": ['m', 'mm', 'cm', 'km']
}

var VolOp = {
    "Full": ['Metros/Cubícos', 'Milimetros/Cubícos', 'Centimetros/Cubícos'],
    "Short": ['m3', 'mm3', 'cm3']
}

var PesoOp = {
    "Full": ['Miligramas', 'Gramas', 'Kilôgramas'],
    "Short": ['mg', 'g', 'kg']
}

var TempOp = {
    "Full": ['Celcius', 'Farenheit', 'Kelvin'],
    "Short": ['C', 'F', 'K']
}

function Lista(){
    var indice3 = document.getElementById('Roleta0').selectedIndex;
    var opcao3 = document.getElementById('Roleta0').options;
    
    var Valor = opcao3[indice3].value;

    var num1 = document.querySelector('#Conversao').value = '';
    var num2 = document.querySelector('#Convertido').value = ''; 

    for(var i = Roleta_1.length - 1 ; i >= 0; i--) {
        Roleta_1.remove(i)
        Roleta_2.remove(i)
    }

    if(Valor == 'Peso') {
        Options(PesoOp)
    }
    if(Valor == 'Temp') {
        Options(TempOp)
    }
    if(Valor == 'Vol') {
        Options(VolOp)
    }
    if(Valor == 'Vel') {
        Options(VelOp)
    }
    if(Valor == 'Area') {
        Options(AreaOp)
    }
    
}

function Options(arr) {
    for(var i = 0; i < arr.Full.length; i++) {

        var opcao = document.createElement('option')

        var text = document.createTextNode(arr.Full[i])

        opcao.setAttribute('value',`${arr.Short[i]}`)

        opcao.appendChild(text)

        Roleta_1.appendChild(opcao)
    }
    for(var i = 0; i < arr.Full.length; i++) {

        var opcao = document.createElement('option')

        var text = document.createTextNode(arr.Full[i])

        opcao.setAttribute('value',`${arr.Short[i]}`)

        opcao.appendChild(text)

        Roleta_2.appendChild(opcao)
    }  
}