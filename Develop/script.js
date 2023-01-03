
var currentDate = dayjs().format('dddd, MMMM D ');
// gets me todays date
var currentHour = dayjs().hour();
// show current date under text
$("#currentDay").text(currentDate);

$(function (e) {
  e.preventDefault
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  $(".saveBtn").on("click", function () {
      var userText = $(this).siblings(".col-8").val();
      var workTime = $(this).parent().attr("id");
      localStorage.setItem(workTime, userText);
  })
  function backgroundColor() {
      $(".time-block").each(function () {
          var userTimeChoice = parseInt($(this).attr("id").split("hour-")[1]);
          if (userTimeChoice < currentHour) {
              $(this).removeClass("future");
              $(this).removeClass("present");   
          }
          else if (userTimeChoice === currentHour) {
              $(this).removeClass("past");
              $(this).removeClass("future"); 
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
          }
      });
  };
  backgroundColor();
});
