$(function(){

    var carosuelList = $("#carosuel ul");


    function moveFirstSlide() {
        var firstItem = carosuelList.find("li:first");
        var lastItem = carosuelList.find("li:last");
        lastItem.after(firstItem);
        carosuelList.css({marginLeft:0});
    };

    function changeSlide() {
        carosuelList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    };



    setInterval(changeSlide, 3000);
});