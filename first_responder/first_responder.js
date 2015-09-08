Emergencies = new Mongo.Collection('emergencies');

if (Meteor.isClient) {
  Session.setDefault('location', []);
  Session.setDefault('locationLat', null);
  Session.setDefault('locationLong', null);

  Template.requestHelp.helpers({
    location: function () {
      return Session.get('locationLat', "locationLong" )
    }
  });

  Template.requestHelp.events({
    'click button':  function(){
            console.log('click');
            var position = Geolocation.currentLocation();
            if (!position){
                console.log(Geolocation.error());
            }else{
            var location = [position.coords.longitude, position.coords.latitude];
            }
            console.log(location);
            Session.set('location',  location);
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
