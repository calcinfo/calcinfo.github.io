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
  

document.getElementById("fund").innerHTML = ((4*algott)+(2*alg1tt)+(4*ana1tt))/10;



  var info2tt = Number(document.getElementById('info2tt').value);


      var termtt = Number(document.getElementById('termtt').value);

  

document.getElementById("metodo").innerHTML = ((termtt)+(info2tt))/2;









    var comptd = Number(document.getElementById('comptd').value) ;

  

    var compctrl = Number(document.getElementById('compctrl').value);

    var comptt = document.getElementById('comptt').value = Number((((comptd)*4)+(compctrl*6))/10);


var codtd = Number(document.getElementById('codtd').value) ;

  

    var codctrl = Number(document.getElementById('codctrl').value);

    var codtt = document.getElementById('codtt').value = Number((((codtd)*4)+(codctrl*6))/10);



  

document.getElementById("deco").innerHTML = ((codtt*2)+(comptt*2))/4;

      var eng1tt = Number(document.getElementById('eng1tt').value);




      



      document.getElementById("tt").innerHTML = ((4*algott)+(comptt*2)+info2tt+(2*alg1tt)+(4*ana1tt)+(2*codtt)+eng1tt+termtt)/17;



}
