
var bars;

var restaurants;

var barsRestaurants;

var googlePlacesAPIService; // Service for API request executions

var userCoordinates;        // User's coordinates

var searchOptions = 0;      // Search options: 0 = no filter ; 1 = Bars ; 2 = Restaurants

var map;                    // The map generated by mapbox

var userPositionMarker;     // Marker associated with user's location

var placesRequest;          // Google places API request

var placeInformations;      // Informations about places: contains ID, latitude and longitude, address, rating, name, etc...

var requestItemsNumber;     // Number of items requested

var counter;                // Simple counter for tasks

var fetchedBars = [];

var fetchedRestaurants = [];

var fetchedBarRestaurants = [];

var barsString = "";

var restaurantsString = "";

var barsRestaurantsString = "";

var latVariance = 0.001764; // Latitude difference to get to an other sector // Base = 0.000882

var lngVariance = 0.002560; // Longitude difference to get to an other sector // Base = 0.001280

var mapGridBounds = {

	topLatitude : 45.788347,

	bottomLatitude : 45.732777,

	leftLongitute : 4.791173,

	rightLongitude : 4.871854

};

//############################################################//
//Main

init();

//cleanGeoJSON();


/*
var nb = 0;

loadBarsJSON( callback );

loadBarsRestaurantsJSON( callback );

loadRestaurantsJSON( callback );
*/
function callback() {

	nb ++;

	if( nb === 3 )
		generateGeoJSON();

}

//googlePlacesAPIService = new google.maps.places.PlacesService( document.createElement( 'div' ) );

/*
if( allPlacesId.length === 0 ) {

	fetchAllPlaceRadar( 1000 );

} else if ( restaurants.lenght ) {

	getDetailsAfterRadar( allPlacesId, 1000 );

}*/
function loadBarsJSON( callback ) {

	var xobj = new XMLHttpRequest();

	xobj.overrideMimeType( "application/json" );

	xobj.open( 'GET', 'JSON/bars.json', true );

	xobj.onreadystatechange = function () {

		if ( xobj.readyState === 4 && xobj.status == "200" ) {

			bars = xobj.responseText;

			console.log( "retrieved Bars" );

			callback();

		}

	};

	xobj.send( null );

}

function loadRestaurantsJSON( callback ) {

	var xobj = new XMLHttpRequest();

	xobj.open( 'GET', 'JSON/restaurants.json', true );

	xobj.onreadystatechange = function () {

		if ( xobj.readyState === 4 && xobj.status == "200" ) {

			restaurants = xobj.responseText;

			console.log( "retrieved Restaurants" );

			callback();

		}

	};

	xobj.send( null );

}

function loadBarsRestaurantsJSON( callback ) {

	var xobj = new XMLHttpRequest();

	xobj.open( 'GET', 'JSON/barsRestaurants.json', true );

	xobj.onreadystatechange = function () {

		if ( xobj.readyState === 4 && xobj.status == "200" ) {

			barsRestaurants = xobj.responseText;

			console.log( "retrieved Bars-Restaurants" );

			callback();

		}

	};

	xobj.send( null );

}

//############################################################//
// Init function : set base user's coordinates, create the map, track user's position

function init(){

// Initialisation of user's location with coordinates of Lyon near Bellecour

	userCoordinates = {

		userLatitude : 45.75717800533178,

		userLongitude : 4.83480298193669

	};

// Mapbox generation with API key authentication

	map = mapInitialisation( userCoordinates );

	map.on( 'click', function ( element ) {

		var features = map.queryRenderedFeatures( element.point, {
			layers: ['barPlaceSymbol', 'restaurantPlaceSymbol', 'barRestaurantPlaceSymbol'] // replace this with the name of the layer
		} );

		if ( !features.length ) {
			return;
		}

		var feature = features[0];

		createPopupForSymbol( feature );

	} );

	var goButton = document.getElementById( "go" );

	goButton.addEventListener( "click", function () {

		var activeLayers = ['restaurantPlaceSymbol', "barPlaceSymbol", "barRestaurantPlaceSymbol"];

		for( var i in activeLayers )
		{

			//map.setFilter( activeLayers[i], ['==', 'rating', 4] );

			filterMap();

		}

	} );

}

