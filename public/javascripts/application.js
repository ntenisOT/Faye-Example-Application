$(function() {
  var faye = new Faye.Client('http://morning-flower-798.heroku.com/faye');
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});
