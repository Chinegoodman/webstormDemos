/**
 * Created by pang on 2016/9/27.
 */
$(function () {
    $('.shoulv_title li').click(function () {
        $('.shoulv_title li p').removeClass('content_show');
        $('.shoulv_title li p').eq($(this).index()).addClass('content_show');

        $('.ul_samestyle').removeClass('ul_show');
        $('.ul_samestyle').eq($(this).index()).addClass('ul_show');
    })
})