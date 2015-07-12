/*
gogo = getWeightJson();
my_json = {}
$.ajax({
  async: false,
  url: "http://poyi.tw/private/weight",
  type: "GET",
  dataType: "json",
  success: function(json) {
  my_json = JSON.stringify(json)
  },
})
function getWeightJson(){
  $.getJSON("http://poyi.tw/private/weight", function(data){
    w_json = JSON.stringify(data)
  });
  return w_json
}
*/
function getWeightJson(){
  $.ajax({
    async: false,
    url: "http://poyi.tw/private/weight",
    type: "GET",
    dataType: "json",
    success: function(json) {
      my_json = JSON.stringify(json);
    },
  })
  return JSON.parse(my_json);
}


var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "none",
  // "theme": "dark",
  "marginRight": 80,
  "autoMarginOffset": 20,
  "dataDateFormat": "YYYY-MM-DD",
  "valueAxes": [{
    "id": "v1",
    "axisAlpha": 0,
    "position": "left"
  }],
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "graphs": [{
    "id": "g1",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "title": "red line",
    "useLineColorForBulletBorder": true,
    "valueField": "value",
    "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
  }],
  "chartScrollbar": {
    "graph": "g1",
    "scrollbarHeight": 80,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount":true,
    "color":"#AAAAAA"
  },
  "chartCursor": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha":0,
    "valueLineAlpha":0.2
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true,
    "position": "top"
  },
  "export": {
    "enabled": true
  },
  "dataProvider": getWeightJson()
});

chart.addListener("rendered", zoomChart);

zoomChart();

function zoomChart() {
  chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
}

