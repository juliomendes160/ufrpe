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

// async function Search(Callback, url){
//     let result = await $.ajax(url);
//     let html = new DOMParser().parseFromString(result, "text/html").documentElement;
//     Callback(url, html);
// }

// function SetHtml(url, html){
//     SetUrl(url);
//     $("html").replaceWith(html);
// }

// function SetMain(url, html){
//     $("main").html($(html).find("main").html());
//     SetUrl(url);
//     if($("html").is(":hidden")) $("html").delay("slow").fadeToggle();
// }

// function SetUrl(url){
//     history.pushState({},"", url);
// }

// function Listen(){
//     $(document).on("click", "[data-navegacao-menu] a", function(event){
//         event.preventDefault();
//         let url = root + $(this).attr("href");
//         Search(SetMain, url);
//         navegacao.menu();
//     });

//     $(document).on("click", "[data-navegacao-funcao] a", function(event){   
//         event.preventDefault();
//         navegacao[this.dataset.navegacaoFuncao]();
//     });

//     const navegacao = {
//         menu:  function(event) {
//             if($("[data-navegacao-menu]").is(":hidden")){
//                 $("[data-navegacao-menu]").fadeIn();
//                 $("[data-navegacao-menu]").scrollTop(0);
//             }
//             else{
//                 $("[data-navegacao-menu]").fadeOut();
//             }
//         },
//     }
// }

