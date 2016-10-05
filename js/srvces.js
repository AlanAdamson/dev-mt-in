angular.module('devMtIn').service('srvces', function(){

  var profiles = {

  };

  this.getProfile = function() {
    return  profiles;
  };

  this.addData = function(newProfile) {
      profiles.push(newProfile);
  };

});
