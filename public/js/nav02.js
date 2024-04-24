// 缓存导航条下拉菜单的jQuery对象  
var navFunctionalAreaListItems = $('.nav-functional-area-list ul');  
  
// 当鼠标悬停在链接上时  
$('.nav-functional-area-ul > .nav-functional-area-list > a').hover(  
    function() {  
        // 隐藏所有下拉菜单  
        navFunctionalAreaListItems.css('display', 'none');  
        // 显示当前链接对应的下拉菜单  
        $(this).siblings('ul').css('display', 'block');  
        console.log("鼠标移到a");  
    },  
    function() {  
        var $that = $(this); // 使用jQuery对象，方便后续链式调用  
        var $ul = $that.siblings('ul'); // 缓存当前链接对应的下拉菜单  
  
        // 当鼠标离开链接时，设置一个延迟来检查鼠标是否进入了下拉菜单  
        var timer = setTimeout(function() {  
            // 如果没有进入下拉菜单，则隐藏它  
            $ul.css('display', 'none');  
        }, 100); // 延迟时间可以根据需要调整  
  
        // 当鼠标悬停在下拉菜单或它的子元素上时  
        $ul.hover(  
            function() {  
                // 清除延迟，确保下拉菜单保持显示  
                clearTimeout(timer);  
            },  
            function() {  
                // 当鼠标离开下拉菜单及其子元素时，设置延迟隐藏  
                timer = setTimeout(function() {  
                    $ul.css('display', 'none');  
                }, 100);  
            }  
        );  
  
        console.log("鼠标移出a");  
    }  
);