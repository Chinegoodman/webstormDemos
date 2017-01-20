/**
 * Created by pang on 2016/10/17.
 */
$(function () {
    $(window).scroll(function () {
        //已经滚动到上面的页面高度
        var scrollTop = $(this).scrollTop();
        //页面高度
        var scrollHeight = $(document).height();
        //浏览器窗口高度
        var windowHeight = $(this).height();
        //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
        if (scrollTop + windowHeight == scrollHeight) {
            tianjia_pl();
        }
    });
    function tianjia_pl() {
        /*var cloneTH=$('.comment_list li').eq(0).clone()*/
        var txt1="<li><img src='images/login_logo.png' alt='个人头像'>"+
            "<div class='comment_details'><div class='personal_name'><span>"+
            "圣斗士</span><br><p><span>8</span><span>-</span><span>25</span>"+
            "&nbsp;<span>07</span>:<span>25</span></p></div><div class='perso"+
            "nal_zans'><img src='images/common_comment_like_s.png' alt='赞一下'"+
            "><span>526</span></div><p>烤鸭现场切片，口感很好，空气菜量足味美，"+
            "咸水鸭肝也值得推荐。</p></div></li>"; // Create text with HTML
        $('.comment_list').eq(0).append(txt1,txt1,txt1,txt1);
    }
})