function mapInitialisation( userCoordinates ) {

	mapboxgl.accessToken = 'pk.eyJ1IjoiYWd0ZXJyYWwiLCJhIjoiY2pkMjRnbjJkNWYwZDJ4bGdwMWlxODJiYSJ9.4W9g-Go5vHpL9UZmjnGj4g';

	map = new mapboxgl.Map( {

		container: 'map',

		center: [ userCoordinates.userLongitude, userCoordinates.userLatitude ],

		zoom: 13,

		style: 'mapbox://styles/mapbox/basic-v9'

	} );

	map.addControl( new mapboxgl.GeolocateControl( {

		positionOptions: {

			enableHighAccuracy: true

		},

		trackUserLocation: true

	} ) );

	// disable map rotation using right click + drag
	map.dragRotate.disable();

	// disable map rotation using touch rotation gesture
	map.touchZoomRotate.disableRotation();

	map.on( 'load', function () {

		map.addSource( "places", {
			type: "geojson",
			data: "JSON/places.geojson",
			cluster: true,
			clusterMaxZoom: 17, // Max zoom to cluster points on
			clusterRadius: 75 // Radius of each cluster when clustering points (defaults to 50)
		} );

		map.addLayer( {
			id: "clusters",
			type: "circle",
			source: "places",
			filter: ["has", "point_count"],
			paint: {
				"circle-color": [
					"step",
					["get", "point_count"],
					"#51bbd6",
					100,
					"#e9f154",
					750,
					"#f25525"
				],
				"circle-radius": [
					"step",
					["get", "point_count"],
					20,
					100,
					30,
					750,
					40
				]
			}
		} );

		map.addLayer( {
			id: "cluster-count",
			type: "symbol",
			source: "places",
			filter: ["has", "point_count"],
			layout: {
				"text-field": "{point_count_abbreviated}",
				"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
				"text-size": 12
			}
		} );

		map.loadImage( 'Assets/barIcon.png', function( error, image ) {

			map.addImage( 'barIcon', image );

		} );

		map.addLayer( {
			id: "barPlaceSymbol",
			type: "symbol",
			source: "places",
			filter : ['==', 'type', "Bar"],
			layout: {
				"text-field": "{name}",
				"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
				"text-offset": [0, 0.6],
				"text-anchor": "top",
				"icon-image": "barIcon",
				"icon-size" : 0.3,
				"visibility" : 'visible',
				"icon-allow-overlap" : true,
				"text-allow-overlap" : true

			},
			paint: {
				"text-halo-color": "rgba(0,0,0,1)"
			}
		} );

		map.loadImage( 'Assets/restaurantIcon.png', function( error, image ) {

			map.addImage( 'restaurantIcon', image );

		} );

		map.addLayer( {
			id: "restaurantPlaceSymbol",
			type: "symbol",
			source: "places",
			filter : ['==','type', 'Restaurant'],
			layout: {
				"text-field": "{name}",
				"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
				"text-offset": [0, 0.6],
				"text-anchor": "top",
				"icon-image": "restaurantIcon",
				"icon-size" : 0.3,
				"visibility" : 'visible',
				"icon-allow-overlap" : true,
				"text-allow-overlap" : true
			},
			paint: {
				"text-halo-color": "rgba(0,0,0,1)"
			}
		} );

		map.loadImage( 'Assets/cafeIcon.png', function( error, image ) {

			map.addImage( 'barRestaurantIcon', image );

		} );

		map.addLayer( {
			id: "barRestaurantPlaceSymbol",
			type: "symbol",
			source: "places",
			filter : ['==', 'type', 'Bar-restaurant'],
			layout: {
				"text-field": "{name}",
				"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
				"text-offset": [0, 0.6],
				"text-anchor": "top",
				"icon-image": "barRestaurantIcon",
				"icon-size" : 0.3,
				"visibility" : 'visible',
				"icon-allow-overlap" : true,
				"text-allow-overlap" : true
			},
			paint: {
				"text-halo-color": "rgba(0,0,0,1)"
			}
		} );

	} );


// Update user's location

	getUserLocation();

// Creation of user marker on map

	userPositionMarker = new mapboxgl.Marker().setLngLat( [userCoordinates.userLongitude, userCoordinates.userLatitude] );

	var markerHeight = 50, markerRadius = 10, linearOffset = 25;

	var popupOffsets = {
		'top': [0, 0],
		'top-left': [0,0],
		'top-right': [0,0],
		'bottom': [0, -markerHeight],
		'bottom-left': [linearOffset, ( markerHeight - markerRadius + linearOffset ) * -1],
		'bottom-right': [-linearOffset, ( markerHeight - markerRadius + linearOffset ) * -1],
		'left': [markerRadius, ( markerHeight - markerRadius ) * -1],
		'right': [-markerRadius, ( markerHeight - markerRadius ) * -1]
	};

	var popup = new mapboxgl.Popup( {offset:popupOffsets, closeButton: false} )
		.setLngLat( [userCoordinates.userLongitude, userCoordinates.userLatitude] )
		.setHTML( "<h3 id='youAreHere' >You are here</h3>" )
		.addTo( map );

	userPositionMarker.setPopup( popup );

	userPositionMarker.addTo( map );

	var location = new mapboxgl.LngLat( userCoordinates.userLongitude, userCoordinates.userLatitude );

	var coords = {

		latitude : location.lat,

		longitude : location.lng

	};

	var pos = {

		coords : coords

	};

	setUserCoordinates( pos );

	googlePlacesAPIService = new google.maps.places.PlacesService( document.createElement( 'div' ) );

	return map;

}

