
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

 

  var algott = document.getElementById('algott').value =  Number((algotd)*0.2+(algoctrl*0.6)+(algotp)*0.2);




    var alg1ntd = Number(document.getElementById('alg1ntd').value) ;

   

    var alg1ctrl = Number(document.getElementById('alg1ctrl').value);

    var alg1tt = document.getElementById('alg1tt').value = Number((((alg1ntd)*4)+(alg1ctrl*6))/10);


 




    var ana1ntd = Number(document.getElementById('ana1ntd').value) ;

   

    var ana1ctrl = Number(document.getElementById('ana1ctrl').value);

    var ana1tt = document.getElementById('ana1tt').value = Number((((ana1ntd)*4)+(ana1ctrl*6))/10);
  

var fund=document.getElementById("fund").innerHTML = ((4*algott)+(2*alg1tt)+(4*ana1tt))/10;

  var fundcr= document.getElementById('fundcr').innerHTML = crid(fund,11,0);


  var info2tt = Number(document.getElementById('info2tt').value);


      var termtt = Number(document.getElementById('termtt').value);

  

var metodo =document.getElementById("metodo").innerHTML = ((termtt)+(info2tt))/2;

  var metodocr = document.getElementById('metodocr').innerHTML = crid(metodo,7,0);








    var comptd = Number(document.getElementById('comptd').value) ;

  

    var compctrl = Number(document.getElementById('compctrl').value);

    var comptt = document.getElementById('comptt').value = Number((((comptd)*4)+(compctrl*6))/10);


var codtd = Number(document.getElementById('codtd').value) ;

  

    var codctrl = Number(document.getElementById('codctrl').value);

    var codtt = document.getElementById('codtt').value = Number((((codtd)*4)+(codctrl*6))/10);



  

var deco= document.getElementById("deco").innerHTML = ((codtt*2)+(comptt*2))/4;

  var decocr= document.getElementById('decocr').innerHTML = crid(deco,4,0);
      var eng1tt = Number(document.getElementById('eng1tt').value);



  var eng1cr= document.getElementById('eng1cr').innerHTML = crid(eng1tt,2,0);

      



       var toto= document.getElementById('toto').innerHTML = (eng1tt+deco*4+metodo*2+fund*10)/17;

     var ttncr=eng1cr+decocr+metodocr+fundcr;
     var ttcr= document.getElementById('ttcr').innerHTML = crid(toto,30,ttncr);

}
