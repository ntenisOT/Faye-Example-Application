$(function() {
  var faye = new Faye.Client('http://young-light-581.heroku.com/faye');
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});
