/* global $ */
/*  eslint-env browser */  
$(document).ready(function(){
    
    //window scrolling button
    $(window).on('scroll',function(){
        if($(window).scrollTop() >1000)
        {
           if($('.scrollbtn').is(':hidden'))
             {
               $('.scrollbtn').fadeIn(600);
             }
        }
        else
            $('.scrollbtn').fadeOut(600);
    });
    
    //scroll btn clicked
    
    $('.scrollbtn').on('click',function(){
        $('body').animate({
            scrollTop :0
        },600);
    });
    
    $('.header .navbar ul li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var des=$(this).find('a').data('scroll');
        $('body').animate({
           scrollTop:$(des).offset().top
        },600);
    });
    
    
});
    
