$(document).ready(function() {

  $("#formOne").submit(function()  {
    var nameInput = $("input#name").val();
    var favoritePlaceInput = $("input#favoritePlace").val();
    var nounInput = $("input#noun").val();
    var musicInput = $("input#music").val();
    var foodInput = $("input#food").val();
    var vacationInput = $("input#vacation").val();

    event.preventDefault();
  });
});
