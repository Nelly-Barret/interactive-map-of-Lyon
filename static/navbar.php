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
                        <button id="restaurantButton" type="button" class="btnRemove btn"><i class="fa fa-remove"></i></button>
                    </div>
                </div>
                <div class="dropdown-item">
                    <label for="currencyContainer">Price</label>
                    <div class="containerButtons" id="currencyContainer">
                        <button id="priceButton1" type="button" class="btnPrice btn"><i class="fa fa-euro"></i></button>
                        <button id="priceButton2" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button>
                        <button id="priceButton3" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button>
                        <button id="priceButton4" type="button" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button>
                        <button id="restaurantButton" type="button" class="btnRemove btn"><i class="fa fa-remove"></i></button>
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
                        <button id="restaurantButton" type="button" class="btnRemove btn"><i class="fa fa-remove"></i></button>
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
                    <label for="inputTime">Time : </label><input type="time" id="inputTime">
                </div>
                <!-- reset and go buttons -->
                <div class="dropdown-item">
                    <button type="button" class="btn btn-success" id="go">Go</button>
                    <button type="button" class="btn btn-danger" id="resetFilters"><i class="fa fa-repeat"></i></button>
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
                <div id="containerViews" class=" containerStyles"> <!-- class=" btn-group btn-group-toggle" data-toggle="buttons"-->
                    <!--<label class="btn active">
                        <input type="radio" class="btn" checked> Streets
                    </label>
                    <label class="btn">
                        <input type="radio" class="btn"> Light
                    </label>
                    <label class="btn">
                        <input type="radio" class="btn"> Dark
                    </label>
                    <label class="btn">
                        <input type="radio" class="btn"> Satellite
                    </label>-->

                    <button type="button" class="btn btnStyle" id="style0">Streets</button><button type="button" class="btn btnStyle" id="style1">Light</button><button type="button" class="btn btnStyle" id="style2">Dark</button><button type="button" class="btn btnStyle" id="style3">Satellite</button>

                </div>

                <label id="clusterButton" for="containerViews">Display</label>
                <div id="containerClusters">
                    <input type="radio" name="viewClust" id="viewPoints" checked="checked"><label id="clusterButton" for="viewPoints"> Points</label>
                    <input type="radio" name="viewClust" id="viewClusters"><label id="clusterButton" for="viewClusters"> Clusters</label>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal">Apply</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>


<!-- our JS -->
<script src="js/animations.js"></script>


