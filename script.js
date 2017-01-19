// JavaScript File
/* global $ */
$(document).ready(function(){
    $("#Search").click(function() {
        var city=  $("input").val();
        var url= "https://api.apixu.com/v1/current.json?key=79ba5b7961fe4a83abc131455171201&q=";
        var url1 = url + city;
        $.getJSON(url1, function(response){
     
            $("#Results").append("Current Temperature"+" "+response.current.temp_f+" "+"F"+ "<br>");
            $("#Results").append("Current Temperature"+" "+response.current.temp_c +" "+ "C"+ "<br>");
            $("#Results").append("Current Humidity"+" "+response.humidity+" "+"%" + "<br>");
            $("#Results").append("Current Wind Speed"+" "+response.wind_mph+" "+"mph"+ "<br>");
            $("#Results").append("Current Wind Speed"+" "+ response.wind_kph+" "+"kph" + "<br>");
      
            
        
        });
    });
});