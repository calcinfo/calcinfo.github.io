
function crid(tt,cr,y) {
if (tt> 10) {
  return cr;
} else {
  return y;
}
  
}
function calcu() {

  var algotd = Number(document.getElementById('algotd').value) ;

 

  var algoctrl = Number(document.getElementById('algoctrl').value);

  var algotp = Number(document.getElementById('algotp').value);

 

  var algott = document.getElementById('algott').value =  Number((algotd)*0.16+(algoctrl*0.68)+(algotp)*0.16);




    var alg1ntd = Number(document.getElementById('alg1ntd').value) ;

   

    var alg1ctrl = Number(document.getElementById('alg1ctrl').value);

    var alg1tt = document.getElementById('alg1tt').value = Number((((alg1ntd)*0.34)+(alg1ctrl*0.66)));


 




    var ana1ntd = Number(document.getElementById('ana1ntd').value) ;

   

    var ana1ctrl = Number(document.getElementById('ana1ctrl').value);

    var ana1tt = document.getElementById('ana1tt').value = Number((((ana1ntd)*0.34)+(ana1ctrl*0.66)));
  

var fund=document.getElementById("fund").innerHTML = ((probtt)+(2*alg1tt)+(2*ana1tt))/5;

  var fundcr= document.getElementById('fundcr').innerHTML = crid(fund,11,0);


  var info2tt = Number(document.getElementById('info2tt').value);


      var termtt = Number(document.getElementById('termtt').value);

  

var metodo =document.getElementById("metodo").innerHTML = ((tictt*2)+(ipott))/3;

  var metodocr = document.getElementById('metodocr').innerHTML = crid(metodo,7,0);








    var comptd = Number(document.getElementById('comptd').value) ;

  

    var compctrl = Number(document.getElementById('compctrl').value);

    var comptt = document.getElementById('comptt').value = Number((((comptd)*4)+(compctrl*6))/10);


var codtd = Number(document.getElementById('codtd').value) ;

  

    var codctrl = Number(document.getElementById('codctrl').value);

    var codtt = document.getElementById('codtt').value = Number((((codtd)*0.34)+(codctrl*0.66)));



  

var deco= document.getElementById("deco").innerHTML = ((codtt*2)+(algott*3))/5;

  var decocr= document.getElementById('decocr').innerHTML = crid(deco,9,0);




       var toto= document.getElementById('toto').innerHTML = (deco*5+metodo*3+tran*3+fund*5)/16;
  var ttcr= document.getElementById('ttcr').innerHTML = crid(toto,30,(eng1cr+decocr+metodocr+fundcr));



}

