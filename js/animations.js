//######################################################################################################################
//############ ON READY ################################################################################################
//######################################################################################################################

$(document).ready(function() {

    // By default, all buttons aren't clicked
    $(".btnType, .btnPrice, .btnStar, .btnStyle").each(function() {

        $(this).data('clicked', false);

    });

    // If the screen is too small, add Br
    if(window.matchMedia("(max-width: 600px)").matches) {

            addBr();

    }

});


//######################################################################################################################
//############ DROPDOWN MENU ###########################################################################################
//######################################################################################################################

$(".dropdown-item, #textSearch, #searchButton").on('click', function (e) {

    e.stopPropagation(); // To avoid that menu closes when clicking on an item

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

// Color and un-color type and price buttons when clicking
$(".btnType, .btnPrice").on('click', function() {

    // It's green -> to grey
    if($(this).data('clicked')) {

        uncolorButton($(this));

    }

    // It's grey -> to green
    else {

        colorButton($(this));

    }

});

// Color and un-color star button when clicking
$(".btnStar").on('click', function() {

    var id = $(this).attr('id');


    var max = id.substring(10, 11); // Get the number


    // We color the buttons between 1 and max and uncolor between max+1 and 5
    for(var i = 1 ; i <= max ; i++) {

       colorStarButton($("#starButton"+i));

    }

    // We must use +max+1 to convert max as an integer (it's considered by JS as a string)
    for(var j = +max+1 ; j <= 5 ; j++) {

       uncolorButton($("#starButton"+j));

    }

});

// Color the remove buttons in red when the mouse is over
$(".btnRemove").on('mouseover', function() {

    $(this).css("background-color", "#DC3545");

});

// By default, remove buttons are grey
$(".btnRemove").on('mouseleave', function() {

    $(this).css("background-color", "#DDDDDD");

});

// Remove the selected buttons
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

    // Reset the type buttons to grey
    $(".btnType, .btnPrice, .btnStar").each(function() {

        uncolorButton($(this));

    });

    // Uncheck the checkboxes
    // .attr() is deprecated for properties, use the new .prop() function instead
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

    // When the window is too small, we add Br to buttons in the menu
    if(window.matchMedia("(max-width: 600px)").matches) {

        addBr();

    }

    // When the window become larger, remove the Br
    else {

        removeBr();

    }

});

function addBr() {

    // If there is no br yet
    if($("#brType1").length === 0) {

        var containerType = document.getElementById("typeContainer");

        var containerPrice = document.getElementById("currencyContainer");

        var containerStar = document.getElementById("starContainer");

        var chooseDay = document.getElementsByClassName("dropdown-item")[5];

        var inputDay = chooseDay.getElementsByTagName("label")[1];


        // We add the breaklines to the DOM via inserting them
        var i = 1;

        // While we get a button, we add a breakline before its
        while(containerType.getElementsByTagName("button")[i] && i < 3) {

            var newBrType = document.createElement("br"); // We create a new breakline

            newBrType.setAttribute("id", "brType"+i);

            containerType.insertBefore(newBrType, containerType.getElementsByTagName("button")[i]);

            i++;

        }

        i = 1;

        while(containerPrice.getElementsByTagName("button")[i] && i < 4) {

            var newBrPrice = document.createElement("br");

            newBrPrice.setAttribute("id", "brPrice"+i);

            containerPrice.insertBefore(newBrPrice, containerPrice.getElementsByTagName("button")[i]);

            i++;

        }

        i = 1;

        while(containerStar.getElementsByTagName("button")[i] && i < 5) {

            var newBrStar= document.createElement("br");

            newBrStar.setAttribute("id", "brStar"+i);

            containerStar.insertBefore(newBrStar, containerStar.getElementsByTagName("button")[i]);

            i++;

        }

        var newBrDay= document.createElement("br");

        newBrDay.setAttribute("id", "brDay");

        console.log(inputDay.childNodes[0].parentNode);

        var day = inputDay.childNodes[0].parentNode;

        day.insertBefore(newBrDay, day);

        // Shrink the dropdown menu
        document.getElementsByClassName("dropdown-menu").item(0).style.width = "400px";

    }

}

function removeBr() {

    // We remove the breaklines if they exist
    for (var i = 1 ; i < 3 ; i++) {

        if(document.getElementById("brType"+i) !== undefined && document.getElementById("brType"+i) !== null) {

            document.getElementById("brType"+i).remove();

        }

    }

    for (var i = 1 ; i < 4 ; i++) {

        if(document.getElementById("brPrice"+i) !== undefined && document.getElementById("brPrice"+i) !== null) {

            document.getElementById("brPrice"+i).remove();

        }

    }

    for (var i = 1 ; i < 5 ; i++) {

        if(document.getElementById("brStar"+i) !== undefined && document.getElementById("brStar"+i) !== null) {

            document.getElementById("brStar"+i).remove();

        }

    }

    // Expand the dropdown menu
    document.getElementsByClassName("dropdown-menu").item(0).style.width = "460px";

}

/*####################################################################################################################*/
/*#### COPYRIGHTS @ NELLY BARRET & LOUIS LE BRUN - LIFPROJET 2018 ####################################################*/
/*####################################################################################################################*/