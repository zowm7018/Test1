//메뉴
$(".submenu,.sub_bg").hide()







//반응형(사이드) 메뉴
$(".submenu,.sub_bg").hide()

$(".menu_box>li,.sub_bg").mouseover(function(){
 $(".submenu,.sub_bg").stop().slideDown()
})
$(".menu_box>li,.sub_bg").mouseleave(function(){
 $(".submenu,.sub_bg").stop().slideUp()
})

$(".topscroll").click(function(){
 $("html,body").animate({scrollTop : 0},0)//시간초 1s >> 1000
})


