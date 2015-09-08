Emergencies = new Mongo.Collection('emergencies');

if (Meteor.isClient) {
  Session.setDefault('location', []);
  Session.setDefault('locationLat', null);
  Session.setDefault('locationLong', null);

  Template.requestHelp.helpers({
    location: function () {
      return Session.get('location')
    },
    locationLat: function () {
      return Session.get('locationLat')
    },
    locationLong: function () {
      return Session.get('locationLong')
    }
  });

  Template.requestHelp.events({
    'click button':  function(){
            console.log('click');
            var position = Geolocation.currentLocation();
            if (!position){
                console.log(Geolocation.error());
            }else{
            var location     = [position.coords.latitude, position.coords.longitude];
            var locationLat  = location[0];
            var locationLong = location[1];
            }
            Session.set('location',     location);
            console.log("location",     location);
            Session.set('locationLat',  locationLat);
            console.log("Latitiude",    locationLat);
            Session.set('locationLong', locationLong);
            console.log("Longitude",    locationLong);
            Emergencies.insert({
                        userId  : Meteor.userId(),
                        location: position,
                        date    : new Date(),
                        status  : 'pending'
                    });
        }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
