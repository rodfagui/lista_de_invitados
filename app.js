$(document).ready(function() {
  var button = $(".modal-footer :submit");
  button.attr("data-dismiss", "modal");
  button.on("click", function (event) {
    let confirmation;
    
    if ($("#confirmed").is(':checked')) {
      confirmation = "<span class=\"glyphicon glyphicon-ok\"></span>";
    } else {
      confirmation = "<span></span>";
    }

    $("tbody").append("<tr><td>" + $("#first-name").val() + "</td><td>" + $("#last-name").val() + "</td><td class=\"text-center\">" + $("#mobile-number").val() + "</td><td class=\"text-center\">" + confirmation + "</td></tr>");
    
    $("#first-name").val("");
    $("#last-name").val("");
    $("#mobile-number").val("");
    $("#confirmed").attr("checked", false);

    event.preventDefault();
  });
});