# InterMap, an interactive map to find bars or restaurants with your criteria

You can find our project [here](http://nellybarret.fr/projets/interactiveMapLyon/index.php).

## Introduction

InterMap is an interactive map of Lyon with bars and restaurants. It allows you to search for an establishment and to filter results by selecting criteria like price or rating. The data integration part allowed us to retrieve data from many sources, i.e. Google and Yelp, in order to have data as complete as possible. The first one, Google Places API, is for data about establishments and their locations and the second one, Yelp API, brings to us more information about testahblishments, like type of food, opoening hours and even comments on . 

The integrated sources are stored in a JSON file which contains for each entity at least a name, an address and a geometry (GeoJSON). A manual matching part have been made at the entity level, i.e. detecting same entities between Google and Yelp. 

### A use-case with Alice, a long-time resident in Lyon

Alice has lived in Lyon for 10 years and she really likes to go out with her friends. She decides to go out and she would like to discover a new bar with her friends. She often goes to beer bar and want to give a try to a tapas bar. With InterMap she can find a bar that serve tapas and that is near her home thanks to geolocalisation. Moreover she filters establishments with the "opened now" criteria, so she can go witth her friends now.

### Another use-case with Bob, a newcomer in Lyon

Bob is a newcomer in Lyon after his job transfer. He has no idea where he can find a traditional French restaurant to celebrate his promotion with his family. With InterMap he searches for a restaurant which is opened on Staurday evening and which have a high quality (high price and four or five stars for rating). TThe the intergation of Google and Yelp he has a lot of choices displayed on the map. He can visit website or call many establishments to have more details about the menu. Finally, he checks the opening hours of the top-5 restaurants that he have selected. 

## Getting Started

### Data
Example of place informations:
```
    {
        formatted_address       : "["Metro Cuire (C)","69300 Caluire et Cuire","France"]",
        formatted_phone_number  : "06 61 41 99 60",
        geometry                : "{"location":{"lat":45.785595167419004,"lng":4.83302194434442}}",
        mainType                : "Bar-Restaurant",
        name                    : "Pitakia",
        place_id                : "pitakia-caluire-et-cuire",
        price                   : "€",
        rating                  : 4,
        scope                   : "YELP",
        subtypes                : "[{"alias":"foodtrucks","title":"Food Trucks"},{"alias":"greek","title":"Greek"}]",
        url                     : "https://www.yelp.com/biz/pitakia-caluire-et-cuire?adjust_creative=tF3mc9kTCu1E1IXMV0XVwQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tF3mc9kTCu1E1IXMV0XVwQ",
        vicinity                : "Metro Cuire (C)"
    }
```
### Built With

* [Mapbox](https://www.mapbox.com/) - API for map
* [Google Places](https://developers.google.com/places/) - API for data information
* [Yelp](https://www.yelp.com/) - second API for data
* [Bootstrap](https://getbootstrap.com/) - Web framework
* [JsDoc](http://usejsdoc.org/) - API documentation generator for JavaScript

## Authors

* Louis LE BRUN   p1422721
* Nelly BARRET    p1507461

## License

This project is licensed under copyright.

COPYRIGHTS @ Nelly BARRET et Louis LE BRUN - InterMap 2018
