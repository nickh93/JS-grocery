$(document).ready(function() {
  $("#items form").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4", "item5"];

    items.forEach(function(item) {
      var itemInput = $("input#" + item).val();
      var itemUpper = itemInput.toUpperCase();
      $("#itemslist").append("<li>" + itemSort + "</li>");
    });

    event.preventDefault();
  // $("#blanks form").hide();
  });
});
