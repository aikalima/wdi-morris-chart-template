$(document).ready(function(){

  var colors = ['red','skyblue','green','gold'];

  $.ajax(
    '/beverages',
    { success: function (graph_data) {
         Morris.Line({
            element: 'beverage_graph_week',
            data: graph_data,
            xkey: 'day',
            ykeys: ['coffee','water','soda','beer'],
            labels: ['coffee','water','soda','beer'],
            parseTime: false,
            lineColors: colors,
            hideHover: true
          });
      }
    }
  );

});