//############################################################//
// getUserLocation : retrieves the user's location and watch location changes

function getUserLocation()
{

	map.setCenter( [userCoordinates.userLongitude, userCoordinates.userLatitude] );

	if( navigator.geolocation )
	{

		navigator.geolocation.watchPosition( setUserCoordinates );

	}

}

//############################################################//
// setUserCoordinates : fix the userCoordinates properties, center the map on the user's location and update the marker

function setUserCoordinates( position ) {

	userCoordinates.userLatitude = position.coords.latitude;

	userCoordinates.userLongitude = position.coords.longitude;

	userPositionMarker.setLngLat( [userCoordinates.userLongitude, userCoordinates.userLatitude] );

	var location = new mapboxgl.LngLat( userCoordinates.userLongitude, userCoordinates.userLatitude );

	// getPlacesOffline( location, 4, 4, searchOptions );

}

function createPopupForSymbol( feature ) {

	placeInformations = {

		"adress" : null,

		"icon" : null,

		"id" : null,

		"name" : null,

		"opened" : null,

		"phone" : null,

		"rating" : null,

		"type" : null,

		"types" : null,

		"weekday_text" : null,

		"website" : null

	};

	placeInformations = feature.properties;

	new mapboxgl.Popup( { offset: [0, -15] } )
		.setLngLat( feature.geometry.coordinates )
		.setHTML( createMarkerPopupHTML( placeInformations ) )
		.setLngLat( feature.geometry.coordinates )
		.addTo( map );

}

function createMarkerPopupHTML( place ) {

	var state = "closed";

	if ( place.opened )
	{

		state = "opened";

	}

	var html = "";

	html += "<p id='popupTitle'>" + place.name + "</p>";
	html += "<p id='popupType'>" + place.type + "</p>";

	if( place.rating != null ) {
		html += "<p id='popupRating'>";

		var i;

		for( i = 1 ; i < place.rating ; i++ ) {

			/* add full stars */
			html += "<i class=\"fa fa-star\"></i>";

		}

		for( var j = i ; j <= 5 ; j++ ) {

			/* add empty stars */
			html += "<i class=\"fa fa-star-o\"></i>";

		}

		html += "</p>";
	}

	html += "<br><p id='popupAddress'><i class='fa fa-street-view'></i><a target='_blank' href='https://www.google.com/maps/dir/?api=1&origin=" + userCoordinates.userLatitude + ',' + userCoordinates.userLongitude + "&destination=QVB&destination_place_id=" + place.id + "&travelmode=walking'>" + place.adress + "</a></p>";

	if( place.website != null )
		html += "<br><p id='popupWebsite'><i class='fa fa-at'></i><a target=\"_blank\" href=\"" + place.website + "\">Website</a></p>";

	if( place.phone != null )
		html += "<br><p id='popupPhone'><i class='fa fa-phone'></i><a href=\"tel:" + place.phone + "\">" + place.phone + "</a></p>";

	if( place.weekday_text != null ) {

		var days = JSON.parse( place.weekday_text );

		if ( days != null ) {

			/* creating a object Date to get the current day */
			var d = new Date();
			var day = d.getDay();

			console.log("day = " + day);

			html += "<br><p id='popupWeekday'>";


			//In JavaScript, the first day of the week (0) means Sunday
			// getDay()			days[]
			// 0 Sunday			Monday
			// 1 Monday			Tuesday
			// 2 Tuesday		Wednesday
			// 3 Wednesday		Thursday
			// 4 Thursday		Friday
			// 5 Friday			Saturday
			// 6 Saturday		Sunday

			str = days[day];
			//str.indexOf( ': ' )+2 => starts after ': '

			if( day === 0 ) {

				str = days[6];

            }

            else {

				str = days[day-1];

            }


            html += "<p class='day'><i class='fa fa-clock-o'></i>Today: " + str.substring( str.indexOf( ': ' )+2, str.length ) + "</p>\n";

			html += "</p>";

		}

	}

	return html;

}

//############################################################//
// Tests functions

