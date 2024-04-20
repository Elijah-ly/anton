$(document).ready(function() {
    // 侧边菜单的显示与关闭  
    $(".nav-isShow-button>button").click(function() {  
        $(".Menu-functional-area").show();  
    });  

    $(".Menu-close-btn>svg").click(function() {  
        $(".Menu-functional-area").hide();  
    });  
 
    let $MenuFunctionalsList = $(".Menu-functionals-list");  
    $MenuFunctionalsList.click(function() {  
        $(".Menu-functionals>div").hide(); // 隐藏所有.Menu-functionals>div元素  
        $(this).next().show(); // 显示当前点击元素的下一个同级元素  
    });

    // 导航条下拉菜单的显示与隐藏
    $(".nav-functional-area-list").mousemove(function(){  
        $(this).find("ul").show()
        $(this).find("ul").mouseout(function(){
            $(this).hide()
        })
        
    })
});   
// 屏幕宽度大于713时，隐藏侧边菜单
window.addEventListener('resize', function(){
    let width=window.innerWidth
    if(width >= 713){
        document.querySelector(".Menu-functional-area").style.display="none"
    
    }
 });

