   var triger = document.querySelector('.sidemenu-trigger');
  triger.addEventListener('click', function(){

    var sidemenu = document.querySelector('.mleftside');
    sidemenu.classList.toggle('mainsideactive');



  });

 $('.box2').hide();


 $('.click2').click(function(){
   $(this).addClass('activeclick');
   $('.click1').removeClass('activeclick');
 	 $('.box2').show();
 	 $('.box1').hide();
 });



 $('.click1').click(function(){
      $(this).addClass('activeclick');
   $('.click2').removeClass('activeclick');
 	 $('.box1').show();
 	 $('.box2').hide();
 });





 $(document).ready(function(){
     $('#btnshow').click(function(){


        var hhbox = document.getElementById('sidetogglee');
        hhbox.classList.toggle('toggleactive');

 
     })
 });


 

    


 var mobtriger = document.querySelector('.mobtrigger');
mobtriger.addEventListener('click', function(){

    var smsidemenu = document.querySelector('.smleftside');
    smsidemenu.classList.toggle('smleftactive');


 }) ;

 


function closeside(){
       var trig  =   document.querySelector('.smleftside');
             trig.classList.add('trigclose')

             console.log("Hello ")

}

document.onclick = function(){
     closeside();
}