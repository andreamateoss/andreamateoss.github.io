$(document).ready(function(){
    // Menu hamburgesa index
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);});
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500);});
    
    // Menu hamburguesa contacto
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},500);
        $(".menu2 a").toggleClass("aparicion");});
})