function checkIfPlaceIsBar( place ) {

	for( var i = 0 ; i < place.types.length ; i++ )
	{

		if ( place.types[i] === "bar" )
			return true;

	}

	return false;

}

function checkIfPlaceIsRestaurant( place ) {

	for( var i = 0 ; i < place.types.length ; i++ )
	{

		if ( place.types[i] === "restaurant" )
			return true;

	}

	return false;

}

//############################################################//
// Offline functions

//############################################################//
// Function that crawls over Lyon to fetch sectors

function fetchAllPlaceRadar( timeInterval ) {

	allPlacesId = [];

	counter = 0;

	var lngStep = lngVariance * 7;

	var latStep = latVariance * 7;


	var baseBounds = {

		north: 45.788347,

		west: 4.791173,

		south: 45.788347 - latStep,

		east: 4.791173 + lngStep

	};

	var bounds = {

		north: 45.788347,

		west: 4.791173,

		south: 45.788347 - latStep,

		east: 4.791173 + lngStep

	};

	var i = 1;

	console.log( "Crawling on lyon..." );

	var interval = setInterval( function () {

		if ( bounds.north < mapGridBounds.bottomLatitude - latVariance ) {

			clearInterval( interval );

		}

		var sw = new google.maps.LatLng( bounds.south.toFixed( 6 ), bounds.west.toFixed( 6 ) );

		var ne = new google.maps.LatLng( bounds.north.toFixed( 6 ), bounds.east.toFixed( 6 ) );

		var radarBounds = new google.maps.LatLngBounds( sw, ne );

		placesRequest = {

			bounds : radarBounds,

			type : "bar"

		};

		googlePlacesAPIService.radarSearch( placesRequest, function ( results, status ) {

			radarSquareCallBack( results, status, allPlacesId, i );

		} );

		placesRequest = {

			bounds : radarBounds,

			type : "restaurant"

		};

		googlePlacesAPIService.radarSearch( placesRequest, function ( results, status ) {

			radarSquareCallBack( results, status, allPlacesId, i );

		} );

		// test markers
		/*
				console.log( bounds );

				var position = new mapboxgl.LngLat( bounds.west.toFixed( 6 ), bounds.north.toFixed( 6 ) );

				new  mapboxgl.Marker().setLngLat( position ).addTo( map );

				position = new mapboxgl.LngLat( bounds.west.toFixed( 6 ), bounds.south.toFixed( 6 ) );

				new  mapboxgl.Marker().setLngLat( position ).addTo( map );

				position = new mapboxgl.LngLat( bounds.east.toFixed( 6 ), bounds.north.toFixed( 6 ) );

				new  mapboxgl.Marker().setLngLat( position ).addTo( map );

				position = new mapboxgl.LngLat( bounds.east.toFixed( 6 ), bounds.south.toFixed( 6 ) );

				new  mapboxgl.Marker().setLngLat( position ).addTo( map );
		*/

		if ( bounds.west > mapGridBounds.rightLongitude ) {

			bounds.west = baseBounds.west;

			bounds.east = bounds.west + lngStep;

			bounds.north -= latStep;

			bounds.south -= latStep;

		} else {

			bounds.west += lngStep;

			bounds.east += lngStep;

		}

		i++;

	}, timeInterval );

	setTimeout( function () {

		console.log( "All data retrieved" );

		getDetailsAfterRadar( allPlacesId, 2000 );

	}, timeInterval * 31 + 1000 );

}

function radarSquareCallBack( results, status, array, i ) {

	i--;

	console.log( "Fetching zones : " + i + " / 31 ... Status : " + status );

	if( status === google.maps.places.PlacesServiceStatus.OK )
	{

		// console.log( results );

		for( var i = 0 ; i < results.length ; i++ ) {

			array.push( results[i]["place_id"] );

		}

	}

	//console.log( array.toString() );

}

