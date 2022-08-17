function Saludar(){
    let nombre=prompt("Como es tu nombre");
    let edad = prompt("Como es tu edad");   
    document.write(" hola "+ nombre+" tu tienes"+ edad);
};

function suma(){ 
    let num1=prompt("digite el primer numero"); 
    let num2=prompt("digite el segundo numero"); 
    let suma=num1+num2; 
    document.write(" El valor de la suma "+ suma);
 };
Saludar();
suma();