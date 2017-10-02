
// Hide role description when clicking minus sign.
function plusMinus() {
	var content = $('.title:after').attr('content')

	if content.is('\02795') {
		$('.title:after').css('content', '\02212');
	} else if $(content).is('\02212') {
		$('.title:after').css('content', '\02795');
	} 
};

$('input[type='checkbox']').click(plusMinus)

$(document).ready(function(){
        $('input[type='checkbox']').click(function(){  
              if($('input[type='checkbox']').is(':checked')){  /* check the condition accordion-body is visible or not */
                  $(".info").slideUp(600);  /*if content is visible then close accordion-body with specific time duration */
                $(".plusminus").text('+')    /* add plus sign */
            }
            else{
                $(this).next(".info").slideDown(600); /*if content not visible then 
                                                                                                            show the accordion-body */
                $(this).children(".plusminus").text('-');  /* add minus sign */
            }
        });
    });