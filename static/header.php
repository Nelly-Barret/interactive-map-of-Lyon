<!-- navbar-expand-sm defines the limit between the expandable navbar and the collapse version -->

<nav class="navbar navbar-expand-sm navbar-light bg-light" id="navMenu" role="navigation">
	<!-- the button is available if it's a mobile size -->
	<button class="navbar-toggler" type="button" id="tooglerButton" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
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
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownBar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Bar
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownBar">
						<!-- filters for bars -->
						<a class="dropdown-item" href="#">Around me</a>
						<a class="dropdown-item" href="#">Rating</a>
						<a class="dropdown-item" href="#">Price</a>
						<a class="dropdown-item" href="#">Type</a>
					</div>
				</div>
			</li>

			<li class="nav-item">
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownRestaurant" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Restaurant
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownRestaurant">
						<!-- filters for restaurants -->
						<a class="dropdown-item" href="#">Around me</a>
						<a class="dropdown-item" href="#">Rating</a>
						<a class="dropdown-item" href="#">Price</a>
						<a class="dropdown-item" href="#">Type</a>
					</div>
				</div>
			</li>

			<!-- search box -->
			<li class="nav-item">
<!-- my-2 my-lg-0 -->
				<form class="form-inline"> 
					<!-- data-target argument call the part of the code for displaying the modal -->
					<button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal">
						Search <i class="fa fa-search"></i>
					</button>
				</form>
			</li>
		</ul>
	</div>
</nav>

<!-- modal for search -->
<div class="modal fade" id="myModal" role="dialog">
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