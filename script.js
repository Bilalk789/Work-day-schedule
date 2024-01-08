$(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });
  
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var storedInput = localStorage.getItem(timeBlockId);

    if (storedInput) {
      $(this).find(".description").val(storedInput);
    }
  });
});

  $(function () {
    function updateStyles() {
    var currentHour = dayjs().format("H");

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < 9 || blockHour > 17) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour == currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  updateStyles();
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var storedInput = localStorage.getItem(timeBlockId);

    if (storedInput) {
      $(this).find(".description").val(storedInput);
    }
  });
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
