jQuery.fn.extend({
  slider:function(option){
    var defaultOption={
      timer:1000,
    }
    var newOption = $.extend({},defaultOption,option);

    var content = $("<div class='slider'></div>");
    var sliderList = '<div class="slider-panner sp-1 active"><div>'+
        '<img src="'+newOption.pic[0]+'" alt=""></div>'+
        '</div><div class="slider-panner sp-2"><div>'+
        '<img src="'+newOption.pic[1]+'" alt=""></div>'+
        '</div><div class="slider-panner sp-3"><div>'+
        '<img src="'+newOption.pic[2]+'" alt=""></div> </div>'
    var sliderBtn = '<div class="list-btn"><ul>'+
      '<li class="active"></li><li></li><li></li></ul></div>'
    content.html(sliderList+sliderBtn);  
    $(this).append(content);
    
    var thisIndex=0;
    isrun = true;
    setInterval(function(){
      if(isrun){
        ++thisIndex;
        run()
      }
    },newOption.timer);
    function run(){
      if(thisIndex>=3){
        thisIndex = 0;
      }
      $(".slider-panner").eq(thisIndex).addClass("active").siblings().removeClass("active");
      $(".list-btn li").eq(thisIndex).addClass("active").siblings().removeClass("active");
    }
    $(".slider").hover(function(){
      isrun=false;
    },function(){
      isrun=true;
    })
    $(".list-btn li").on("mouseover",function(){
      thisIndex = $(this).index();
      run();
    })
    
  
 
    
  }
})