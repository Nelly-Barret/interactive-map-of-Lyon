//######################################################################################################################
//############ ON READY ################################################################################################
//######################################################################################################################

$(document).ready(function() {

    /* by default, all buttons aren't clicked */
    $(".btnType, .btnPrice, .btnStar, .btnStyle").each(function() {

        $(this).data('clicked', false);

    });

    /* if the screen is too small, add Br */
    if(window.matchMedia("(max-width: 600px)").matches) {

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

function colorStarButton(button) {

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

       colorStarButton($("#starButton"+i));

    }

    /* we must use +max+1 to convert max as an integer (it's considered by JS as a string) */
    for(var j = +max+1 ; j <= 5 ; j++) {

       uncolorButton($("#starButton"+j));

    }

});

/* color the remove buttons in red when the mouse is over */
$(".btnRemove").on('mouseover', function() {

    $(this).css("background-color", "#DC3545");

});

/* by default, remove buttons are grey */
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

    $("#inputDay").val('-1');

    $("#inputTime").val('');

});


//######################################################################################################################
//############ RESIZE WINDOW ###########################################################################################
//######################################################################################################################

$(window).resize(function() {

    /* when the window is too small, we add Br to buttons in the menu */
    if(window.matchMedia("(max-width: 600px)").matches) {

        addBr();

    }

    /* when the window become larger, remove the Br */
    else {

        removeBr();

    }

});

function addBr() {

    if($("#br1").length === 0) {

        var newBr1 = document.createElement("br"); /* we create a new breakline */

        var newBr2 = document.createElement("br"); /* we create another breakline because we can't use the same many times */

        var newBr3 = document.createElement("br");

        var newBr4 = document.createElement("br");

        var newBr5 = document.createElement("br");

        var newBr6 = document.createElement("br");

        var newBr7 = document.createElement("br");

        var newBr8 = document.createElement("br");

        var newBr9 = document.createElement("br");

        var newBr10 = document.createElement("br");

        var newBr11 = document.createElement("br");

        var newBr12 = document.createElement("br");


        newBr1.setAttribute("id", "br1");

        newBr2.setAttribute("id", "br2");

        newBr3.setAttribute("id", "br3");

        newBr4.setAttribute("id", "br4");

        newBr5.setAttribute("id", "br5");

        newBr6.setAttribute("id", "br6");

        newBr7.setAttribute("id", "br7");

        newBr8.setAttribute("id", "br8");

        newBr9.setAttribute("id", "br9");

        newBr10.setAttribute("id", "br10");

        newBr11.setAttribute("id", "br11");

        newBr12.setAttribute("id", "br12");


        var containerType = document.getElementById("typeContainer");

        var containerPrice = document.getElementById("currencyContainer");

        var containerStar = document.getElementById("starContainer");

        var inputDay = document.getElementById("inputDay");


        /* we add the breaklines to the DOM via inserting them */
        /* child nodes are 3 and 5 because 1 is button, 2 is text, 3 is button, 4 is text, 5 is button, 6 is text */

        for (var i = 0 ; i < containerStar.childNodes.length ; i++) {

            console.log(containerStar.childNodes[i]);

        }

        containerType.insertBefore(newBr1, containerType.childNodes[3]);

        containerType.insertBefore(newBr2, containerType.childNodes[5]);


        containerPrice.insertBefore(newBr3, containerPrice.childNodes[3]);

        containerPrice.insertBefore(newBr4, containerPrice.childNodes[5]);

        containerPrice.insertBefore(newBr5, containerPrice.childNodes[7]);

        containerPrice.insertBefore(newBr6, containerPrice.childNodes[9]);


        containerStar.insertBefore(newBr7, containerStar.childNodes[2]);

        containerStar.insertBefore(newBr8, containerStar.childNodes[3]);

        containerStar.insertBefore(newBr9, containerStar.childNodes[4]);

        containerStar.insertBefore(newBr10, containerStar.childNodes[5]);


        inputDay.insertBefore(newBr12, inputDay.childNodes[1].nextSibling);


        /* shrink the dropdown menu */
        $("#dropdown-menu-collapse").width("180px");

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

    if(document.getElementById("br5") !== undefined && document.getElementById("br5") !== null) {

        document.getElementById("br5").remove();

    }

    if(document.getElementById("br6") !== undefined && document.getElementById("br6") !== null) {

        document.getElementById("br6").remove();

    }

    if(document.getElementById("br7") !== undefined && document.getElementById("br7") !== null) {

        document.getElementById("br7").remove();

    }

    if(document.getElementById("br8") !== undefined && document.getElementById("br8") !== null) {

        document.getElementById("br8").remove();

    }

    if(document.getElementById("br9") !== undefined && document.getElementById("br9") !== null) {

        document.getElementById("br9").remove();

    }

    if(document.getElementById("br10") !== undefined && document.getElementById("br10") !== null) {

        document.getElementById("br10").remove();

    }

    /* expand the dropdown menu */
    $("#dropdown-menu-collapse").width("400px");

}

/*####################################################################################################################*/
/*#### COPYRIGHTS @ NELLY BARRET & LOUIS LE BRUN - LIFPROJET 2018 ####################################################*/
/*####################################################################################################################*/