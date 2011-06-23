$(function() {
  var faye = new Faye.Client('http://fayesedar.herokuapp.com/faye');
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});
