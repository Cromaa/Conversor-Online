function Convert() {
    var indice1 = document.getElementById('Roleta1').selectedIndex;
    var opcao1 = document.getElementById('Roleta1').options;

    var text1 = opcao1[indice1].value;

    var indice2 = document.getElementById('Roleta2').selectedIndex;
    var opcao2 = document.getElementById('Roleta2').options;

    var text2 = opcao2[indice2].value;

    Contas(text1,text2)
}

//Distância 

function mm_cm(num){return num/100}
function cm_mm(num){return num*100}
function mm_m(num){return num/1000}
function m_mm(num){return num*1000}
function mm_km(num){return num/1000000}
function km_mm(num){return num*1000000}
function km_m(num){return num*1000}
function m_km(num){return num/1000}
function km_cm(num){return num*100000}
function cm_km(num){return num/100000}
function cm_m(num){return num/100}
function m_cm(num){return num*100}

//Peso

function mg_g(num){return num/1000}
function g_mg(num){return num*1000}
function mg_kg(num){return num/1000000}
function kg_mg(num){return num*1000000}
function kg_g(num){return num*1000}
function g_kg(num){return num/1000}

//Volume

function m3_cm3(num){return num*1000000}
function cm3_m3(num){return num/1000000}
function m3_mm3(num){return num*1000000000}
function mm3_m3(num){return num/1000000000}
function mm3_cm3(num){return num/1000}
function cm3_mm3(num){return num*1000}

//Temperatura

function f_c(num){return ((num - 32) * 5/9)}
function c_f(num){return ((num * 9/5) + 32)}
function k_c(num){return (num - 273.15)}
function c_k(num){return (num + 273.15)}
function f_K(num){return ((num - 32) * 5/9 + 273.15)}
function k_f(num){return ((num - 273.15) * 9/5 + 32)}

//Velocidade

function ms_kh(num){return num*3.6}
function kh_ms(num){return num/3.6}

function Contas(text1, text2) {
    var num1 = document.querySelector('#Conversao').value;
    var num2 = document.querySelector('#Convertido');  
    
    //Distância

    if(text1 == 'mm' && text2 == 'cm'){num2.value = mm_cm(num1)}
    if(text1 == 'cm' && text2 == 'mm'){num2.value = cm_mm(num1)}
    if(text1 == 'km' && text2 == 'm'){num2.value = km_m(num1)}
    if(text1 == 'm' && text2 == 'km'){num2.value = m_km(num1)}
    if(text1 == 'mm' && text2 == 'km'){num2.value = mm_km(num1)}
    if(text1 == 'km' && text2 == 'mm'){num2.value = km_mm(num1)}
    if(text1 == 'mm' && text2 == 'm'){num2.value = mm_m(num1)}
    if(text1 == 'm' && text2 == 'mm'){num2.value = m_mm(num1)}
    if(text1 == 'km' && text2 == 'cm'){num2.value = km_cm(num1)}
    if(text1 == 'cm' && text2 == 'km'){num2.value = cm_km(num1)}
    if(text1 == 'cm' && text2 == 'm'){num2.value = cm_m(num1)}
    if(text1 == 'm' && text2 == 'cm'){num2.value = m_cm(num1)}
    
    //Peso

    if(text1 == 'mg' && text2 == 'g'){num2.value = mg_g(num1)}
    if(text1 == 'g' && text2 == 'mg'){num2.value = g_mg(num1)}
    if(text1 == 'mg' && text2 == 'kg'){num2.value = mg_kg(num1)}
    if(text1 == 'kg' && text2 == 'mg'){num2.value = kg_mg(num1)}
    if(text1 == 'kg' && text2 == 'g'){num2.value = kg_g(num1)}
    if(text1 == 'g' && text2 == 'kg'){num2.value = g_kg(num1)}

    //Volume

    if(text1 == 'm3' && text2 == 'cm3'){num2.value = m3_cm3(num1)}
    if(text1 == 'cm3' && text2 == 'm3'){num2.value = cm3_m3(num1)}
    if(text1 == 'm3' && text2 == 'mm3'){num2.value = m3_mm3(num1)}
    if(text1 == 'mm3' && text2 == 'm3'){num2.value = mm3_m3(num1)}
    if(text1 == 'mm3' && text2 == 'cm3'){num2.value = mm3_cm3(num1)}
    if(text1 == 'cm3' && text2 == 'mm3'){num2.value = cm3_mm3(num1)}

    //Volume

    if(text1 == 'F' && text2 == 'C'){num2.value = f_c(num1)}
    if(text1 == 'C' && text2 == 'F'){num2.value = c_f(num1)}
    if(text1 == 'K' && text2 == 'C'){num2.value = k_c(num1)}
    if(text1 == 'C' && text2 == 'K'){num2.value = c_k(num1)}
    if(text1 == 'F' && text2 == 'K'){num2.value = f_k(num1)}
    if(text1 == 'K' && text2 == 'F'){num2.value = k_f(num1)}

    //Velocidade

    if(text1 == 'km/h' && text2 == 'm/s'){num2.value = kh_ms(num1)}
    if(text1 == 'm/s' && text2 == 'km/h'){num2.value = ms_kh(num1)}

    //Validador

    if(text1 == text2){num2.value = num1}


}