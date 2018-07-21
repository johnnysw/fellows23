(function(){
  jQuery.fn.extend({
    shareFun:function(option){
      var defaults = {

      }
      var settings = $.extend({},defaults, option);
      
      var $msb_main = "<a class='msb_main'><img title='分享' src='images/share_core_square.jpg'></a>";
          var $social_group = "<div class='social_group'>"
      + "<a target='_blank' class='msb_network_button weixin'>weixin</a>"
      + "<a target='_blank' class='msb_network_button sina'>sina</a>"
      + "<a target='_blank' class='msb_network_button tQQ'>tQQ</a>"
      + "<a target='_blank' class='msb_network_button qZone'>qZone</a>"
      + "<a target='_blank' class='msb_network_button douban'>douban</a>"
      + "</div>";
      
      $(this).append($msb_main);
      $(this).append($social_group);
      $(this).addClass("socialShare");

      $(document).on("click",".msb_main",function(){
        var e = 500;//动画时间
        var t = 250;//延迟时间
        var r = $(this).parent().find(".msb_network_button").length;  //分享组件的个数
        var i = 60;
        var s = e + (r - 1) * t;
        var o = 1;
        var a = $(this).outerWidth();
        var f = $(this).outerHeight();
        var c = $(this).parent().find(".msb_network_button:eq(0)").outerWidth();
        var h = $(this).parent().find(".msb_network_button:eq(0)").outerHeight();
        var p = (a - c) / 2; //起始位置
        var d = (f - h) / 2; //起始位置

        if (!$(this).hasClass("active")) {
          $(this).addClass("disabled").delay(s).queue(function(e) {
              $(this).removeClass("disabled").addClass("active");
              e()
          });
          $(this).parent().find(".msb_network_button").each(function() {
            var n =p + i * o;  //结束位置
            $(this).css({
                display: "block",
                left: p + "px",
                top: d + "px"
            }).delay(t * o).animate({
                left: n + "px",
                top: d + "px"
            }, e);
            o++
          })
        }else{
          o = r;
          $(this).addClass("disabled").delay(s).queue(function(e) {
              $(this).removeClass("disabled").removeClass("active");
              e()
          });
          $(this).parent().find(".msb_network_button").each(function() {
              $(this).stop().delay(t * o).animate({
                  left: p,
                  top: d
              }, e);
              o--
          })
        }
      })
    }
  })
})()