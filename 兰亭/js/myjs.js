/*头部大图*/
var a=1,b=0,flag=true,time=null;
var last_big_pics_li=$('.big_pics li').eq(4).clone();
var first_big_pics_li=$('.big_pics li').eq(0).clone();
$('.big_pics').eq(0).append(first_big_pics_li);
$('.big_pics').eq(0).prepend(last_big_pics_li);
var big_pics_img_width=$('.big_pics li ').eq(0).width();
$('#conent_big_pic').scrollLeft(big_pics_img_width);
/*var big_pics_img_leghth=$('.big_pics li ').length;*//*这里获取到的，组合上之后的个数即为7，暂时没用*/
var big_pics_point_num=$('.bigpic_points li').length;

/*/!*全景视频*!/
var aa=1,bb=0,flag1=true,time1=null;
var qj_vedios_lis_first=$('.qj_vedios li').eq(0).clone();
var qj_vedios_lis_last=$('.qj_vedios li').eq(3).clone();
$('#qj_vedios').prepend(qj_vedios_lis_last);
$('#qj_vedios').append(qj_vedios_lis_first);
var qj_vedios_li_width=$('#qj_vedios li').eq(0).outerWidth();
$('#conent_qj_vedios').scrollLeft(qj_vedios_li_width);


// 全景图片的
var a3=1,b3=0,flag3=true,time3=null;
var qj_pic_first=$('#qj_pic li').eq(0).clone();
var qj_pic_last=$('#qj_pic li').eq(3).clone();
$('#qj_pic').append(qj_pic_first);
$('#qj_pic').prepend(qj_pic_last);
var qj_pic_minwidth=$('#qj_pic li').eq(0).outerWidth();
$('#conent_qj_pic').scrollLeft(qj_pic_minwidth);*/
/*全景视频*/
var a2=1,b2=0,flag=true,time2=null;



$(function () {
    /*顶层的大图滚动*/
    function Move() {
        $('#conent_big_pic').animate({scrollLeft:big_pics_img_width*a},function () {
            flag=true;
        });
        $('#conent_big_pic .bigpic_points li').eq(b).html('<img src="images/bigpic_point2.png" alt="">').siblings().html('<img src="images/bigpic_point1.png" alt="">')
    }
    function Bigpic_Right() {
        b++;
        if (b>=big_pics_point_num){
            b=0;
        };
        a++;
        if (a>=$('.big_pics li').length){
            a=2;
            $('#conent_big_pic').scrollLeft(big_pics_img_width);
        }
        Move();

    }
    function Bigpic_Auto() {
        clearInterval(time);
        time=setInterval(function () {
            Bigpic_Right();
        },1700)
    }
    Bigpic_Auto();
    $('.bpic_left').eq(0).click(function () {
        clearInterval(time);
        if (flag){
            flag=false;
            a--;
            if (a<0){
                a=$('.big_pics li').length-3;
                $('#conent_big_pic').scrollLeft(big_pics_img_width*(a+1));
            };
            b--;
            if (b<0){
                b=$('.bigpic_points li').length-1;
            }
            Move();
        }
        Bigpic_Auto();
    })
    $('.bpic_right').eq(0).click(function () {
        clearInterval(time);
        if (flag){
            flag=false;
            Bigpic_Right();
        }
        Bigpic_Auto();
    })

 /*   /!*全景视频的滚动*!/
    function Move2() {
        $('#conent_qj_vedios').animate({scrollLeft:qj_vedios_li_width*aa},function () {
            flag1=true;
        });
    }
    function videos_right() {
        aa++;
        if (aa>=$('#qj_vedios li').length){
            aa=2;
            $('#conent_qj_vedios').scrollLeft(qj_vedios_li_width);
        }
        Move2();
    }
    function videos_auto() {
        clearInterval(time1);
        time1=setInterval(function () {
            videos_right();
        },2000)
    }
    videos_auto();


    /!*全景图片的滚动*!/


    function Move3() {
        $('#conent_qj_pic').animate({scrollLeft:qj_pic_minwidth*a3},function () {
            flag3=true;
        })
    }
    function RightMove3() {
        a3++;
        if(a3>=$('#qj_pic li').length){
            a3=2;
            $('#qj_pic').scrollLeft(qj_pic_minwidth);
        }
        Move3();
    }
    function qjpic_Auto() {
        clearInterval(time3);
        time3=setInterval(function () {
            RightMove3();
        },2000)
    }
    qjpic_Auto();
*/

})