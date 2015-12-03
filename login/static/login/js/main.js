// JavaScript Document

$j(window).load(function(e){
 
          
});
$j(document).ready(function($j)
{




});

$j( window ).resize(function() {
  var width=$j( window ).width();

  
  });

function setEqualHeight(arr) {
    var x = new Array([]);
    for (i = 0; i < arr.length; i++) {
        x[i] = $j(arr[i]).height("auto");
        x[i] = $j(arr[i]).height();
    }
    Max_Value = Array.max(x);
    for (i = 0; i < arr.length; i++) {
        if ($j(arr[i]).height() != Max_Value) {
            if ($j("body").hasClass("ie7")) {
                x[i] = $j(arr[i]).attr("style", "height:" + Max_Value + "px")
            } else {
                x[i] = $j(arr[i]).height(Max_Value)
            }
        }
    }
}
Array.max = function (array) {
    return Math.max.apply(Math, array)
};
 