<!-- expand-* works for all screen's size -->
<nav class="navbar navbar-expand-* navbar-light bg-light" id="navMenu" role="navigation">
    <!-- the button is available if it's a mobile size -->
    <button class="navbar-toggler" type="button" id="togglerButton" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>Filters</span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mr-auto">
            <!--<li class="nav-item">
                <button class="btn btn-secondary" href="" id="home">Home</button>
            </li>-->

            <li class="nav-item">
                <!--<div class="dropdown">-->
                    <!--<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownFilters" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filters
                    </button>-->
                    <div class="dropdown-toggle" id="dropdownMenu" aria-labelledby="dropdownFilters" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                        <!-- filters -->
                        <a class="dropdown-item">Type
                            <div class="container alignLeft">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div id="typeContainer"><button id="restaurantButton" type="button" class="btn btnType">Restaurant</button><button id="barButton" type="button" class="btn btnType">Bar</button><button id="barRestaurantButton" type="button" class="btn btnType">Bar-Restaurant</button></div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="dropdown-item">Price
                            <div class="container alignLeft">
                                <!-- we create a new row which takes all the place to display the euro signs -->
                                <div class="row">
                                    <div class="col-lg-12">
                                        <!-- we couldn't have breaklines between buttons => childnodes returns #text -->
                                        <div id="currencyContainer"><button id="priceButton1" type="btn" class="btnPrice btn"><i class="fa fa-euro"></i></button><button id="priceButton2" type="btn" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button id="priceButton3" type="btn" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button id="priceButton4" type="btn" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="dropdown-item">Rating
                            <div class="container alignLeft">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <!-- we couldn't have breaklines between buttons => childnodes returns #text -->
                                        <div class="starContainer" id="starContainer"><button type="btn" id="starButton1" class="btnStar btn"><span class="fa fa-star"></span></button><button type="btn" id="starButton2" class="btnStar btn"><span class="fa fa-star"></span></button><button type="btn" id="starButton3" class="btnStar btn"><span class="fa fa-star"></span></button><button type="btn" id="starButton4" class="btnStar btn"><span class="fa fa-star"></span></button><button type="btn" id="starButton5" class="btnStar btn"><span class="fa fa-star"></span></button></div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="dropdown-item smallLink">
                            <div>
                                <p id="aroundMe" class="inlineBlock movedRight">Around me</p>
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </a>

                        <a class="dropdown-item smallLink">
                            <div>
                                <p id="openedNow" class="inlineBlock">Opened now</p>
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </a>

                        <a class="dropdown-item">
                            <button class="btn btn-success" id="go">Go</button>
                            <button class="btn btn-danger" id="resetFilters"><i class="fa fa-repeat"></i></button>
                        </a>
                    </div>
                <!--</div>-->
            </li>

            <!-- search box --
            <li class="nav-item">
                <!-- data-target argument call the part of the code for displaying the modal --
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalSearch">
                    Search <i class="fa fa-search"></i>
                </button>
            </li>-->
        </ul>
    </div>
</nav>

<!-- modal for search
<div class="modal fade" id="modalSearch" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Search</h4>
            </div>

            <div class="modal-body">
                <input class="form-control mr-sm-2" type="search" placeholder="Type here your search..." aria-label="Search">
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-success">Search</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
-->

<script src="js/animations.js"></script>


