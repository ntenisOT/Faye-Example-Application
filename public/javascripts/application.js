$(function() {
  var faye = new Faye.Client('http://fayeserverexample.herokuapp.com/faye');
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});
