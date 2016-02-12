$(".sidebar-toggle").on('click', function(){
  if(!$("body").hasClass('sidebar-collapse')) {
    $("#reduced-footer > div").animate({ height: '4px' }, 300);
    $("#footer").hide();
    $("#extra-footer").animate({ height: '4px' }, 300);

    $("#gov-header").animate({ 'margin-top': '-182px' }, 300);

    $(".main-sidebar").animate({ 'padding-top': '50px' }, 300);

    $('.content-wrapper').attr("style", "min-height: " + ($(window).height() - 62) + "px");
    $('#map').attr("style", "height: " + ($(window).height() - 116) + "px");
  } else {
    $("#reduced-footer > div").animate({ height: '0px' }, 300);
    $("#footer").show();
    $("#extra-footer").animate({ height: '100%' }, 300);

    $("#gov-header").animate({ 'margin-top': '0' }, 300);

    $(".main-sidebar").animate({ 'padding-top': '232px' }, 300);

    $('.content-wrapper').attr("style", "min-height: " + ($(window).height() - 244) + "px");
    $('#map').attr("style", "height: " + ($(window).height() - 298) + "px");
  }
});


// guardar valores em uso
var h = $(window).height(),
    w = $(window).width();

$('.content-wrapper').attr("style", "min-height: " + (h - 244) + "px");
$('#map').attr("style", "height: " + (h - 298) + "px");

// realizar verificação
$(window).resize(function(){

    // recolher valores actuais
    var nh = $(window).height();

    /* comparar os valores antigos com os novos
     * e realizar ação pretendida aqui!
     */

    if (nh != h) {
      $('.content-wrapper').attr("style", "min-height: " + (nh - 244) + "px");
      $('#map').attr("style", "height: " + (nh - 298) + "px");
    }

    // atualizar os valores nas variáveis que guardam o valor antigo
    h = nh;

    var interval = window.setInterval(function() { olMap.updateSize(); }, 10);

    window.setTimeout(function() { clearInterval(interval); }, 300);
});
