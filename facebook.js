

if (Meteor.isClient) {
  var Friends = FacebookCollections.getFriends("guashomerchan@gmail.com",["774439182629332","Eduardo Merchan"],100);
  // counter starts at 0


  Template.hello.helpers({
    friends: function () {

      return FacebookCollections.getFriends("guashomerchan@gmail.com",["774439182629332","Eduardo Merchan"],100);

    }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
