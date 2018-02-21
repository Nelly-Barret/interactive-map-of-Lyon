/* for all the items of the filters */
$(".dropdown-item, .btnPrice, #home").on( 'click', function ( e ) {

    e.stopPropagation(); /* to avoid that menu closes when clicking on an item */

} );

function colorButton( button ) {

    button.css( "background-color", "rgb(0, 128, 0)" );

    button.css( "color", "white" );

    button.data( 'clicked', true );

}

function uncolorButton( button ) {

    button.css( "background-color", "rgb(221, 221, 221)" );

    button.css( "color", "black" );

    button.data( 'clicked', false );

}

/* color and un-color type and price buttons when clicking */
$(".btnType, .btnPrice").on( 'click', function() {

    /* it's green -> to grey */

    if( $(this).data( 'clicked' ) ) {

        uncolorButton( $(this) );

    }

    /* it's grey -> to green */
    /* if(!$(this).data('clicked'))  */

    else {

        colorButton( $(this) );

    }

} );

/* color and un-color star button when clicking */
$(".btnStar").on( 'click', function() {

   var max = $(this).attr( 'id' );

   /* we color the buttons between 1 and max and uncolor between max+1 and 5 */
   for( var i = 1 ; i <= max ; i++ ) {

       colorButton( $("#"+i) );

   }

   /* we must use +max+1 to convert max as an integer (it's considered by JS as a string) */
   for( var j = +max+1 ; j <= 5 ; j++ ) {

       uncolorButton( $("#"+j) );

   }

} );


/* adding br on buttons when the window is too small, remove it when it's larger */
$(window).resize(function() {

    /* we get the dropdown menu to resize it in function of window's size */
    var dropdownMenu = document.getElementById( "dropdownMenu" );

    /* the br doesn't exist and the window is small */
    if( $("#br1").length === 0 && window.matchMedia( "(max-width: 500px)" ).matches ) {

        var newBr1 = document.createElement( "br" ); /* we create a new breakline */

        var newBr2 = document.createElement( "br" ); /* we create another breaklines because we can't use the same many times */

        var newBr3 = document.createElement( "br" );

        var newBr4 = document.createElement( "br" );

        newBr1.setAttribute( "id", "br1" );

        newBr2.setAttribute( "id", "br2" );

        newBr3.setAttribute( "id", "br3" );

        newBr4.setAttribute( "id", "br4" );


        var containerType = document.getElementById( "typeContainer" );

        var containerPrice = document.getElementById( "currencyContainer" );

        var containerStar = document.getElementById( "starContainer" );


        /* we add the breaklines to the DOM via inserting them */
        containerType.insertBefore(newBr1, containerType.childNodes[1]);

        containerType.insertBefore(newBr2, containerType.childNodes[3]);

        containerPrice.insertBefore(newBr3, containerPrice.childNodes[2]);

        containerStar.insertBefore(newBr4, containerStar.childNodes[3]);

        /* shrink the dropdown menu */
        dropdownMenu.style.width = "220px";

    }

    //the br exists and the window is large
    else if( window.matchMedia( "(min-width: 501px)" ).matches ) {

        /* we remove the breaklines if they exist */
        if( document.getElementById( "br1" ) !== undefined ) {

            document.getElementById( "br1" ).remove();

        }

        if( document.getElementById( "br2" ) !== undefined ) {

            document.getElementById( "br2" ).remove();

        }

        if( document.getElementById( "br3" ) !== undefined ) {

            document.getElementById( "br3" ).remove();

        }

        if( document.getElementById( "br4" ) !== undefined ) {

            document.getElementById( "br4" ).remove();

        }

        /* expand the dropdown menu */
        dropdownMenu.style.width = "380px";

    }

});


/* reset filters */
$("#resetFilters").on( 'click', function() {

    /* reset the type buttons to grey */
    $(".btnType, .btnPrice, .btnStar").each( function() {

        uncolorButton( $(this) );

    } );

    /* uncheck the checkboxes */
    /* .attr() is deprecated for properties ; use the new .prop() function instead */
    if( $("input").prop( 'checked', true ) ) {

        $("input").prop( 'checked', false );

    }

} );