function getDetailsAfterRadar( placeIds, timeInterval ) {

	var i = 2931;

	var interval = setInterval( function () {

		if ( i % 100 === 0 ){

			console.log( "Bars : " );
			console.log( fetchedBars );
			console.log( "Bar Restaurants : " );
			console.log( fetchedBarRestaurants );
			console.log( "Restaurants : " );
			console.log( fetchedRestaurants );
			console.log( "Total : " );
			console.log( fetchedBarRestaurants.length + fetchedBars.length + fetchedRestaurants.length );

		}

		if( i >= placeIds.length ) {


			clearInterval( interval );

			for( var j = 0 ; j < fetchedBars.length ; j ++ ) {

				barsString += JSON.stringify( fetchedBars[j] );

				if( j !== fetchedBars.length - 1 ) {

					barsString += ",";

				}

			}

			for( j = 0 ; j < fetchedRestaurants.length ; j ++ ) {

				restaurantsString += JSON.stringify( fetchedRestaurants[j] );

				if( j !== fetchedRestaurants.length - 1 ) {

					restaurantsString += ",";

				}

			}

			for( j = 0 ; j < fetchedBarRestaurants.length ; j ++ ) {

				barsRestaurantsString += JSON.stringify( fetchedBarRestaurants[j] );

				if( j !== fetchedBarRestaurants.length - 1 ) {

					barsRestaurantsString += ",";

				}

			}

			return;

		}

		var detailsRequest = {

			placeId : placeIds[i]

		};

		googlePlacesAPIService.getDetails( detailsRequest, function ( results, status ) {

			if( status === "OVER_QUERY_LIMIT" ) {

				console.log( "State " + i + ", interruption" );

				clearInterval( interval );

				for( var j = 0 ; j < fetchedBars.length ; j ++ ) {

					barsString += JSON.stringify( fetchedBars[j] );

					if( j !== fetchedBars.length - 1 ) {

						barsString += ",";

					}

				}

				for( j = 0 ; j < fetchedRestaurants.length ; j ++ ) {

					restaurantsString += JSON.stringify( fetchedRestaurants[j] );

					if( j !== fetchedRestaurants.length - 1 ) {

						restaurantsString += ",";

					}

				}

				for( j = 0 ; j < fetchedBarRestaurants.length ; j ++ ) {

					barsRestaurantsString += JSON.stringify( fetchedBarRestaurants[j] );

					if( j !== fetchedBarRestaurants.length - 1 ) {

						barsRestaurantsString += ",";

					}

				}

			} else {

				getDetailsCallback( results, status, fetchedBars, fetchedRestaurants, fetchedBarRestaurants, i, placeIds.length );

			}

		} );

		i++;

	}, timeInterval );

	setTimeout( function () {

		console.log( "All details retrieved" );

	}, timeInterval * placeIds.length + 1000 );

}

//############################################################//
// getPlacesOffline


//############################################################//
// Filter functions

function filterFunction( value, location, price, rating ) {

	var trueLatitude = Math.abs( location.lat - value.coordinates.lat ) <= latVariance/2;

	var trueLongitude = Math.abs( location.lng - value.coordinates.lng ) <= lngVariance/2;

	return trueLatitude && trueLongitude;

}

//############################################################//
// Offline callbacks

function fetchCallBack( results, status )
{

	if( status === google.maps.places.PlacesServiceStatus.OK )
	{

		//   console.log( results[0]['opening_hours']['weekday_text'] );

		counter += results.length;

		// console.log( results.length );

		// console.log( results );

		for ( var i = 0 ; i < results.length ; i++ ) {

			var actualPlace = results[i];

			placeInformations = {

				"id" : actualPlace['place_id'],

				"coordinates" : actualPlace['geometry']['location'],

				"adress" : actualPlace['vicinity'],

				"rating" : actualPlace['rating'],

				"opened" : null,

				"name" : actualPlace ['name'],

				"type" : null,

				"types" : actualPlace['types'],

				"icon" : actualPlace['icon'],

				"opening_hours" : actualPlace['opening_hours']

			};

			if( actualPlace['opening_hours'] )
				placeInformations.opened = actualPlace['opening_hours']['open_now'];

			var isBar = checkIfPlaceIsBar( actualPlace );

			var isRestaurant = checkIfPlaceIsRestaurant( actualPlace );

			if( isBar && isRestaurant )
			{

				placeInformations.type = "Bar-restaurant";

			}
			else if ( isBar )
			{

				placeInformations.type = "Bar";

			}
			else if ( isRestaurant )
			{

				placeInformations.type = "Restaurant";

			}

			if ( isBar && isRestaurant )
				barsRestaurants += JSON.stringify( placeInformations ) + ",";
			else if ( isBar )
				bars += JSON.stringify( placeInformations ) + ",";
			else
				restaurants += JSON.stringify( placeInformations ) + ",";

		}

	}

}

//############################################################//


// updateJSONDataFile : update the JSON data file with nearby places

function getAllPlaceIDs() {

	requestItemsNumber = 0;

	counter = 0;

	var location = new google.maps.LatLng( userCoordinates.userLatitude, userCoordinates.userLongitude );

	placesRequest = {

		location : location,

		radius : 3000,

		type : "bar"

	};

	googlePlacesAPIService.radarSearch( placesRequest, callbackPlacesID );

	placesRequest = {

		location : location,

		radius : 3000,

		type : "restaurant"

	};

	googlePlacesAPIService.radarSearch( placesRequest, callbackPlacesID );

}

