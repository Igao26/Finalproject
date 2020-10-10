function mudarcontraste(){
$("body").css("background-color","black");
$("body").css("color","white");
}

function mudarextra(){
$("body").css("background-color","yellow");
$("body").css("color","black");
}

function mantercor(){
$("body").css("background-color","white");
$("body").css("color","black");
}

window.onload= function(){
    
    
$("#contraste").on("click",mudarcontraste);
$("#extra").on("click",mudarextra);
$("#normal").on("click",mantercor);






        console.log("Entered on window.onload");
        
        $('nav a').click(function(e){
            e.preventDefault();
            var id = $(this).attr('href'),
            targetOffset = $(id).offset().top,
            menuHeight = $(".navbar").innerHeight();
        
            console.log(menuHeight);
        
            console.log(id);
        
            $('html, body').animate({
                scrollTop: targetOffset - menuHeight
            }, 500);
        });
        
        

       }