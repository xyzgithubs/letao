
    var slider = mui("#slider");

            slider.slider({
                interval:1000
            });
  

// 滑动的初始化

mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});