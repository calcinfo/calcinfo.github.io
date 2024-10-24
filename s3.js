
function crid(tt,cr,y) {
if (tt> 10) {
  return cr;
} else {
  return y;
}
  
}
function calcu() {
  var probtd = Number(document.getElementById('probtd').value) ;

 

  var probctrl = Number(document.getElementById('probctrl').value);

   var probtt = document.getElementById('probtt').value =  Number((probtd)*0.33+(probctrl*0.67));
  var algotd = Number(document.getElementById('algotd').value) ;

 

  var algoctrl = Number(document.getElementById('algoctrl').value);

  var algotp = Number(document.getElementById('algotp').value);

 

  var algott = document.getElementById('algott').value =  Number((algotd)*0.17+(algoctrl*0.66)+(algotp)*0.17);




    var alg1ntd = Number(document.getElementById('alg1ntd').value) ;

 

    var alg1ctrl = Number(document.getElementById('alg1ctrl').value);

    var alg1tt = document.getElementById('alg1tt').value = Number((((alg1ntd)*0.33)+(alg1ctrl*0.67)));


 




    var ana1ntd = Number(document.getElementById('ana1ntd').value) ;

   var ana1ntp = Number(document.getElementById('ana1ntp').value) ;


    var ana1ctrl = Number(document.getElementById('ana1ctrl').value);

    var ana1tt = document.getElementById('ana1tt').value = Number((((ana1ntp)*0.2)+((ana1ntd)*0.2)+(ana1ctrl*0.6)));
  
var codtd = Number(document.getElementById('codtd').value) ;

  

    var codctrl = Number(document.getElementById('codctrl').value);

    var codtt = document.getElementById('codtt').value = Number((((codtd)*0.70)+(codctrl*0.30)));
var coddtd = Number(document.getElementById('coddtd').value) ;

  

    var coddctrl = Number(document.getElementById('coddctrl').value);

    var coddtt = document.getElementById('coddtt').value = Number((((coddtd)*0.5)+(coddctrl*0.5)));

var fund=document.getElementById("fund").innerHTML = ((2*probtt)+(2*alg1tt)+(3*ana1tt))/7;

  var fundcr= document.getElementById('fundcr').innerHTML = crid(fund,15,0);

var fund2=document.getElementById("fund2").innerHTML = ((3*algott)+(3*codtt)+(2*coddtt))/8;

  var fund2cr= document.getElementById('fund2cr').innerHTML = crid(fund2,13,0);

  var engtt = Number(document.getElementById('engtt').value);
  var engcr = crid(engtt,2,0);




  


       var toto= document.getElementById('toto').innerHTML = Number((fund*7+fund2*8+engtt)/16);
  var ttcr= document.getElementById('ttcr').innerHTML = crid(toto,30,(fundcr+fund2cr+engcr));



}

