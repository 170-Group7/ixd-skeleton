time = localStorage.getItem("time");
lecture = localStorage.getItem("lecture");
date = localStorage.getItem("date");
participants = document.getElementsByClassName("list-group-item");
participants_labels = [];
$(document).ready(function () {
  $("#time_label").text(time);
  $("#lecture_label").text(lecture);
  $("#date_label").text(date);
  for (var i = 0; i < participants.length; i++) {
    //console.log(participants[i].innerHTML);
    participants_labels.push(participants[i].innerHTML);
  }
});

$("#confirmBtn").click(function () {
  $.post(
    "/newevent",
    {
      time,
      lecture,
      date,
      participants: participants_labels,
    },
    function () {
      window.location.href = "/success";
    }
  );
});
