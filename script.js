// Show current date in header
currentTime = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentTime);

appointments = JSON.parse(localStorage.getItem("appointments"));
if (!appointments) {
  appointments = [];
};

// Create timeblocks
for (i = 0; i < 9; i++) {
  var timeRow = $("<div>").addClass("row row" + i);
  $(".container").append(timeRow);
  var hourCol = $("<div>").addClass("col col-1 hour").attr("id", "hour" + i);
  var textCol = $("<textArea>").addClass("col col-10").attr("id", "text" + i);
  var saveCol = $("<div>").addClass("col col-1 saveBtn").attr("id", "save" + i);
  $(".row" + i).append(hourCol, textCol, saveCol);
  var saveIcon = $("<i>").addClass("far fa-save fa-2x");
  $("#save" + i).append(saveIcon);
  var hourText = moment(9 + i, "HH").format("ha");
  $("#hour" + i).text(hourText);
  if (moment(9 + i, "HH").isSame(moment(), "hour")) {
    $("#text" + i).addClass("present");
  } else if (moment(9 + i, "HH").isBefore(moment())) {
    $("#text" + i).addClass("past");
  } else if (moment(9 + i, "HH").isAfter(moment())) {
    $("#text" + i).addClass("future");
  };
  $("#text" + i).text(appointments[i]);
};

// Event Listeners
$(".saveBtn").on("click", function () {
  appointments = []
  for (i = 0; i < 9; i++) {
    appointments.push($("#text" + i).val());
    console.log(appointments);
  }
  localStorage.setItem("appointments", JSON.stringify(appointments));
});
var saveAppts = function () {
  appointments = []
  for (i = 0; i < 9; i++) {
    appointments.push($("#text" + i).val());
    console.log(appointments);
  }
  localStorage.setItem("appointments", JSON.stringify(apointments));
};


