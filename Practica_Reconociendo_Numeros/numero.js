/*console.log("hola");
var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron;
console.log(Neuron);*/

var matrix=new Array(6);

function limpiar(){
    for(i=0;i<10;i++){
        for(j=0;j<6;j++){
            matrix[i][j]=0;
            limpiarceldas(i,j);
        }
    }
}
function Checkcell(x,y)
{
    matrix[x][y]=1;
   pintarcelda(x,y);
    //celda=document.getElementById("c"+x+y);
    //celda.style.background="green";
}
function inprimir(){
   /* for(i=0;i<10;i++){
        for(j=0;j<6;j++){
            document.write(matrix[i][j]+" ");
        }
      document.write("<br/>");
    }*/
    salida(matrix);
}

function ejecuta (){
    for (i=0; i<10 ; i++)
    matrix[i]=new Array(6);
     //cleartablero();
    //alert("hola");
}


function salida()
{
    //alert("entro");
    var valores=new Array;
    var k=0;
    for(i=0;i<10;i++){
        for(j=0;j<6;j++){
            valores[k]=matrix[i][j];
            k++;
        }
        }
alert("el array: "+ valores)
prueba(valores);
}
ejecuta();