function callbackPlacesID( results, status, callback ) {

	if ( status === google.maps.places.PlacesServiceStatus.OK ) {

		requestItemsNumber += results.length;

		console.log( results.length );

		barsRestaurants = "[";

		bars = "[";

		restaurants = "[";

		for ( var i = 0 ; i < results.length ; i++ )
		{

			var coordinates = JSON.stringify( results[i]['geometry']['location'] );

			createSimpleMarker( coordinates );

			var detailsRequest = {

				placeId : results[i]["place_id"]

			};

			requestingInterval = setInterval( googlePlacesAPIService.getDetails( detailsRequest, getDetailsCallback ), 1000 );

		}

	}

}

function generateGeoJSON(){

	var parsedBars = JSON.parse( bars );

	var parsedRestaurants = JSON.parse( restaurants );

	var parsedBarRestaurants = JSON.parse( barsRestaurants );

	var geoJSONString = "{\"type\" : \"FeatureCollection\", \"features\":[";

	var geoJSONItem = {

		"type": "Feature",

		"geometry": {

			"type": "Point",

			"coordinates": [null, null]

		},

		"properties": {

			"adress" : null,

			"icon" : null,

			"id" : null,

			"name": null,

			"opened" : null,

			"rating" : null,

			"type" : null,

			"types" : null,

			"website" : null,

			"weekday_text" : null,

			"phone" : null

		}

	};

	for( var i = 0 ; i < parsedBars.length ; i++ ) {

		geoJSONItem.geometry.coordinates = [parsedBars[i]["coordinates"]["lng"], parsedBars[i]["coordinates"]["lat"]];

		geoJSONItem.geometry.name = parsedBars[i]["name"];

		geoJSONItem.properties.id = parsedBars[i].id;

		geoJSONItem.properties.name = parsedBars[i].name;

		geoJSONItem.properties.type = parsedBars[i].type;

		geoJSONItem.properties.types = parsedBars[i].types;

		geoJSONItem.properties.adress = parsedBars[i].adress;

		geoJSONItem.properties.rating = parsedBars[i].rating;

		geoJSONItem.properties.icon = "Assets/barIcon.png";

		if( parsedBars[i].phone != null ) {

			geoJSONItem.properties.phone = parsedBars[i].phone;

		}

		if( parsedBars[i]["weekday_text"] != null ) {

			geoJSONItem.properties.weekday_text = parsedBars[i].weekday_text;

		}

		if( parsedBars[i].website != null ) {

			geoJSONItem.properties.website = parsedBars[i].website;

		}

		geoJSONString += JSON.stringify( geoJSONItem );

		if( i < parsedBars.length - 1 )

			geoJSONString +=  ',';

	}

	geoJSONString += ',';

	for( var i = 0 ; i < parsedBarRestaurants.length ; i++ ) {

		geoJSONItem.geometry.coordinates = [parsedBarRestaurants[i]["coordinates"]["lng"], parsedBarRestaurants[i]["coordinates"]["lat"]];

		geoJSONItem.geometry.name = parsedBarRestaurants[i]["name"];

		geoJSONItem.properties = parsedBarRestaurants[i];

		geoJSONItem.properties.id = parsedBarRestaurants[i].id;

		geoJSONItem.properties.name = parsedBarRestaurants[i].name;

		geoJSONItem.properties.type = parsedBarRestaurants[i].type;

		geoJSONItem.properties.types = parsedBarRestaurants[i].types;

		geoJSONItem.properties.adress = parsedBarRestaurants[i].adress;

		geoJSONItem.properties.rating = parsedBarRestaurants[i].rating;

		geoJSONItem.properties.icon = "Assets/restaurantIcon.png";

		geoJSONString += JSON.stringify( geoJSONItem );

		if( parsedBarRestaurants[i].phone != null ) {

			geoJSONItem.properties.phone = parsedBarRestaurants[i].phone;

		}

		if( parsedBarRestaurants[i]["weekday_text"] != null ) {

			geoJSONItem.properties.weekday_text = parsedBarRestaurants[i].weekday_text;

		}

		if( parsedBarRestaurants[i].website != null ) {

			geoJSONItem.properties.website = parsedBarRestaurants[i].website;

		}

		if( i < parsedBarRestaurants.length - 1 )

			geoJSONString +=  ',';

	}

	geoJSONString += ',';

	for( var i = 0 ; i < parsedRestaurants.length ; i++ ) {

		geoJSONItem.geometry.coordinates = [parsedRestaurants[i]["coordinates"]["lng"], parsedRestaurants[i]["coordinates"]["lat"]];

		geoJSONItem.geometry.name = parsedRestaurants[i]["name"];

		geoJSONItem.properties = parsedRestaurants[i];

		geoJSONItem.properties.id = parsedRestaurants[i].id;

		geoJSONItem.properties.name = parsedRestaurants[i].name;

		geoJSONItem.properties.type = parsedRestaurants[i].type;

		geoJSONItem.properties.types = parsedRestaurants[i].types;

		geoJSONItem.properties.adress = parsedRestaurants[i].adress;

		geoJSONItem.properties.rating = parsedRestaurants[i].rating;

		geoJSONItem.properties.icon = "Assets/restaurantIcon.png";

		geoJSONString += JSON.stringify( geoJSONItem );

		if( parsedRestaurants[i].phone != null ) {

			geoJSONItem.properties.phone = parsedRestaurants[i].phone;

		}

		if( parsedRestaurants[i]["weekday_text"] != null ) {

			geoJSONItem.properties.weekday_text = parsedRestaurants[i].weekday_text;

		}

		if( parsedRestaurants[i].website != null ) {

			geoJSONItem.properties.website = parsedRestaurants[i].website;

		}

		if( i < parsedRestaurants.length - 1 )

			geoJSONString +=  ',';

	}

	geoJSONString += ']}';

	//DEBUG DISPLAY
	console.log( geoJSONString );

}

