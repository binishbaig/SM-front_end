(function( $, undefined ) {

    var factList = [
        "Selfies?",
        "Tweets?",
        "Vines?",
        "Pics?",
        "Posts?",
        "Videos?",
    ];

    var perRow = factList.length;
    console.log("perRow = " + perRow)
    var radius = perRow * 6;
    var angle = 360 / perRow;
    console.log("Angle = " + angle);
    var n = 1;

    var height = $('h1').css('height');

    function create_row(){
        for (i = 0; i < perRow; i++){
            $('.factlist').append('<li class="fact-'+i+'">'+factList[i]+'</li>');
            $('.fact-'+i+'').css({
                '-webkit-transform' : 'rotate(' + -angle * i + 'deg)',
                '-moz-transform' : 'rotate(' + -angle * i + 'deg)'
            });
        }
    };

    create_row();


    setInterval(function(){
        $('.factlist').css({
            '-webkit-transform':'rotate(' + angle * n + 'deg)',
            '-moz-transform': 'rotate(' + angle * n + 'deg)'
        });
        n++;
    }, 3000);


/*@@@@@@@@@@@@@@@@@ Sign up Button @@@@@@@@@@@@@@@************/


        $('.sign-up-button').on('click', function(e){
            e.preventDefault();
            $(this).parent().addClass('open');
            $(this).fadeOut();
            $(this).siblings('.input-group').fadeIn();
            $(this).siblings('.input-group').find('input').focus();
        });

        var label = $('.input-group label'),
            input = $('.input-group input');

        input.on('focus', function(){
            label.css('opacity',0.5);
        });

        input.on('keyup', function(){
            label.css('opacity',0);
            if( $(this).val().length == 0 ) {
                label.css('opacity',0.5);
            }
        });

        input.on('blur', function(){
            if( $(this).val().length == 0 ) {
                label.css('opacity', 1);
            }
        });


})( jQuery );