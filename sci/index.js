function calcu() {

  var ph1ntd = Number(document.getElementById('ph1ntd').value) ;

 

  var ph1ctrl = Number(document.getElementById('ph1ctrl').value);

  var ph1ntp = Number(document.getElementById('ph1ntp').value);

 

  var ph1tt = document.getElementById('ph1tt').value =  Number((ph1ntd)*0.25+(ph1ctrl*0.5)+(ph1ntp)*0.25);





  var ch1ntd = Number(document.getElementById('ch1ntd').value) ;


  var ch1ctrl = Number(document.getElementById('ch1ctrl').value);

  var ch1ntp = Number(document.getElementById('ch1ntp').value);

  

  var ch1tt = document.getElementById('ch1tt').value = Number((ch1ntd)*0.25+(ch1ctrl*0.5)+(ch1ntp*0.25));






    var info1td = Number(document.getElementById('info1td').value) ;

  

    var info1ctrl = Number(document.getElementById('info1ctrl').value);

    var info1tt = document.getElementById('info1tt').value = Number((((info1td)*5)+(info1ctrl*5))/10);

  





    var alg1ntd = Number(document.getElementById('alg1ntd').value) ;

   

    var alg1ctrl = Number(document.getElementById('alg1ctrl').value);

    var alg1tt = document.getElementById('alg1tt').value = Number((((alg1ntd)*3.3)+(alg1ctrl*6.7))/10);





    var ana1ntd = Number(document.getElementById('ana1ntd').value) ;

   

    var ana1ctrl = Number(document.getElementById('ana1ctrl').value);

    var ana1tt = document.getElementById('ana1tt').value = Number((((ana1ntd)*3.3)+(ana1ctrl*6.7))/10);





    var pro1ntd = Number(document.getElementById('pro1ntd').value) ;

  

    var pro1ctrl = Number(document.getElementById('pro1ctrl').value);

    var pro1tt = document.getElementById('pro1tt').value = Number((((pro1ntd)*3.3)+(pro1ctrl*6.7))/10);






    var eng1tp = Number(document.getElementById('eng1tp').value) ;

  

    var eng1ctrl = Number(document.getElementById('eng1ctrl').value);

    var eng1tt = document.getElementById('eng1tt').value = Number((((eng1tp)*5)+(eng1ctrl*5))/10);






      document.getElementById("tt").innerHTML = ((3*ph1tt)+(3*ch1tt)+(2*info1tt)+(2*alg1tt)+(2*ana1tt)+(2*pro1tt)+(2*eng1tt))/16;



}


