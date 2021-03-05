var lectureSelect = "#lecture-Select";
$("#nextBtn").click(function () {
  myStorage = window.localStorage;
  localStorage.setItem("lecture", $(lectureSelect + " option:selected").text());
  localStorage.setItem("date", $("#date-input").val());
  localStorage.setItem("time", $("#time-input").val());
  window.location.href = "/confirmation";
});