function cleanGeoJSON() {

	var xobj = new XMLHttpRequest();

	xobj.overrideMimeType( "application/json" );

	xobj.open( 'GET', 'JSON/places.geojson', true );

	xobj.onreadystatechange = function () {

		if ( xobj.readyState === 4 && xobj.status == "200" ) {

			var geoPlacesJSON = JSON.parse( xobj.responseText )["features"];

			console.log( geoPlacesJSON );

			var newPlaces = [];

			var ids = [];

			var doublons = 0;

			var geoJSONItem = {

				"type": "Feature",

				"geometry": {

					"type": "Point",

					"coordinates": [null, null]

				},

				"properties": {

					"adress" : null,

					"icon" : null,

					"id" : null,

					"name": null,

					"opened" : null,

					"rating" : null,

					"type" : null,

					"types" : null,

					"website" : null,

					"weekday_text" : null,

					"phone" : null

				}

			};

			for( var i in geoPlacesJSON ) {

				geoJSONItem = geoPlacesJSON[i];

				if( ids.indexOf( geoJSONItem.properties.id ) === -1 ) {

					newPlaces.push( geoJSONItem );

					ids.push( geoJSONItem.properties.id );

				} else {

					doublons ++;

				}

			}

			console.log( JSON.stringify( newPlaces ) );

		}

	};

	xobj.send( null );

}

// Location button by mapbox
/*
map.addControl( new mapboxgl.GeolocateControl ( {

	positionOptions: {

		enableHighAccuracy: true

	},

	trackUserLocation: true

} ) );*/

// JSONS

function showMap( err, data ) {
	// The geocoder can return an area, like a city, or a
	// point, like an address. Here we handle both cases,
	// by fitting the map bounds to an area or zooming to a point.
	if ( data.lbounds ) {
		map.fitBounds( data.lbounds );
	} else if ( data.latlng ) {
		map.setView( [data.latlng[0], data.latlng[1]], 13 );
	}
}
//############################################################//
// getPlacesOffline

