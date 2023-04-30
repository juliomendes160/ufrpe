import '../../libs/js/jquery-v3.6.4-development.js';

const path = location.pathname.split(/(^[/]+[a-z]+[/])/);
const root = path[1];
const file = path[2];
let x=1;

$(document).ready(function(){
    $(document).on("click", "#Iniciar", function(){
        console.log($("#d1").load("/ufrpe/assets/html/p1.html"));
        this.innerHTML="Terminar";
        this.id="Terminar";
        $(document).scrollTop(100);
    });

    $(document).on("click", "#Terminar", function(){
       location.href=location.pathname;
    });

    $(document).on("click", "#p1 svg", function(){
       if(this.id=="#p1red"){
            $("#v").fadeIn();
            $("#f").fadeOut();
            $("#Continuar").fadeIn();
       }else{
            $("#v").fadeOut();
            $("#f").fadeIn();
            $("#Continuar").fadeOut();
       }
    });

    $(document).on("click", "#p2 svg", function(){
        if(this.id=="#p2yellow"){
             $("#v").fadeIn();
             $("#f").fadeOut();
             $("#Continuar").fadeIn();
         }else{
             $("#v").fadeOut();
             $("#f").fadeIn();
             $("#Continuar").fadeOut();
         }
     });

     $(document).on("click", "#p3 svg", function(){
        if(this.id=="#p3pink"){
            $("#v").fadeIn();
            $("#f").fadeOut();
            $("#Continuar").fadeIn();
         }else{
            $("#v").fadeOut();
            $("#f").fadeIn();
         }
     });
 
    $(document).on("click", "#Continuar", function(){
        console.log(x);
        $("#v").fadeOut();
        $("#f").fadeOut();
        $("#Continuar").fadeOut();
        if(x==1){
            $("#d1").load("/ufrpe/assets/html/p2.html");
            x=x+1;
            return
        }
        if(x==2){
            $("#d1").load("/ufrpe/assets/html/p3.html");
            x=x+1;
            return
        }
        if(x==3){
            $("#Terminar").fadeOut();
            $("#Continuar").fadeOut();
            alert("Parabéns você venceu nosso jogo!");
            location.href=location.pathname;
        }
    });
});