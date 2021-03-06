<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		
		<title>Interactive map of Lyon</title>

		<!-- Don't change the order else it won't work -->
		
		<!-- Latest compiled and minified CSS (Bootstrap) -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

		<!-- CSS for Bootstrap toggle -->
		<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">

		<!-- font-awsome for icons (search...) -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

		<!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

		<!-- JS for Bootstrap toggle -->
		<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

		<!-- our CSS -->
		<link rel="stylesheet" type="text/css" href="css/styles.css">


		<!-- Mapbox -->
		<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.0/mapbox-gl.js'></script>

		<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.0/mapbox-gl.css' rel='stylesheet' />
		

		<!-- Google Places -->
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPv7VFQeI_dNWfE-Y8IXIywMzEzSkNd28&libraries=places"></script>
	</head>

	<body class="container-fluid">
		<?php include("static/header.php"); ?>
		
		<div id="map" style="width: 100%; height: 100%;">
		</div>

		<script src="js/map.js"></script>
	</body>
</html>