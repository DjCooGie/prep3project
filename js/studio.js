// form validation

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("sms").value;

  if (name == "" && email == "" && message == "") {
    alert("Kindly write your name, email and add your message!");
    return false;
  }

  else if (name == "" || name == null) {
    alert("Kindly write your name")
    return false;
  }
  
  let atposition = email.indexOf("@");
  let dotposition = email.lastIndexOf(".");
  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
    alert("Kindly enter a valid e-mail address " + atposition + "" + dotposition);
    return false;
  }
  
  else if (message == "") {
    alert("Kindly add your message!")
    return false;
  }
 
  else {
    alert(name + ", your message has been received successfully. Thank you.");
  }

};



$(document).ready(function () {
  
  // what we do popup text

  $("#des").click(function () {
    $("#des p").toggle();
    $("#des img").toggle();
  });

  $("#dev").click(function () {
    $("#dev p").toggle();
    $("#dev img").toggle();
  });

  $("#pmg").click(function () {
    $("#pmg p").toggle();
    $("#pmg img").toggle();
  });

    // portfolio titles

  $('#hp1').hover(function () {
    $('#topk').fadeToggle(500);
  });

  $('#hp2').hover(function () {
    $('#topk1').fadeToggle(500);
  });

  $('#hp3').hover(function () {
    $('#topk2').fadeToggle(500);
  });

  $('#hp4').hover(function () {
    $('#topk3').fadeToggle(500);
  });

  $('#hp5').hover(function () {
    $('#topk4').fadeToggle(500);
  });

  $('#hp6').hover(function () {
    $('#topk5').fadeToggle(500);
  });

  $('#hp7').hover(function () {
    $('#topk6').fadeToggle(500);
  });

  $('#hp8').hover(function () {
    $('#topk7').fadeToggle(500);
  });

});







