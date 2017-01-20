/**
 * Created by 方艳 on 2016/9/19.
 */
$(function () {
    $('.top_nav').click(function () {
        $(this).addClass('nav_select').siblings().removeClass('nav_select');
        $('.content_show').removeClass('show_obj').addClass('hide_obj');
        $('.content_show').eq($(this).index()).removeClass('hide_obj').addClass('show_obj');
    });
    /*$('.person_btn').click(function () {
        $('#personal_center').animate({left:0},500)
    })*/
    $('.person_btn').click(function () {
        $('.personal_center_back').css('display','block');
        $('#personal_center').animate({left:0},500);
    })
    $('.personal_center_back').click(function () {
        $('#personal_center').animate({left:-$('#personal_center').width()},500);
        $('.personal_center_back').css('display','none');
    })
    $('.pc_lis ul li').eq(3).click(function () {
        $('.whilealert').removeClass('hide_xiaoguo');
        $('.percenter_call_confirm').removeClass('hide_xiaoguo');
    })
    $('.percenter_call_confirm ul li').eq(0).click(function () {
        $('.whilealert').addClass('hide_xiaoguo');
        $('.percenter_call_confirm').addClass('hide_xiaoguo');
    });
    $('.percenter_call_confirm ul li').eq(1).click(function () {
        $('.whilealert').addClass('hide_xiaoguo');
        $('.percenter_call_confirm').addClass('hide_xiaoguo');
        
    });
    
})