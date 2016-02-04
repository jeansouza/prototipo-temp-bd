$(".sidebar-toggle").on('click', function(){
  if(!$("body").hasClass('sidebar-collapse')) {
    $("#reduced-footer > div").animate({ height: '4px' }, 300);
    $("#footer").hide();
    $("#extra-footer").animate({ height: '4px' }, 300);
  } else {
    $("#reduced-footer > div").animate({ height: '0px' }, 300);
    $("#footer").show();
    $("#extra-footer").animate({ height: '100%' }, 300);
  }
});

// guardar valores em uso
var h = $(window).height(),
    w = $(window).width();

$('.content-wrapper').attr("style", "min-height: " + (h - 95) + "px");
$('#map').attr("style", "height: " + (h - 149) + "px");

// realizar verificação
$(window).resize(function(){

    // recolher valores actuais
    var nh = $(window).height();

    /* comparar os valores antigos com os novos
     * e realizar ação pretendida aqui!
     */

    if (nh != h) {
      $('.content-wrapper').attr("style", "min-height: " + (nh - 95) + "px");
      $('#map').attr("style", "height: " + (nh - 149) + "px");
    }

    // atualizar os valores nas variáveis que guardam o valor antigo
    h = nh;

    var interval = window.setInterval(function() { olMap.updateSize(); }, 10);

    window.setTimeout(function() { clearInterval(interval); }, 300);
});
