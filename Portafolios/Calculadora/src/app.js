const pantalla = document.getElementById('pantalla');
const operadores = ['+','-','/','x']
pantalla.addEventListener('input',filtro)


window.addEventListener("keydown", function (event) {
  if(event.key == 'Enter'){calcular()}
  if(event.key == '1'){tipear('1')}
  if(event.key == '2'){tipear('2')}
  if(event.key == '3'){tipear('3')}
  if(event.key == '4'){tipear('4')}
  if(event.key == '5'){tipear('5')}
  if(event.key == '6'){tipear('6')}
  if(event.key == '7'){tipear('7')}
  if(event.key == '8'){tipear('8')}
  if(event.key == '9'){tipear('9')}
  if(event.key == '0'){tipear('0')}
  if(event.key == '-'){tipear('-')}
  if(event.key == '+'){tipear('+')}
  if(event.key == '*'){tipear('*')}
  if(event.key == '/'){tipear('/')}
  if(event.key == 'x'){tipear('x')}
  if(event.key == 'Backspace'){tipear('delete')}
  
},false);

function filtro(e) {
    let value = e.target.value;
    value.toLowerCase()
    e.target.value = value.replace(/[^w\d-+*/x]/g, "").replace(/['*']/g, "x",); //borra los caracteres que no son de calculadora y remplaza la * por x
    let value2 = e.target.value.split(''); // necesario para el siguiente codigo
    for (var i = 0; i < value2.length; i++) {
        if(operadores.includes(value2[i-1]) && operadores.includes(value2[i]) ){ //evito operadores repetidos
            value2[i] = ""
        }
    }
    e.target.value =  new String(value2).replace(/[',']/g, "");  //convierto en string devuelta y lo cargo en pantalla
    
}

function tipear(tecla){
    if(tecla == 'delete'){
        pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
    }else{
        pantalla.value += tecla
    }
    
    var event = new Event('input'); //activo el evento para filtrar
    pantalla.dispatchEvent(event); 
}

function calcular(){
    let value = pantalla.value;
    resultado = sumar(value)
    
    pantalla.value =  (isNaN(resultado))? "Sintaxis error":resultado;
    
}

function sumar(n){
    n = n.split('+');
    let suma = 0;
    for(var i = 0; i < n.length; i++){
        if(n[i].indexOf('-') !=-1){n[i]=restar(n[i])}
        else if(n[i].indexOf('x') !=-1){n[i]=multiplicar(n[i])}
        else if(n[i].indexOf('/') !=-1){n[i]=dividir(n[i])};
        n[i] = parseFloat(n[i])
        suma += n[i]
    }
    
    return suma
}

function restar(n){
    n = n.split('-');
    let resta = 0;
    for(var i = 0; i < n.length; i++){
        if(n[i].indexOf('x') !=-1){n[i]=multiplicar(n[i])}
        else if(n[i].indexOf('/') !=-1){n[i]=dividir(n[i])};
        n[i] = parseFloat(n[i])
        if(i == 0){
        resta = n[i]
        }else{
        resta -= n[i]
        }
        
    }
    
    return resta
}

function multiplicar(n){
    n = n.split('x');
    let multiplicacion = 0;
    for(var i = 0; i < n.length; i++){
        if(n[i].indexOf('/') !=-1){n[i]=dividir(n[i])}
        n[i] = parseFloat(n[i])
        if(i == 0){
        multiplicacion = n[i]
        }else{
        multiplicacion *= n[i]
        }
        
    }
    
    return multiplicacion
}

function dividir(n){
    n = n.split('/');
    let division = 0;
    for(var i = 0; i < n.length; i++){
        n[i] = parseFloat(n[i])
        if(i == 0){
            division = n[i]
        }else{
            division /= n[i]
        }
        
    }
    
    return division
}



