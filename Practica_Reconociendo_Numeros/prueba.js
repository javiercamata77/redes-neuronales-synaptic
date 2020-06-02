var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;
   function mired()
   {
   var inputlayer=new synaptic.Layer(60);
   var hiddenlayer= new synaptic.Layer(10);
   var hiddenlayer1= new synaptic.Layer(10);
   //var hiddenlayer2= new synaptic.Layer(10);
  // var hiddenlayer3= new synaptic.Layer(10);
   //var hiddenlayer4= new synaptic.Layer(10);
   //var hiddenlayer5= new synaptic.Layer(10);
   var outputlayer= new synaptic.Layer(1);
   //apuntamiento
   inputlayer.project(hiddenlayer1);
  // hiddenlayer1.project(hiddenlayer2);
   //hiddenlayer2.project(hiddenlayer3);
   //hiddenlayer3.project(hiddenlayer4);
   //hiddenlayer4.project(hiddenlayer5);
   hiddenlayer1.project(outputlayer);
   this.set(
   {input:inputlayer,
    hidden:[hiddenlayer,hiddenlayer1/*,hiddenlayer2,hiddenlayer3,hiddenlayer4,hiddenlayer5*/],
output:outputlayer}

   );
   }

   function prueba(valores)
{
    //alert("tambien entro");
  // var rn=new synaptic.Network();
  mired.prototype=new synaptic.Network();
  mired.prototype.constructor=mired;
  var rn=new mired();
  var entrenar = new synaptic.Trainer(rn);
  
  
  entrenar.train([
    {
        input:[0,0,0,0,0,0,
          0,1,1,1,1,0,
          0,1,0,0,1,0,
          0,1,0,0,1,0,
          0,1,0,0,1,0,
          0,1,0,0,1,0,
          0,1,0,0,1,0,
          0,1,1,1,1,0,
          0,0,0,0,0,0,
          0,0,0,0,0,0],output:[0],
        },{
      input:[0,0,0,0,0,0,
        0,0,0,1,1,0,
        0,0,1,0,1,0,
        0,1,0,0,1,0,
        0,0,0,0,1,0,
        0,0,0,0,1,0,
        0,0,0,0,1,0,
        0,0,0,0,1,0,
        0,0,0,0,0,0,
        0,0,0,0,0,0],output:[1],
      },{
      input:[0,0,0,0,0,0,
        0,1,1,1,1,0,
        0,1,0,0,1,0,
        0,0,0,0,1,0,
        0,0,0,1,0,0,
        0,0,1,0,0,0,
        0,1,0,0,0,0,
        0,1,1,1,1,0,
        0,0,0,0,0,0,
        0,0,0,0,0,0],output:[0.22222222],
     },
     {
        input:[0,0,0,0,0,0,
            0,1,1,1,1,0,
            0,0,0,0,1,0,
            0,0,0,0,1,0,
            0,0,1,1,1,0,
            0,0,0,0,1,0,
            0,0,0,0,1,0,
            0,1,1,1,1,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0],output:[0.33333333],
       },{
        input:[0,0,0,0,0,0,
            0,1,0,0,1,0,
            0,1,0,0,1,0,
            0,1,0,0,1,0,
            0,1,1,1,1,0,
            0,0,0,0,1,0,
            0,0,0,0,1,0,
            0,0,0,0,1,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0],output:[0.44444444],
       },{
        input:[0,0,0,0,0,0,
            0,1,1,1,1,0,
            0,1,0,0,0,0,
            0,1,0,0,0,0,
            0,1,1,1,1,0,
            0,0,0,0,1,0,
            0,0,0,0,1,0,
            0,1,1,1,1,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0],output:[0.55555555],
       },{
        input:[0,0,0,0,0,0,
            0,1,0,0,0,0,
            0,1,0,0,0,0,
            0,1,0,0,0,0,
            0,1,1,1,1,0,
            0,1,0,0,1,0,
            0,1,0,0,1,0,
            0,1,1,1,1,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0],output:[0.66666666],
       },{
        input:[0,0,0,0,0,0,
            0,1,1,1,1,0,
            0,1,0,0,1,0,
            0,0,0,0,1,0,
            0,0,0,1,1,1,
            0,0,0,0,1,0,
            0,0,0,0,1,0,
            0,0,0,0,1,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0],output:[0.77777777],
       },{
        input:[0,0,0,0,0,0,
            0,1,1,1,1,0,
            0,1,0,0,1,0,
            0,1,0,0,1,0,
            0,1,1,1,1,0,
            0,1,0,0,1,0,
            0,1,0,0,1,0,
            0,1,1,1,1,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0],output:[0.88888888],
       },
       {
        input:[0,0,0,0,0,0,
            0,1,1,1,1,0,
            0,1,0,0,1,0,
            0,1,0,0,1,0,
            0,1,1,1,1,0,
            0,0,0,0,1,0,
            0,0,0,0,1,0,
            0,0,0,0,1,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0],output:[0.9],
       }
  ],{
      iterations:10000,
      cost:synaptic.Trainer.cost.MSE,
      shuffle:true,
      log:false
  });

  // rn.prototype.constructor=mired;

   var valor=rn.activate(valores);
    console.log(valor);
    alert("elvalor es" + valor);
  // console.log(rn.activate([0,1]));
//console.log(rn.activate([0,0]));
//console.log(rn.activate([1,0]));
if(valor<0.14)
{
console.log("es 0");
alert("0");
}
else if(valor>0.94 )
{
console.log("es 1");
alert("1");
}
else if(valor>0.16 && valor<0.26)
{
console.log("es 2");
alert("2");
}
else if(valor>0.26 && valor<0.47)
{
console.log("es 3");
alert("3");
}
else if(valor>0.47 && valor<0.57)
{
console.log("es 4");
alert("4");
}
else if(valor>0.57 && valor<0.65)
{
console.log("es 5");
alert("5");
}
else if(valor>0.65 && valor<0.68)
{
console.log("es 6");
alert("6");
}
else if(valor>0.68 && valor<0.80)
{
console.log("es 7");
alert("7");
}
else if(valor>0.80 && valor<0.88)
{
console.log("es 8");
alert("8");
}
else if(valor>0.88 && valor<0.94)
{
console.log("es 9");
alert("9");
}
else{
    console.log("que sera eso");
    alert("que sera eso");
}

}