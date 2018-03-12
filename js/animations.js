//######################################################################################################################
//############ ON READY ################################################################################################
//######################################################################################################################

$(document).ready(function() {

    $(".btnType, .btnPrice, .btnStar").each(function() {

        $(this).data('clicked', false);

    });

    if(window.matchMedia("(max-width: 600px)").matches) {

        console.log("Mobile");

        addBr();

    }

});


//######################################################################################################################
//############ DROPDOWN MENU ###########################################################################################
//######################################################################################################################

$(".dropdown-item, #textSearch, #searchButton").on('click', function (e) {

    e.stopPropagation(); /* to avoid that menu closes when clicking on an item */

});


//######################################################################################################################
//############ COLOR - UNCOLOR #########################################################################################
//######################################################################################################################

function colorButton(button) {

    button.css("background-color", "#28A745");

    button.css("color", "white");

    button.data('clicked', true);

}

function uncolorButton(button) {

    button.css("background-color", "#DDDDDD");

    button.css("color", "black");

    button.data('clicked', false);

}

/*******************************************************************/

/* color and un-color type and price buttons when clicking */
$(".btnType, .btnPrice").on('click', function() {

    /* it's green -> to grey */

    if($(this).data('clicked')) {

        uncolorButton($(this));

    }

    /* it's grey -> to green */
    /* if(!$(this).data('clicked'))  */

    else {

        colorButton($(this));

    }

});

/* color and un-color star button when clicking */
$(".btnStar").on('click', function() {

    var id = $(this).attr('id');


    var max = id.substring(10, 11); /* get the number */


    /* we color the buttons between 1 and max and uncolor between max+1 and 5 */
    for(var i = 1 ; i <= max ; i++) {

       colorButton($("#starButton"+i));

    }

    /* we must use +max+1 to convert max as an integer (it's considered by JS as a string) */
    for(var j = +max+1 ; j <= 5 ; j++) {

       uncolorButton($("#starButton"+j));

    }

});

$(".btnRemove").on('mouseover', function() {

    $(this).css("background-color", "#DC3545");

});

$(".btnRemove").on('mouseleave', function() {

    $(this).css("background-color", "#DDDDDD");

});

/* remove the selected buttons */

$(".btnRemove").on('click', function() {

    $(this).css("background-color", "#DC3545");

    $(this).parent().children().each(function() {

        uncolorButton($(this));

    });

});


//######################################################################################################################
//############ RESET FILTERS ###########################################################################################
//######################################################################################################################

$("#resetFilters").on('click', function() {

    /* reset the type buttons to grey */
    $(".btnType, .btnPrice, .btnStar").each(function() {

        uncolorButton($(this));

    });

    /* uncheck the checkboxes */
    /* .attr() is deprecated for properties ; use the new .prop() function instead */
    if($("input").prop('checked', true)) {

        $("input").prop('checked', false);

    }

});


//######################################################################################################################
//############ RESIZE WINDOW ###########################################################################################
//######################################################################################################################

//######################################################################################################################
//############ RESIZE WINDOW ###########################################################################################
//######################################################################################################################

$(window).resize(function() {

    if(window.matchMedia("(max-width: 600px)").matches) {
        console.log("Mobile");

        addBr();

    }

    else {

        removeBr();

    }

});

function addBr() {

    /* there is no br yet */
    if($("#br1").length === 0) {

        var newBr1 = document.createElement("br"); /* we create a new breakline */

        var newBr2 = document.createElement("br"); /* we create another breaklines because we can't use the same many times */

        var newBr3 = document.createElement("br");

        var newBr4 = document.createElement("br");

        newBr1.setAttribute("id", "br1");

        newBr2.setAttribute("id", "br2");

        newBr3.setAttribute("id", "br3");

        newBr4.setAttribute("id", "br4");


        var containerType = document.getElementById("typeContainer");

        var containerPrice = document.getElementById("currencyContainer");

        var containerStar = document.getElementById("starContainer");


        /* we add the breaklines to the DOM via inserting them */
        containerType.insertBefore(newBr1, containerType.childNodes[1]);

        containerType.insertBefore(newBr2, containerType.childNodes[3]);

        containerPrice.insertBefore(newBr3, containerPrice.childNodes[2]);

        containerStar.insertBefore(newBr4, containerStar.childNodes[3]);

        /* shrink the dropdown menu */
        $("#dropdownMenu").width("200px");

    }

}

function removeBr() {

    /* we remove the breaklines if they exist */
    if(document.getElementById("br1") !== undefined && document.getElementById("br1") !== null) {

        document.getElementById("br1").remove();

    }

    if(document.getElementById("br2") !== undefined && document.getElementById("br2") !== null) {

        document.getElementById("br2").remove();

    }

    if(document.getElementById("br3") !== undefined && document.getElementById("br3") !== null) {

        document.getElementById("br3").remove();

    }

    if(document.getElementById("br4") !== undefined && document.getElementById("br4") !== null) {

        document.getElementById("br4").remove();

    }

    /* expand the dropdown menu */
    $("#dropdownMenu").width("380px");

}



/*####################################################################################################################*/
/*#### COPYRIGHTS @ NELLY BARRET & LOUIS LE BRUN - LIFPROJET 2018 ####################################################*/
/*####################################################################################################################*/