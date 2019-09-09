$(function(){
    $(".btn-login").click(function(){
        layerPop();
    });

    $(".loginBackground").click(function(){
        $("#loginModule").hide();
    });

    $(".layerClose").click(function(){
        $("#loginModule").hide();
    });

    function layerPop(){
        $('#loginModule').show();
    }
});