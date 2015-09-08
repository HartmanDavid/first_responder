Emergencies = new Mongo.Collection('emergencies');

if (Meteor.isClient) {
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
            Session.set('locationLat',  locationLat);
            Session.set('locationLong', locationLong);
            console.log('location',     location);
            
            Emergencies.insert({
                        userId   : Meteor.userId(),
                        location : position,
                        date     : new Date(),
                        status   : 'pending'
                    });
        }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
