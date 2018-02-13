<!-- expand-* works for all screen's size -->
<nav class="navbar navbar-expand-* navbar-light bg-light" id="navMenu" role="navigation">
	<!-- the button is available if it's a mobile size -->
	<button class="navbar-toggler" type="button" id="togglerButton" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarContent">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item">
<!-- reseting the settings -->
				<button class="btn btn-secondary" href="">Home</button>
			</li>

			<li class="nav-item">
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownFilters" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Filters
					</button>
					<div id="dropdownMenu" class="dropdown-menu" aria-labelledby="dropdownFilters">
						<!-- filters -->
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

						<!--<a class="dropdown-item">Rating
							<div class="container alignLeft">
								<div class="row">
									<div class="col-lg-12">
										<!-- we couldn't have breaklines between buttons => childnodes returns #text --
										<div class="starContainer" id="starContainer"><button type="btn" class="btnStar btn"><span class="fa fa-star"></span></button><button type="btn" class="btnStar btn"><span class="fa fa-star"></span></button><button type="btn" class="btnStar btn"><span class="fa fa-star"></span></button><button type="btn" class="btnStar btn"><span class="fa fa-star"></span></button><button type="btn" class="btnStar btn"><span class="fa fa-star"></span></button></div>
									</div>
								</div>
							</div>
						</a>-->

						<a class="dropdown-item">Price
							<div class="container alignLeft">
								<!-- we create a new row which takes all the place to display the euro signs -->
								<div class="row">
									<div class="col-lg-12">
										<!-- we couldn't have breaklines between buttons => childnodes returns #text -->
										<div class="currencyContainer" id="currencyContainer"><button type="btn" class="btnPrice btn"><i class="fa fa-euro"></i></button><button type="btn" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button id="btnPriceBr" type="btn" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button><button type="btn" class="btnPrice btn"><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i><i class="fa fa-euro"></i></button></div>
									</div>
								</div>
							</div>
						</a>

						<a class="dropdown-item">
							<button class="btn btn-success alignLeft" id="go">Go</button>
						</a>
					</div>
				</div>
			</li>

			<!-- search box -->
			<li class="nav-item">
				<!-- data-target argument call the part of the code for displaying the modal -->
				<button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalSearch">
					Search <i class="fa fa-search"></i>
				</button>
			</li>
		</ul>
	</div>
</nav>

<!-- modal for search -->
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

<script type="text/javascript">
	
	var numberClick = 0;

	$(document).ready(function() {

		console.log($(window).width());

	});

	/* for all the items of the filters */
	$(".dropdown-item, .btnPrice").on('click', function (e) {
		
		e.stopPropagation(); /* to avoid that menu closes when clicking on an item */

	});


	/* color and un-color price buttons when clicking */
	$(".btnPrice, .btnStar").on('click', function() {

		if($(this).css("background-color") === 'rgb(221, 221, 221)') /* grey */
		{

			$(this).css("background-color", "rgb(0, 128, 0)");

		}

		else if($(this).css("background-color") === 'rgb(0, 128, 0)') /* green */
		{

			$(this).css("background-color", "rgb(221, 221, 221)");

		}

	});


	/* add a br between price buttons when the screen is too small */
	/*function addBr(mediaQuery) {
		
		if(mediaQuery.matches) {
			
			var newBr1 = document.createElement("br"); /* we create a new breakline *

			var newBr2 = document.createElement("br"); /* we create another breakline because we can't use the same twice *
			
			var containerPrice = document.getElementById("currencyContainer");

			//var containerStar = document.getElementById("starContainer");

			containerPrice.insertBefore(newBr1, containerPrice.childNodes[2]); /* we add the breakline before the third button for prices */

			//containerStar.insertBefore(newBr2, containerStar.childNodes[3]); /* we add the breakline before the third button */

			/* resize the dropdown menu for small screens *
			var dropdownMenu = document.getElementById("dropdownMenu");

			dropdownMenu.style.width = "200px";

		}

		else {
			
			//button.style.color = "green";

		}
	}

	var media = window.matchMedia("(max-width: 600px)"); /* media query *
	
	addBr(media); /* apply the function with the media query *
	
	media.addListener(addBr);*/

	$(window).resize(function() {

		console.log($("currencyContainer:has(br)").length);

		//the br doesn't exist and the window is small
		if($("#br1").length == 0 && window.matchMedia("(max-width: 500px)").matches) {

			var newBr1 = document.createElement("br"); /* we create a new breakline */

			newBr1.setAttribute("id", "br1");
			
			var containerPrice = document.getElementById("currencyContainer");

			containerPrice.insertBefore(newBr1, containerPrice.childNodes[2]); /* we add the breakline before the third button for prices */

			/* resize the dropdown menu for small screens */
			var dropdownMenu = document.getElementById("dropdownMenu");

			dropdownMenu.style.width = "200px";

		}

		//the br exists and the window is large
		else if($("#br1").length != 0 && window.matchMedia("(min-width: 501px)").matches) {

			document.getElementById("br1").remove();

			/* resize the dropdown menu for small screens */
			var dropdownMenu = document.getElementById("dropdownMenu");

			dropdownMenu.style.width = "350px";

		}

	});

</script>