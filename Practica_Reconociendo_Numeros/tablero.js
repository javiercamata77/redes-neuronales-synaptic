function cleartablero()
{ 
    for(i=0;i<10;i++){
        for(j=0;j<6;j++){
            matrix[i][j]=0;
        }
    }
}


function pintarcelda(x,y){
    k=document.getElementById("c"+x+y);
    k.style.background="blue";
}
function limpiarceldas(x,y){
    k=document.getElementById("c"+x+y);
    k.style.background="white";
}