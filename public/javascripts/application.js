$(function() {
  var faye = new Faye.Client('http://fayeredis.herokuapp.com/faye');
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});
