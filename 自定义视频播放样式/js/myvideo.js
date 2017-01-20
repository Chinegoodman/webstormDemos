/**
 * Created by 方艳 on 2016/9/12.
 */
$(function  () {
	function video_controls(){
		/*alert('video_controls');*/
		/*play布尔值。来判断是否已经在播放用的。voice也是同理。past_time_scale用于设置已经播放的和总时间的比例。time1来设置计时器的*/
		/*a,aa,b,bb用来设置两个播放时间的、*/
		var play=1,voice=1,past_time_scale=0,time1=null,time2=null;
		/*a aa b bb用于设置时间的*/
		var a,aa,b,bb;
		/*autoplay用于设置参数。判断是否有点击暂停的操作。来防止花瓶时还会判断是否播放*/
		var autoplay=1;
		var video=document.getElementById('activity_hs_video');
		var video_time=$('.video_wrap').eq(0).width();
		$('.play_pause_btn>img').eq(0).click(video_play);
		$('.voice_btn>img').eq(0).click(function(){
			if (voice) {
				video.volume=0;
				voice=0;
			} else{
				video.volume=1;
				voice=1;
			};
		});
		function video_play () {

			/*$.post('video.php',{},function(msg) {

				video.play();
				/!*alert(msg);*!/
			})*/
			/*alert('video_play');*/
                /*video.pause();*/
				clearInterval(time1);
				if (play) {
					video.play();
					play=0;
					/*past_time_scale=video.currentTime/video.duration;*/
					time1=setInterval(video_time_dtt,70);
					video_autoplay();
					/*console.log('时间比例'+past_time_scale*video_time+'已走的时间'+video.currentTime+'总共时间'+video.duration);*/
				} else{
					/*video.pause();
					play=1;
                    /!*进入自动播放，点击暂停后。不允许自动播放。*!/
                    autoplay=0;*/
					video_pause();
					/*进入自动播放，点击暂停后。不允许自动播放。*/
					autoplay=0;
					/*past_time_scale=video.currentTime/video.duration;*/
					/*time1=setInterval(video_time_dtt,70);*/
				};
		};
		function video_pause() {
			/*alert('video_pause');*/
			video.pause();
			play=1;

		}
		function video_time_dtt(){
			/*alert('video_time_dtt');*/
			past_time_scale=video.currentTime/video.duration;
			$('.pasttime_show').width(past_time_scale*video_time);
			/*案例视频的时间不是整秒，取整操作*/
			all_times=parseInt(video.duration);
			past_times=parseInt(video.currentTime);
			bb=all_times%60;
			b=parseInt(all_times/60);
			aa=past_times%60;
			a=parseInt(past_times/60);
			/*function nuber_ling(s) {
				if(s<10){
				s='0'+s;
				}
			};
			nuber_ling(a);
			nuber_ling(aa);
			nuber_ling(b);
			nuber_ling(bb);*/
			if(a<10){
				a='0'+a;
				}
			if(aa<10){
				aa='0'+aa;
				}
			if(b<10){
				b='0'+b;
				}
			if(bb<10){
				bb='0'+bb;
				}
			/*console.log('总时间'+all_times+'播放时间'+past_times+'a'+a+'aa'+aa+'b'+b+'bb'+bb);*/
			$('.current_time span:nth-child(1)').html(a);
			$('.current_time span:nth-child(2)').html(aa);
			$('.video_lasttime span:nth-child(1)').html(b);
			$('.video_lasttime span:nth-child(2)').html(bb);
		};
		function time_control(){
			/*alert('time_control');*/
			$('.video_wrap').mousedown(function(e){
				var e=e||window.event;
				/*console.log(e.clientX+'WAIKUANG'+$('.video_wrap').offset().left);*/
				clearInterval(time1);
				past_time_scale2=(e.clientX-$('.video_wrap').offset().left)/$('.video_wrap').width();
				video.currentTime=past_time_scale2*video.duration;
				play=1;
				video_play();

			})
		};
		/*setInterval(function () {
			console.log(autoplay);
		},70)*/
		/*function video_autoplay() {
			window.onclick=function () {

				 if(autoplay){
					 if ($(window).scrollTop()>($('#activity_hs_video_box').height()+$('#activity_hs_video_box').offset().top/!*-$(window).scrollTop()*!/-$(window).height()) &&
					 $	(window).scrollTop()< ($('#activity_hs_video_box').offset().top)
						 ){
						 /!*console.log('播放');*!/
						 play=1;
						 video_play();
						 }else {
						 console.log('停止');
						 video_pause();
						 }
				 }
				/!*video.play();*!/
			 }
		}
		video_autoplay();*/
		function video_autoplay() {
			/*alert('video_autoplay');*/
			$(window).on('scroll',function () {
				/*console.log('滚动了');*/
				if(autoplay){
					if ($(window).scrollTop()>($('#activity_hs_video_box').height()+$('#activity_hs_video_box').offset().top/*-$(window).scrollTop()*/-$(window).height()) &&
						$	(window).scrollTop()< ($('#activity_hs_video_box').offset().top)
					){
						/*console.log('播放');*/
						/*clearInterval(time2);*/
						if(play){
							play=1;
							video_play();
						}

					}else {
						/*console.log('停止');*/
						video_pause();
					}
				}
			})
		}
		/*video_autoplay();*/
		time2=setInterval(function () {
			if ($(window).scrollTop()>($('#activity_hs_video_box').height()+$('#activity_hs_video_box').offset().top/*-$(window).scrollTop()*/-$(window).height()) &&
				$	(window).scrollTop()< ($('#activity_hs_video_box').offset().top)
			){
				/*console.log('播放');*/
				/*clearInterval(time2);*/
				if(play){
					play=1;
					clearInterval(time2);
					video_play();
				}

			}
		},300)
		


		time_control();
	}
	video_controls();

	
})