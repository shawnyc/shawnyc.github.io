// build time:Mon Aug 27 2018 20:00:17 GMT+0800 (GMT+08:00)
(function(n){n(".article-entry").each(function(a){n(this).find("img").each(function(){if(n(this).parent().hasClass("fancybox"))return;var a=this.alt;if(a)n(this).after('<span class="caption">'+a+"</span>");n(this).wrap('<a href="'+this.src+'" title="'+a+'" class="fancybox"></a>')});n(this).find(".fancybox").each(function(){n(this).attr("rel","article"+a)})});if(n.fancybox){n(".fancybox").fancybox()}var a=n("#container"),i=false,t=200;var c=function(){i=true};var o=function(){setTimeout(function(){i=false},t)};n("#main-nav-toggle").on("click",function(){if(i)return;c();a.toggleClass("mobile-nav-on");o()});n("#wrap").on("click",function(){if(i||!a.hasClass("mobile-nav-on"))return;a.removeClass("mobile-nav-on")})})(jQuery);
//rebuild by neat 