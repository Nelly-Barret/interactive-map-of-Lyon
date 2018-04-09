<!-- when the window is larger than SM, the navbar expands -->
<nav class="navbar navbar-expand-sm">
    <!-- toggler button for responsive navbar -->
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent"><i class="fa fa-navicon"></i></button>

    <!-- the content of the navbar -->
    <div class="collapse navbar-collapse" id="navbarContent">
        <div class="nav-item dropdown">
            <button type="button" class="dropdown-toggle btn" data-toggle="dropdown" id="navFilterButton">Filters</button>
            <div class="dropdown-menu" id="dropdownFilters">
                <div class="dropdown-item">
                    <label for="typeContainer">Type</label>
                    <div class="containerButtons" id="typeContainer">
                        <button id="restaurantButton" type="button" class="btnType btn">Restaurant</button>
                        <button id="barButton" type="button" class="btnType btn">Bar</button>
                        <button id="barRestaurantButton" type="button" class="btnType btn">Bar-Restaurant</button>
                        <button id="restaurantButton" type="button" class="btnRemove btn" data-toggle="tooltip" data-placement="bottom" title="Reset type filter"><i class="fa fa-remove"></i></button>
                    </div>
                </div>
                <div class="dropdown-item">
                    <label for="currencyContainer">Price</label>
                    <div class="containerButtons" id="currencyContainer">
                        <button id="priceButton1" type="button" class="btnPrice btn"><i class="fa fa-euro"></i></button>
                        <button id="priceButton2" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button>
                        <button id="priceButton3" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button>
                        <button id="priceButton4" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button>
                        <button id="restaurantButton" type="button" class="btnRemove btn" data-toggle="tooltip" data-placement="bottom" title="Reset currency filter"><i class="fa fa-remove"></i></button>
                    </div>
                </div>
                <div class="dropdown-item">
                    <label for="starContainer">Rating</label>
                    <div class="containerButtons" id="starContainer">
                        <button type="button" id="starButton1" class="btnStar btn"><span class="fa fa-star"></span></button>
                        <button type="button" id="starButton2" class="btnStar btn"><span class="fa fa-star"></span></button>
                        <button type="button" id="starButton3" class="btnStar btn"><span class="fa fa-star"></span></button>
                        <button type="button" id="starButton4" class="btnStar btn"><span class="fa fa-star"></span></button>
                        <button type="button" id="starButton5" class="btnStar btn"><span class="fa fa-star"></span></button>
                        <button id="restaurantButton" type="button" class="btnRemove btn" data-toggle="tooltip" data-placement="bottom" title="Reset stars filter"><i class="fa fa-remove"></i></button>
                    </div>
                </div>
                <div class="dropdown-item">
                    <div class="form-check checkbox-slider--b">
                        <label for="aroundMe">
                            <input type="checkbox" id="aroundMe"><span>Around me</span>
                        </label>
                    </div>
                </div>
                <div class="dropdown-item">
                    <div class="form-check checkbox-slider--b">
                        <label for="openedNow">
                            <input type="checkbox" id="openedNow"><span>Opened now</span>
                        </label>
                    </div>
                </div>
                <div class="dropdown-item">
                    <label for"inputDay"> Opened on : </label>
                    <select id="inputDay">

                        <option value="-1" selected>Choose a day...</option>

                        <option value="1">Monday</option>

                        <option value="2">Tuesday</option>

                        <option value="3">Wednesday</option>

                        <option value="4">Thursday</option>

                        <option value="5">Friday</option>

                        <option value="6">Saturday</option>

                        <option value="0">Sunday</option>

                    </select>

                  <label for="inputTime">or/and at : </label>
                  <input type="time" id="inputTime">

                </div>
                <!-- reset and go buttons -->
                <div class="dropdown-item">
                    <button type="button" class="btn btn-success" id="go" data-toggle="tooltip" data-placement="bottom" title="Display results">Go</button>
                    <button type="button" class="btn btn-danger" id="resetFilters"><i class="fa fa-trash" data-toggle="tooltip" data-placement="bottom" title="Reset all filters"></i></button>
                </div>
            </div>
        </div>

        <div class="nav-item divSearch">
            <?php include("search.php"); ?>
        </div>

        <div class="nav-item divGear">
            <button type="button" class="btn" id="parameters" data-toggle="modal" data-target="#modalParameters"><i class="fa fa-gear"></i></button>
        </div>
    </div>
</nav>

<!-- modal -->
<div id="modalParameters" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">Parameters</h1>
                <button type="button" class="close" data-dismiss="modal" style="position:absolute; right:10px;">&times;</button>
            </div>
            <div class="modal-body">
                <label id="mapStyleButton" for="containerViews">Map style</label>
                <div id="containerViews" class=" containerStyles">
                    <button type="button" class="btn btnStyle" id="style0">Basic</button><button type="button" class="btn btnStyle" id="style1">Streets</button><button type="button" class="btn btnStyle" id="style2">Light</button><button type="button" class="btn btnStyle" id="style3">Dark</button><button type="button" class="btn btnStyle" id="style4">Satellite</button>
                </div>

                <label id="clusterButton" for="containerViews">Display</label>
                <div id="containerClusters">
                    <input type="radio" name="viewClusters" id="viewClusters" checked="checked"><label for="viewClusters"> Clusters</label>
                    <input type="radio" name="viewClusters" id="viewPoints"><label for="viewPoints"> Points</label>
                </div>
            </div>
        </div>
    </div>
</div>

<div id='legend' style="visibility: hidden">
    <h4>Points</h4>
    <div id="legendCircleBar"></div><div class="colorP">Bar</div>
    <div id="legendCircleBarRestaurant"></div><div class="colorP">Bar-Restaurant</div>
    <div id="legendCircleRestaurant"></div><div class="colorP">Restaurant</div>
</div>


<!-- our JS -->
<script src="js/animations.js"></script>


