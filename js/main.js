function botao(){
    document.getElementById("agradecimento").innerHTML= "Obrigada por clicar, se informe";
    //console.log(document.getElementById("agradecimento"));
   // alert("Obrigada por clicar")
}

function redirecionar(){
    window.open("https://noticias.uol.com.br/");
    //window.location.href = "https://noticias.uol.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML= "Obrigada por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML= "Obrigada por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML= "Passe o mouse aqui";
    elemento.innerHTML="Passe o mouse aqui";
}

function load(){
    alert("Bem vindos(as)");


}

function funcaoChange (elemento){
    console.log(elemento.value);
}


/*var validar;

function validaIdade(idade){
    if (idade >=18){
        validar= true
    }else
    validar=false
    return validar;
}


var idade= prompt ("Qual é sua idade?");
console.log(validaIdade(idade));
*/


/*function soma (n1, n2) {
return(n1 + n2);

}
alert(soma(5,10));*/




/*var d = new Date();
alert(d.getMonth()+1);// sempre somar um, pois , começa a contagem em 0//
alert(d.getUTCHours);
alert(d.getDay);*/


/*var count;
for(count=0 ; count<=5; count++){
    alert(count)
};
*/


/*var count = 0;
while(count<=5){
    console.log(count);
    alert(count);
   // count = count + 1;
   count++
};
*/


/*var idade = prompt("Qual sua idade?")
var idade = 16;
if (idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/


/*var frutas = [{nome:"maça" , cor:"verde"} , {nome:"uva" , cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/


/*var fruta = {nome:"maça" , cor:"verde"};
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista =["Maçã", "Uva", "Manga"];
//lista.push("Laranja");
//lista.pop()
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" | "))

//var nome = "Priscilla N N Verri";
//var n1 = 33;
//var n2 = 20;
//var frase = "Japão é o melhor time do mundo";
//alert( nome + "tem" + idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 *n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão","Brasil"));