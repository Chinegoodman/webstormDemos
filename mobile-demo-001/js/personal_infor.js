/**
 * Created by 方艳 on 2016/9/19.
 */
$(function () {
    /*性别设置*/
    $('.per_inf_sex').click(function () {
        if($('.per_inf_sex').attr('sex_cod')==1){
            $('.sex_hover').css('left',$('.per_inf_sex').outerWidth()-$('.sex_hover').width());
            $('.per_inf_sex').attr('sex_cod',0);
        }else {
            $('.sex_hover').css('left','-0.05rem');
            $('.per_inf_sex').attr('sex_cod',1);
        }
    })
   /* 退出登录*/
    $('.personal_infor_logout').click(function () {
        $('.whilealert').removeClass('hide_xiaoguo');
        $('.personal_infor_logout_confirm').removeClass('hide_xiaoguo');
    })
    /*确认或取消 退出登录*/
    $('.personal_infor_logout_confirm ul li').click(function () {
        $('.whilealert').addClass('hide_xiaoguo');
        $('.personal_infor_logout_confirm').addClass('hide_xiaoguo');
        window.open('personal_login.html','_self');
    })
    /*登录退出结束*/
   /* 昵称修改*/
    $('.per_inf_lis li').eq(1).click(function () {
        $('.whilealert').removeClass('hide_xiaoguo');
        $('.personal_infor_nickname_change').removeClass('hide_xiaoguo');
    })
    $('.personal_infor_nickname_change ul li').click(function () {
        $('.whilealert').addClass('hide_xiaoguo');
        $('.personal_infor_nickname_change').addClass('hide_xiaoguo');
    })
    /*昵称修改结束*/
    /*地址修改*/
    $('.per_inf_lis li').eq(3).click(function () {
        $('.whilealert').removeClass('hide_xiaoguo');
        $('.personal_infor_address_change').removeClass('hide_xiaoguo');
    })
    $('.personal_infor_address_change ul li').click(function () {
        $('.whilealert').addClass('hide_xiaoguo');
        $('.personal_infor_address_change').addClass('hide_xiaoguo');
    })
    
    
})