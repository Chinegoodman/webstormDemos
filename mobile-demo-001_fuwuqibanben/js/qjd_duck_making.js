/**
 * Created by 方艳 on 2016/9/23.
 */
$(function () {
    /*var length=$('.perfect_videos_lis').width();
    alert(length);
    var lis_length=$('.perfect_videos_lis li').length;
    alert(lis_length)*/
    $('.perfect_videos_lis li').width();
    $('.perfect_videos_lis').width($('.perfect_videos_lis li').outerWidth(true)*$('.perfect_videos_lis li').length);
})