$(document).ready(function(){
    // 햄버거 버튼 
    $(".btn .menu-tr").click(function() {
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        
    });
})