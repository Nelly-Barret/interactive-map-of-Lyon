<!-- when the window is larger than SM, the navbar expands -->
<nav class="navbar navbar-expand-sm navbar-light bg-dark" xmlns="http://www.w3.org/1999/html">
    <!-- toggler button for responsive navbar -->
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span><i class="fa fa-navicon"></i></span></button>

    <!-- the content of the navbar -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
                <button class="nav-link dropdown-toggle btn btn-default" data-toggle="dropdown" id="dropdownFilters" role="button" aria-expanded="false" aria-controls="dropdown-menu-collapse">Filters</button>
                <div class="dropdown-menu bg-dark" id="dropdown-menu-collapse" aria-labelledby="dropdownFilters">
                    <div class="dropdown-item">Type<div id="typeContainer"><button id="restaurantButton" type="button" class="btn btnType">Restaurant</button><button id="barButton" type="button" class="btn btnType">Bar</button><button id="barRestaurantButton" type="button" class="btn btnType">Bar-Restaurant</button><button id="restaurantButton" type="button" class="btn btnRemove"><i class="fa fa-remove"></i></button></div>
                    <div class="dropdown-item">Price<div id="currencyContainer"><button id="priceButton1" type="button" class="btnPrice btn"><i class="fa fa-euro"></i></button><button id="priceButton2" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button id="priceButton3" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button id="priceButton4" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button id="restaurantButton" type="button" class="btn btnRemove"><i class="fa fa-remove"></i></button></div>
                    <div class="dropdown-item">Rating<div class="starContainer" id="starContainer"><button type="button" id="starButton1" class="btnStar btn"><span class="fa fa-star"></span></button><button type="button" id="starButton2" class="btnStar btn"><span class="fa fa-star"></span></button><button type="button" id="starButton3" class="btnStar btn"><span class="fa fa-star"></span></button><button type="button" id="starButton4" class="btnStar btn"><span class="fa fa-star"></span></button><button type="button" id="starButton5" class="btnStar btn"><span class="fa fa-star"></span></button><button id="restaurantButton" type="button" class="btn btnRemove"><i class="fa fa-remove"></i></button></div></br>
                    <div class="dropdown-item">
                        <div class="form-check checkbox-slider--b">
                            <label>
                                <input type="checkbox" id="aroundMe"><span>Around me</span>
                            </label>
                        </div>
                    </div>
                    <div class="dropdown-item">
                        <div class="form-check checkbox-slider--b">
                            <label>
                                <input type="checkbox" id="openedNow"><span>Opened now</span>
                            </label>
                        </div>
                    </div>
                    <div class="dropdown-item">
                        Time: <input type="time" id="inputTime">
                    </div>
                    <!-- reset and go buttons -->
                    <div class="dropdown-item"><button type="button" class="btn btn-success" id="go">Go</button><button type="button" class="btn btn-danger" id="resetFilters"><i class="fa fa-repeat"></i></button></div>
                </div>
            </li>
        </ul>
        <?php include("search.php"); ?>
    </div>
</nav>


