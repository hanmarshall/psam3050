// HOVER OVER PUB TITLE --> ARTICLE TITLES

$(function() {
  $('#title_nav').hover(function() {
    $('#box3').css('background-color', '#d6aa8b');
    $('#box2').css('background-color', '#b9f4e2');
    $('#box1').css('background-color', '#8ca2e5');

    $('p.title').css('visibility', 'visible');
    $('p.title').css('font-size', '30px');

    $('p.textpreview').css('visibility', 'hidden');
    $('span.after').css('visibility', 'visible');
    $('body').css('background-color', '#f7f7f7');
    $('#header').css('background-color', '#f7f7f7');

  }, function() {
    // on mouseout, reset the background colour
    $('#box3').css('background-color', '');
    $('#box2').css('background-color', '');
    $('#box1').css('background-color', '');

     $('p.title').css('visibility', 'hidden');
     $('p.textpreview').css('visibility', 'visible');
     $('span.after').css('visibility', 'hidden')
     $('body').css('background-color', 'white');
     $('#header').css('background-color', 'white');


  });
});

// FOR HALFSHEET POETRY LIGHTBOX

	// $('#title_nav').click(function(){
	// 	$('div#backdrop').toggleClass('backdrop-visible');
	// 	$('.halfsheet').css('display', 'block');
	// });

	// $('#backdrop').click(function(){
	// 	$('.halfsheet').css('display', 'none');

	// });


// FOR 'LIKE THIS' -- GROW OPACITY W/ COMMA EFFECT
$(function() {

	$("p.main").mouseenter(function(){
		var fadeLevel = 0.1;
	$("#text span").each(function(i) {
		$(this).css("opacity", fadeLevel);
		fadeLevel += 0.04;

		// END GRADIENT AT EACH PERIOD
		if ($(this).is(':contains(".")')) {
			fadeLevel = 0.04;
		}

		});

	});

	$("p.main").mouseleave(function(){
        $("#text span").css("opacity", 1);
		
    });
});

// FOR 'CARTAS' -- RANDOMIZE TEXT

// $(function () {
//   $(".halfsheet-text span").each(function (i, elt) {
//     $(elt).css({
//       left: Math.random() * 150,
//       top: Math.random() * 150
//     });
//   });
// });

$(function(){
    if ($('#cartas').css('display', 'block')) {
      $('.box p').css('opacity', '0');
      $('#backdrop').css('cursor', 'pointer');
    }
});


function off() {

  $('#backdrop, #cartas').animate({'opacity':'0'}, 100, 'linear', function(){
            $('#backdrop, #cartas').animate({'opacity':'0'}, 100, 'linear');
            document.getElementById("backdrop").style.display = "none";
            document.getElementById("cartas").style.display = "none";

          $('.box p').animate({'opacity':'1'}, 500, 'linear', function(){      
    });  
          
});

}
