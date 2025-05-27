
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

   var probtt = document.getElementById('probtt').value =  Number((probtd)*0.30+(probctrl*0.7));
  var algotd = Number(document.getElementById('algotd').value) ;

 

  var algoctrl = Number(document.getElementById('algoctrl').value);



 

  var algott = document.getElementById('algott').value =  Number((algotd)*0.3+(algoctrl*0.7));




    var alg1ntd = Number(document.getElementById('alg1ntd').value) ;

 

    var alg1ctrl = Number(document.getElementById('alg1ctrl').value);

    var alg1tt = document.getElementById('alg1tt').value = Number((((alg1ntd)*0.40)+(alg1ctrl*0.6)));


 




    var ana1ntd = Number(document.getElementById('ana1ntd').value) ;

  


    var ana1ctrl = Number(document.getElementById('ana1ctrl').value);

    var ana1tt = document.getElementById('ana1tt').value = Number((((ana1ntd)*0.25)+((ana1ntd)*0.25)+(ana1ctrl*0.5)));
  
var codtd = Number(document.getElementById('codtd').value) ;

  

    var codctrl = Number(document.getElementById('codctrl').value);

    var codtt = document.getElementById('codtt').value = Number((((codtd)*0.33)+(codctrl*0.67)));
var coddtd = Number(document.getElementById('coddtd').value) ;

  

    var coddctrl = Number(document.getElementById('coddctrl').value);

    var coddtt = document.getElementById('coddtt').value = Number((((coddtd)*0.33)+(coddctrl*0.67)));

var fund=document.getElementById("fund").innerHTML = ((2*probtt)+(2*alg1tt)+(3*ana1tt))/7;

  var fundcr= document.getElementById('fundcr').innerHTML = crid(fund,13,(crid(alg1tt,4,0)+crid(ana1tt,5,0)+crid(probtt,4,0)));

var fund2=document.getElementById("fund2").innerHTML = ((2*algott)+(3*codtt)+(2*coddtt))/7;

  var fund2cr= document.getElementById('fund2cr').innerHTML = crid(fund2,13,(crid(algott,4,0)+crid(codtt,5,0)+crid(coddtt,4,0)));

  var engtt = Number(document.getElementById('engtt').value);

  var ajtt = Number(document.getElementById('ajtt').value);
  var ajcr = crid(ajtt,2,0);
  var engcr = crid(engtt,2,0);
  var trsn = crid(((ajtt+engtt)/2),4,(ajcr+engcr));



  


       var toto= document.getElementById('toto').innerHTML = Number((fund*7+fund2*7+engtt+ajtt)/16);
  var ttcr= document.getElementById('ttcr').innerHTML = crid(toto,30,(fundcr+fund2cr+trsn));



}

