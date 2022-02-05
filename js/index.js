(function(){
  
  $(".tabs").on("click","a",function(){
    
      $(this).addClass("active").siblings().removeClass("active");
      $(".content").eq($(this).index()).show().siblings(".content").hide();
  });
  $(".marquee-view .marquee").each(function(){
    var rows=$(this).children(".row").clone();
    $(this).append(rows);
  });
  var chartDom = document.querySelector(".pie");
  var myChart = echarts.init(chartDom);
  var option;
  
  option = {
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [30, 70],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  };
  
  option && myChart.setOption(option);
  
})();
