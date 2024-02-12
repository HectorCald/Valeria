
$(".registrar").click(function(){
    $(".visor iframe").fadeOut();
    $(".visor iframe").fadeIn();
    $(".visor iframe").attr("src","https://docs.google.com/forms/d/1L2hL7UmJ0S4ZK8CC-DA6-BPzp5UplHaHgi3LLLHgR9Q/edit?hl=es-419");
    $(".registrar").css({"font-weight": "bold", "text-decoration":"underline"});
    $(".consultar").css({"font-weight": "normal", "text-decoration":"none"});
});

$(".consultar").click(function(){
    $(".visor iframe").fadeOut();
    $(".visor iframe").fadeIn();
    $(".visor iframe").attr("src", "https://docs.google.com/forms/d/e/1FAIpQLSdSCPQbZTwK0owqoUkLk73FmsKyvIoKFpr37rendXt3-ieRbg/formrestricted?hl=es frameborder=0");
    $(".consultar").css({"font-weight": "bold", "text-decoration":"underline"});
    $(".registrar").css({"font-weight": "normal", "text-decoration":"none"});
});

