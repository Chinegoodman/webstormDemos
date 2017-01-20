/**
 * Created by pang on 2016/9/27.
 */
$(function () {
    $('.jituan_titles li').click(function () {
        $('.jituan_titles li p').removeClass('shoulv_title_show');
        $('.jituan_titles li p').eq($(this).index()).addClass('shoulv_title_show');
        $('.jituan_content_style').removeClass('jituan_content_show');
        $('.jituan_content_style').eq($(this).index()).addClass('jituan_content_show');
    })
})