function filterMap() {

	var restaurantButton = document.getElementById( "restaurantButton" );

	var barButton = document.getElementById( "barButton" );

	var barRestaurantButton = document.getElementById( "barRestaurantButton" );


	var typeButtons = [restaurantButton, barButton, barRestaurantButton];


	var priceButton1 = document.getElementById( "priceButton1" );

	var priceButton2 = document.getElementById( "priceButton2" );

	var priceButton3 = document.getElementById( "priceButton3" );

	var priceButton4 = document.getElementById( "priceButton4" );


	var priceButtons = [priceButton1, priceButton2, priceButton3, priceButton4];


	var starButton1 = document.getElementById( "starButton1" );

	var starButton2 = document.getElementById( "starButton2" );

	var starButton3 = document.getElementById( "starButton3" );

	var starButton4 = document.getElementById( "starButton4" );

	var starButton5 = document.getElementById( "starButton5" );


	var starButtons = [starButton1, starButton2, starButton3, starButton4, starButton5];


	var aroundMeButton = document.getElementById( "aroundMe" );

	var openedNowButton = document.getElementById( "openedNow" );


	var filter = {

		types: [false, false, false],

		price : 0,

		rating : 0,

		aroundMe : aroundMeButton.checked,

		opened : openedNowButton.checked

	};

	var i;

	for ( i = 0 ; i < typeButtons.length ; i ++ ) {

		filter.types[i] =  $( typeButtons[i] ).data().clicked;

	}

	for ( i = 0 ; i < priceButtons.length && $( priceButtons[i] ).data().clicked ; i ++ ) {

		filter.price++;

	}

	for ( i = 0 ; i < starButtons.length && $( starButtons[i] ).data().clicked ; i ++ ) {

		filter.rating++;

	}

	var activeLayers = [];

	if( filter.types[0] === false )
		map.setLayoutProperty( 'restaurantPlaceSymbol', 'visibility', 'none' );
	else
		activeLayers.push( 'restaurantPlaceSymbol' );

	if( filter.types[0] === false )
		map.setLayoutProperty( 'barPlaceSymbol', 'visibility', 'none' );
	else
		activeLayers.push( 'barPlaceSymbol' );

	if( filter.types[0] === false )
		map.setLayoutProperty( 'barRestaurantPlaceSymbol', 'visibility', 'none' );
	else
		activeLayers.push( 'barRestaurantPlaceSymbol' );

	for( var i in activeLayers )
	{

		map.setFilter( activeLayers[i], ['==', 'rating', filter.rating] );

	}

}

//############################################################//
// Offline callbacks

function fetchCallBack( results, status ) {

	if( status === google.maps.places.PlacesServiceStatus.OK )
	{

		//  console.log( results[0]['opening_hours']['weekday_text'] );

		counter += results.length;

		//  console.log( results.length );

		// console.log( results );

		for ( var i = 0 ; i < results.length ; i++ ) {

			var actualPlace = results[i];

			placeInformations = {

				"id" : actualPlace['place_id'],

				"coordinates" : actualPlace['geometry']['location'],

				"adress" : actualPlace['vicinity'],

				"rating" : actualPlace['rating'],

				"opened" : null,

				"name" : actualPlace ['name'],

				"type" : null,

				"types" : actualPlace['types'],

				"icon" : actualPlace['icon'],

				"opening_hours" : actualPlace['opening_hours']

			};

			if( actualPlace['opening_hours'] )
				placeInformations.opened = actualPlace['opening_hours']['open_now'];

			var isBar = checkIfPlaceIsBar( actualPlace );

			var isRestaurant = checkIfPlaceIsRestaurant( actualPlace );

			if( isBar && isRestaurant )
			{

				placeInformations.type = "Bar-restaurant";

			}
			else if ( isBar )
			{

				placeInformations.type = "Bar";

			}
			else if ( isRestaurant )
			{

				placeInformations.type = "Restaurant";

			}

			if ( isBar && isRestaurant )
				barsRestaurants += JSON.stringify( placeInformations ) + ",";
			else if ( isBar )
				bars += JSON.stringify( placeInformations ) + ",";
			else
				restaurants += JSON.stringify( placeInformations ) + ",";

		}

	}

}

//############################################################//

function getDetailsCallback( result, status, bars, restaurants, barRestaurants, state , progression ) {

	state --;

	console.log( "Progression : " + state + " / " + progression + " ... Status : " + status );

	if ( status === google.maps.places.PlacesServiceStatus.OK ) {

		// console.log( "callback" );

		var actualPlace = result;

		placeInformations = {

			"id" : actualPlace['place_id'],

			"coordinates" : actualPlace['geometry']['location'],

			"adress" : actualPlace['vicinity'],

			"rating" : actualPlace['rating'],

			"opened" : null,

			"name" : actualPlace ['name'],

			"type" : null,

			"types" : actualPlace['types'],

			"icon" : actualPlace['icon'],

			"weekday_text" : null,

			"website" : actualPlace['website'],

			"phone" : actualPlace['formatted_phone_number']

		};

		if( actualPlace['opening_hours'] ) {

			placeInformations.opened = actualPlace['opening_hours']['open_now'];

			placeInformations.weekday_text = actualPlace['opening_hours']['weekday_text'];

		}

		var isBar = checkIfPlaceIsBar( actualPlace );

		var isRestaurant = checkIfPlaceIsRestaurant( actualPlace );

		if( isBar && isRestaurant )
		{

			placeInformations.type = "Bar-restaurant";

			barRestaurants.push( placeInformations );

		}
		else if ( isBar )
		{

			placeInformations.type = "Bar";

			bars.push( placeInformations );

		}
		else if ( isRestaurant )
		{

			placeInformations.type = "Restaurant";

			restaurants.push( placeInformations );

		}

	}

}
