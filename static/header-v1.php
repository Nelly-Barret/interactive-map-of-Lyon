<!-- navbar-expand-md defined the limit between the expandable navbar and the mobile version -->
<nav class="navbar navbar-expand-md navbar-light bg-light" role="navigation">
  <!-- the button is available if it's a mobile size -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li>
        <div class="dropdown col-lg-5">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownRestaurant" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Restaurant
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownRestaurant">
            <a class="dropdown-item" href="#">Around me</a>
            <a class="dropdown-item" href="#">Rating</a>
            <a class="dropdown-item" href="#">Price</a>
            <a class="dropdown-item" href="#">Type</a>
          </div>
        </div>
      </li>

      <li>
        <div class="dropdown col-lg-5">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownBar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Bar
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownBar">
            <a class="dropdown-item" href="#">Around me</a>
            <a class="dropdown-item" href="#">Rating</a>
            <a class="dropdown-item" href="#">Price</a>
            <a class="dropdown-item" href="#">Type</a>
          </div>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<br>
<br>
<br>
