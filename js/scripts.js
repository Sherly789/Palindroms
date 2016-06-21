$(document).ready(function() {
  $("#blankform form").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#sentence").val();

    if (sentence === sentence.split("").reverse().join("")) {
      $("#output h3").text("'" + sentence + "'" + " is a palindrome.");
    } else {
      $("#output h3").text("'" + sentence + "'" + " is not a palindrome.");
    }
  });
});
