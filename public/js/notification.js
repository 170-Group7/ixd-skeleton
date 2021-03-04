var checkboxes = document.getElementsByClassName("form-check-input");
$("#selectAllBtn").click(() => {
  //alert(checkboxes.length);
  for (var i in checkboxes) {
    checkboxes[i].checked = true;
  }
});

$("#cancelAllBtn").click(() => {
  //alert(checkboxes.length);
  for (var i in checkboxes) {
    checkboxes[i].checked = false;
  }
});

$(".setBtn").click(e => {
  $(e.target).parent().html(`<div class="form-group w-50">
          <input class="form-control" type="tel" value="1-(000)-000-0000" id="example-tel-input">
        <button type="button" class="btn btn-primary btn-sm addBtn" onclick="addPhoneNumber(this)">Add</button>
    </div>`);
});

$("#sendBtn").click(e => {
  let contactsSelect = $(".form-check-input");
  let count = 0;
  var phones = [];
  for (var i in contactsSelect) {
    if (contactsSelect[i].checked) {
      var phone = $(contactsSelect[i])
        .parent()
        .parent()
        .prev()
        .find(".phone")
        .text()
        .toString();

      phone = phone.replaceAll("(", "");
      phone = phone.replaceAll(")", "");
      phone = phone.replaceAll("-", "");
      phone = "+" + phone;
      if (phone.length == 12) phones.push(phone);
    }
  }
  console.log(phones.length);
  if (phones.length != 0) {
    $.post("/notification", { phones: phones }, complete);
  } else {
    alert("no add any participants' phone");
  }
});

function complete() {
  console.log("end");
}
function edit(e) {
  $(e).parent().html(`<div class="form-group w-50">
              <input class="form-control" type="tel" value="1-(000)-000-0000" id="example-tel-input">
            <button type="button" class="btn btn-primary btn-sm addBtn" onclick="addPhoneNumber(this)">Add</button>
        </div>`);
}
function addPhoneNumber(e) {
  console.log(e);
  let tel = $(e).prev().val();
  console.log(tel);
  $(e)
    .parent()
    .parent()
    .html(
      `<div class="phone">${tel}</div> <button type="button" class="btn btn-primary btn-sm setBtn" onclick="edit(this)">Update</button>`
    );
  //do something to backend
}
function kk() {
  console.log("adf");
}
