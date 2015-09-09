Emergencies = new Mongo.Collection('emergencies');

if (Meteor.isClient) {
  var MAP_ZOOM = 15;

  Meteor.startup(function() {
  GoogleMaps.load();
  });

  Session.setDefault('location', []);


  Template.requestHelp.helpers({
    location: function () {
        var coords = {
            location    : Session.get('location'),
            locationLat : Session.get('locationLat'),
            locationLong: Session.get('locationLong')
          };
        return coords;
      },
  });

      // ****button event***
  Template.requestHelp.events({
    'click button':  function(){
      // pull the Geolocation ans set to var position
            var position = Geolocation.currentLocation();
            if (!position){
                console.log(Geolocation.error());
            }else{
            console.log("position", position);
      // break out the position object into coordinates
            var location     = [position.coords.latitude, position.coords.longitude];
            var locationLat  = location[0];
            var locationLong = location[1];
            }
      // set a few session variables
            Session.set('location',     location);
            Session.set('locationLat',  locationLat);
            Session.set('locationLong', locationLong);
            console.log('location',     location);
      // object keys for DB collection Emergencies
            Emergencies.insert({
                        userId   : Meteor.userId(),
                        location : location,
                        date     : new Date(),
                        status   : 'pending'
                    });
            }
  });
  Template.map.helpers({
    geolocationError: function() {
      var error = Geolocation.error();
      console.log('Geolocation Error', error);
      return error && error.message;
    },
    mapOptions: function() {
      var latLng = Geolocation.latLng();
      // Initialize the map once we have the latLng.
      if (GoogleMaps.loaded() && latLng) {
        return {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  });

  Template.map.onCreated(function() {
    var self = this;

    GoogleMaps.ready('map', function(map) {
      var marker;

      // Create and move the marker when latLng changes.
      self.autorun(function() {
        var latLng = Geolocation.latLng();
        if (! latLng)
          return;

        // If the marker doesn't yet exist, create it.
        if (! marker) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(latLng.lat, latLng.lng),
            map: map.instance
          });
        }
        // The marker already exists, so we'll just change its position.
        else {
          marker.setPosition(latLng);
        }

        // Center and zoom the map view onto the current position.
        map.instance.setCenter(marker.getPosition());
        map.instance.setZoom(MAP_ZOOM);
      });
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
