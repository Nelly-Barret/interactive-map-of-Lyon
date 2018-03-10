<nav class="navbar navbar-expand-sm navbar-light bg-dark">
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filters
                </a>
                <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                    <div class="dropdown-item">Type<div id="typeContainer"><button id="restaurantButton" type="button" class="btn btnType">Restaurant</button><button id="barButton" type="button" class="btn btnType">Bar</button><button id="barRestaurantButton" type="button" class="btn btnType">Bar-Restaurant</button></div><button type="button" class="btn btnRemove"><i class="fa fa-remove"></i></div>
                    <div class="dropdown-item">Price<div id="currencyContainer"><button id="priceButton1" type="button" class="btnPrice btn"><i class="fa fa-euro"></i></button><button id="priceButton2" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button id="priceButton3" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button id="priceButton4" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button type="button" class="btn btnRemove"><i class="fa fa-remove"></i></button></div></div>
                    <div class="dropdown-item">Rating<div class="starContainer" id="starContainer"><button type="button" id="starButton1" class="btnStar btn"><span class="fa fa-star"></span></button><button type="button" id="starButton2" class="btnStar btn"><span class="fa fa-star"></span></button><button type="button" id="starButton3" class="btnStar btn"><span class="fa fa-star"></span></button><button type="button" id="starButton4" class="btnStar btn"><span class="fa fa-star"></span></button><button type="button" id="starButton5" class="btnStar btn"><span class="fa fa-star"></span></button><button type="button" class="btn btnRemove"><i class="fa fa-remove"></i></button></div></div>
                    <div class="dropdown-item">

                        <div class="form-check checkbox-slider--b">
                            <label>
                                <input type="checkbox"><span>Around me</span>
                            </label>
                        </div>

                    </div>
                    <div class="dropdown-item">
                        <div class="form-check checkbox-slider--b">
                            <label>
                                <input type="checkbox"><span>Opened now</span>
                            </label>
                        </div></div>
                    <div class="dropdown-item"><button type="button" class="btn btn-success" id="go">Go</button><button type="button" class="btn btn-danger" id="resetFilters"><i class="fa fa-repeat"></i></button></div>
                </div>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button type="button" class="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form>
    </div>
</nav>

<script src="js/animations.js"></script>


