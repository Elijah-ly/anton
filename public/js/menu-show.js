
$(document).ready(function(){
    // Show dropdown menu on hover
    $('.nav-functional-area-list').hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });

      // Show side 
      $(".nav-isShow-button>button").click(function() {  
        $(".Menu-functional-area").show();  
    });  

    $(".Menu-close-btn>svg").click(function() {  
        $(".Menu-functional-area").hide();  
    });  
 
    let $MenuFunctionalsList = $(".Menu-functionals-list");  
    $MenuFunctionalsList.click(function() {  
        $(".Menu-functionals>div").hide(); 
        $(this).next().show();  
    });
});

window.addEventListener('resize', function(){
    let width=window.innerWidth
    if(width >= 713){
        document.querySelector(".Menu-functional-area").style.display="none"
    
    }
 });