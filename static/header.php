<nav class="navbar navbar-expand-xl navbar-light bg-light" id="navMenu" role="navigation">
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
					<div class="dropdown-menu" aria-labelledby="dropdownFilters">
						<!-- filters -->
						<a class="dropdown-item">Around me</a>
						<a class="dropdown-item" class="disableSelection">Rating
							<div class="container">
								<div class="row">
									<div class="col-lg-12">
										<div class="star-rating">
											<span class="fa fa-star checked"></span>
											<span class="fa fa-star checked"></span>
											<span class="fa fa-star checked"></span>
											<span class="fa fa-star"></span>
											<span class="fa fa-star"></span>
										</div>
									</div>
								</div>
							</div>
						</a>
						<a class="dropdown-item">Price
							<div class="container">
								<!-- we create a new row which takes all the place to display the euro signs -->
								<div class="row">
									<div class="col-lg-12">
										<div class="currencyContainer">
											<button type="btn" class="btnPrice btn">
												<i class="fa fa-euro"></i>
											</button>
											<button type="btn" class="btnPrice btn">
												<i class="fa fa-euro"></i>
												<i class="fa fa-euro"></i>
											</button>
											<button type="btn" class="btnPrice btn">
												<i class="fa fa-euro"></i>
												<i class="fa fa-euro"></i>
												<i class="fa fa-euro"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</a>
						<a class="dropdown-item">
							<p class="inlineBlock">Opened now</p>
							<input type="checkbox" checked data-toggle="toggle" data-onstyle="success">
						</a>
						<a>
							<button class="btn btn-success" id="go">Go</button>
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
	
	/* for all the items of the filters */
	$(".dropdown-item").on('click', function (e) {
	  e.stopPropagation(); /* to avoid that menu closes when clicking on an item */
	});

	function colorUncolor(element, clicked)
	{
		if(clicked) {
			element.style.color = "red";
		}

		else {
			element.style.color = "green";
		}
	}

	/* color and uncolor buttons */
	$(".btnPrice").on('click', function(clicked) {
		var color = clicked ? 'green' : 'blue';
		
		$(this).css('background-color', color);
		clicked = !clicked;
	});





</script>